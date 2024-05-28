//Add a “light blue” background color and some padding to the <div>
let div = document.querySelector('div');
div.style.backgroundColor = 'lightblue';
div.style.padding = '10px';

//Do not display the <li> that contains the text node “John”
let firstLi = document.querySelector('ul li:first-child');
firstLi.style.display = 'none';

//Add a border to the <li> that contains the text node “Pete”
let secondLi = document.querySelector('ul li:nth-child(2)');
secondLi.style.border = '1px solid black';

//Change the font size of the whole body
document.body.style.fontSize = '20px';

//If the background color of the div is “light blue”, alert “Hello x and y”
if (div.style.backgroundColor === 'lightblue') {
    let users = Array.from(document.querySelectorAll('ul li')).map(li => li.textContent);
    alert(`Hello ${users.join(' and ')}`);
}
