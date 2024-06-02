//Retrieve the form and console.log it
const form = document.getElementById('userForm');
console.log(form);

//Retrieve the inputs by their id and console.log them
const fnameInput = document.getElementById('fname');
const lnameInput = document.getElementById('lname');
console.log(fnameInput, lnameInput);

//Retrieve the inputs by their name attribute and console.log them
const fnameInputByName = document.getElementsByName('firstname')[0];
const lnameInputByName = document.getElementsByName('lastname')[0];
console.log(fnameInputByName, lnameInputByName);

//Event listener for form submission
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting

    //Get the values of the input tags
    const fname = fnameInput.value.trim();
    const lname = lnameInput.value.trim();

    //Make sure the values are not empty
    if (fname !== '' && lname !== '') {
        // Create an li element for each input value
        const ul = document.querySelector('.usersAnswer');
        ul.innerHTML = ''; // Clear previous entries

        const fnameLi = document.createElement('li');
        fnameLi.textContent = fname;
        ul.appendChild(fnameLi);

        const lnameLi = document.createElement('li');
        lnameLi.textContent = lname;
        ul.appendChild(lnameLi);
    } else {
        alert('Please fill in both fields.');
    }
});

//Global variable to store all bold items
let allBoldItems;

//Function to collect all bold items inside the paragraph
function getBoldItems() {
    allBoldItems = document.querySelectorAll('p strong');
}

//Function to change the color of all bold text to blue
function highlight() {
    allBoldItems.forEach(item => {
        item.style.color = 'blue';
    });
}

//Function to change the color of all bold text back to black
function returnItemsToDefault() {
    allBoldItems.forEach(item => {
        item.style.color = 'black';
    });
}

//Collect all bold items
getBoldItems();

//Get the paragraph element
const paragraph = document.querySelector('p');

//Add event listeners for mouseover and mouseout
paragraph.addEventListener('mouseover', highlight);
paragraph.addEventListener('mouseout', returnItemsToDefault);
