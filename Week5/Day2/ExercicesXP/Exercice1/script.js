//Retrieve the h1 and log it to the console
const h1 = document.querySelector('h1');
console.log(h1);

//Remove the last paragraph in the <article> tag
const article = document.querySelector('article');
const lastParagraph = article.querySelector('p:last-of-type');
article.removeChild(lastParagraph);

//Add event listener to change the background color of h2 to red when clicked
const h2 = document.querySelector('h2');
h2.addEventListener('click', () => {
    h2.style.backgroundColor = 'red';
});

//Add event listener to hide the h3 when clicked
const h3 = document.querySelector('h3');
h3.addEventListener('click', () => {
    h3.style.display = 'none';
});

//Add a button to make all paragraphs bold when clicked
const boldBtn = document.getElementById('boldBtn');
boldBtn.addEventListener('click', () => {
    const paragraphs = document.querySelectorAll('article p');
    paragraphs.forEach(paragraph => {
        paragraph.style.fontWeight = 'bold';
    });
});

//Change the font size of h1 to a random size between 0 to 100 pixels when hovered
h1.addEventListener('mouseover', () => {
    const randomSize = Math.floor(Math.random() * 101);
    h1.style.fontSize = randomSize + 'px';
});

//Fade out the 2nd paragraph when hovered
const secondParagraph = document.querySelectorAll('article p')[1];
secondParagraph.addEventListener('mouseover', () => {
    secondParagraph.classList.add('fade');
});
