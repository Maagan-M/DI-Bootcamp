//Using Javascript, in the <div>, change the value of the id attribute from navBar to socialNetworkNavigation
let navBar = document.getElementById('navBar');
navBar.setAttribute('id', 'socialNetworkNavigation');

//We are going to add a new <li> to the <ul>
//First, create a new <li> tag
let newLi = document.createElement('li');

//Create a new text node with “Logout” as its specified text
let logoutTextNode = document.createTextNode('Logout');

//Append the text node to the newly created list node (<li>)
newLi.appendChild(logoutTextNode);

//Finally, append this updated list node to the unordered list (<ul>), using the appendChild method
let ul = document.querySelector('#socialNetworkNavigation ul');
ul.appendChild(newLi);

//Retrieve the first and last <li> elements from their parent element (<ul>)
let firstLi = ul.firstElementChild;
let lastLi = ul.lastElementChild;

//Display the text of each link
console.log('First link text:', firstLi.textContent);
console.log('Last link text:', lastLi.textContent);
