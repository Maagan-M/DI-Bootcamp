//Function to validate email with regex
function validateEmailWithRegex(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

//Function to handle form submission
function handleFormSubmit(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const message = document.getElementById('message');

    if (validateEmailWithRegex(email)) {
        message.textContent = 'Valid email address!';
        message.style.color = 'green';
    } else {
        message.textContent = 'Invalid email address!';
        message.style.color = 'red';
    }
}

//Add event listener for form submission
document.getElementById('emailForm').addEventListener('submit', handleFormSubmit);
