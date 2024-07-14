let quotes = [
    { id: 0, author: "Anonymous", quote: "The greatest glory in living lies not in never falling, but in rising every time we fall." },
    { id: 1, author: "Nelson Mandela", quote: "The greatest glory in living lies not in never falling, but in rising every time we fall." },
    { id: 2, author: "Walt Disney", quote: "The way to get started is to quit talking and begin doing." },
    { id: 3, author: "Albert Einstein", quote: "Strive not to be a success, but rather to be of value." },
];

let lastGeneratedId = -1;

const quoteSection = document.getElementById('quoteSection');
const generateQuoteButton = document.getElementById('generateQuote');

generateQuoteButton.addEventListener('click', generateQuote);

function generateQuote() {
    let randomIndex = Math.floor(Math.random() * quotes.length);
    
    while (randomIndex === lastGeneratedId) {
        randomIndex = Math.floor(Math.random() * quotes.length);
    }
    
    lastGeneratedId = randomIndex;
    const randomQuote = quotes[randomIndex];

    quoteSection.innerHTML = `
        <div>
            <p>${randomQuote.quote}</p>
            <p>- ${randomQuote.author}</p>
        </div>
    `;
}

const addQuoteForm = document.getElementById('addQuoteForm');
const countCharactersButton = document.getElementById('countCharacters');
const countCharactersNoSpacesButton = document.getElementById('countCharactersNoSpaces');
const countWordsButton = document.getElementById('countWords');
const likeQuoteButton = document.getElementById('likeQuote');

addQuoteForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const newQuoteText = document.getElementById('newQuote').value.trim();
    const newAuthor = document.getElementById('newAuthor').value.trim();

    if (newQuoteText !== '' && newAuthor !== '') {
        const newId = quotes.length;
        const newQuote = {
            id: newId,
            author: newAuthor,
            quote: newQuoteText,
            likes: 0
        };
        
        quotes.push(newQuote);
        alert('Quote added successfully!');
        addQuoteForm.reset();
    } else {
        alert('Please enter both Quote and Author.');
    }
});

countCharactersButton.addEventListener('click', function() {
    if (lastGeneratedId !== -1) {
        const quoteText = quotes[lastGeneratedId].quote;
        const numCharacters = quoteText.length;
        alert(`Number of characters (with spaces): ${numCharacters}`);
    }
});

countCharactersNoSpacesButton.addEventListener('click', function() {
    if (lastGeneratedId !== -1) {
        const quoteText = quotes[lastGeneratedId].quote;
        const numCharactersNoSpaces = quoteText.replace(/\s/g, '').length;
        alert(`Number of characters (without spaces): ${numCharactersNoSpaces}`);
    }
});

countWordsButton.addEventListener('click', function() {
    if (lastGeneratedId !== -1) {
        const quoteText = quotes[lastGeneratedId].quote;
        const words = quoteText.split(/\s+/).filter(word => word !== '');
        const numWords = words.length;
        alert(`Number of words: ${numWords}`);
    }
});

likeQuoteButton.addEventListener('click', function() {
    if (lastGeneratedId !== -1) {
        quotes[lastGeneratedId].likes++;
        alert('You liked this quote!');
    }
});

const filterForm = document.getElementById('filterForm');
const filterAuthorInput = document.getElementById('filterAuthor');
const previousQuoteButton = document.getElementById('previousQuote');
const nextQuoteButton = document.getElementById('nextQuote');
let filteredQuotes = [];
let filteredIndex = 0;

filterForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const authorToFilter = filterAuthorInput.value.trim();
    filteredQuotes = quotes.filter(quote => quote.author.toLowerCase() === authorToFilter.toLowerCase());
    
    if (filteredQuotes.length > 0) {
        filteredIndex = 0;
        displayFilteredQuote(filteredQuotes[filteredIndex]);
        showNavigationButtons();
    } else {
        alert(`No quotes found for author: ${authorToFilter}`);
        clearQuoteSection();
    }
});

previousQuoteButton.addEventListener('click', function() {
    if (filteredIndex > 0) {
        filteredIndex--;
        displayFilteredQuote(filteredQuotes[filteredIndex]);
    }
});

nextQuoteButton.addEventListener('click', function() {
    if (filteredIndex < filteredQuotes.length - 1) {
        filteredIndex++;
        displayFilteredQuote(filteredQuotes[filteredIndex]);
    }
});

function displayFilteredQuote(quote) {
    quoteSection.innerHTML = `
        <div>
            <p>${quote.quote}</p>
            <p>- ${quote.author}</p>
        </div>
    `;
}

function showNavigationButtons() {
    const navigationButtons = document.getElementById('navigationButtons');
    navigationButtons.style.display = 'block';
}

function clearQuoteSection() {
    quoteSection.innerHTML = '';
    filteredQuotes = [];
    filteredIndex = 0;
    hideNavigationButtons();
}

function hideNavigationButtons() {
    const navigationButtons = document.getElementById('navigationButtons');
    navigationButtons.style.display = 'none';
}
