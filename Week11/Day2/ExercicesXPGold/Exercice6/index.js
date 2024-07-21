const readlineSync = require('readline-sync');

function validateFullName(name) {
    const regex = /^[A-Z][a-z]+ [A-Z][a-z]+$/;
    
    return regex.test(name);
}

function getAndValidateFullName() {
    const fullName = readlineSync.question('Enter your full name (e.g., John Doe): ');

    if (validateFullName(fullName)) {
        console.log('The name is valid.');
    } else {
        console.log('The name is invalid. Please ensure it follows the format: "John Doe"');
    }
}

getAndValidateFullName();
