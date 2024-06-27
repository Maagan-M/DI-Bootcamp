const quotes = [
    { id: 0, author: "Albert Einstein", quote: "Life is like riding a bicycle. To keep your balance you must keep moving.", likes: 0 },
    { id: 1, author: "Isaac Newton", quote: "If I have seen further it is by standing on the shoulders of Giants.", likes: 0 },
    { id: 2, author: "Yoda", quote: "Do, or do not. There is no try.", likes: 0 },
    { id: 3, author: "Confucius", quote: "It does not matter how slowly you go as long as you do not stop.", likes: 0 }
];

let lastQuoteId = -1;

document.getElementById('generate-quote').addEventListener('click', generateQuote);

function generateQuote() {
    let randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * quotes.length);
    } while (randomIndex === lastQuoteId);

    lastQuoteId = randomIndex;
    const quote = quotes[randomIndex];

    document.getElementById('quote-display').textContent = `"${quote.quote}"`;
    document.getElementById('author-display').textContent = `— ${quote.author}`;
}

document.getElementById('add-quote-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const newQuote = document.getElementById('new-quote').value;
    const newAuthor = document.getElementById('new-author').value;

    const newId = quotes.length > 0 ? quotes[quotes.length - 1].id + 1 : 0;
    quotes.push({ id: newId, author: newAuthor, quote: newQuote, likes: 0 });

    document.getElementById('new-quote').value = '';
    document.getElementById('new-author').value = '';
});

document.getElementById('char-count-incl-space').addEventListener('click', function() {
    const quote = document.getElementById('quote-display').textContent;
    alert(`Character Count (incl. spaces): ${quote.length}`);
});

document.getElementById('char-count-excl-space').addEventListener('click', function() {
    const quote = document.getElementById('quote-display').textContent.replace(/\s/g, '');
    alert(`Character Count (excl. spaces): ${quote.length}`);
});

document.getElementById('word-count').addEventListener('click', function() {
    const quote = document.getElementById('quote-display').textContent;
    const wordCount = quote.split(/\s+/).filter(Boolean).length;
    alert(`Word Count: ${wordCount}`);
});

document.getElementById('like-quote').addEventListener('click', function() {
    if (lastQuoteId >= 0) {
        quotes[lastQuoteId].likes += 1;
        alert(`Likes: ${quotes[lastQuoteId].likes}`);
    }
});

let filterQuotes = [];
let filterIndex = -1;

document.getElementById('filter-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const author = document.getElementById('author-filter').value;
    filterQuotes = quotes.filter(q => q.author.toLowerCase() === author.toLowerCase());
    filterIndex = 0;
    if (filterQuotes.length > 0) {
        displayFilterQuote();
    } else {
        alert('No quotes found for this author.');
    }
});

document.getElementById('previous-quote').addEventListener('click', function() {
    if (filterQuotes.length > 0) {
        filterIndex = (filterIndex - 1 + filterQuotes.length) % filterQuotes.length;
        displayFilterQuote();
    }
});

document.getElementById('next-quote').addEventListener('click', function() {
    if (filterQuotes.length > 0) {
        filterIndex = (filterIndex + 1) % filterQuotes.length;
        displayFilterQuote();
    }
});

function displayFilterQuote() {
    const quote = filterQuotes[filterIndex];
    document.getElementById('quote-display').textContent = `"${quote.quote}"`;
    document.getElementById('author-display').textContent = `— ${quote.author}`;
}
