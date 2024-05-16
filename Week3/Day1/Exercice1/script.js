//Exercice 1
// Define variables using let
let addressNumber = 5;
let addressStreet = "BenYehuda";
let country = "Israel";

// Concatenate variables to create globalAddress
let globalAddress = "I live in " + addressStreet + " " + addressNumber + ", in " + country;

// Display globalAddress
document.getElementById("addressDisplay").textContent = globalAddress;

// Log globalAddress to the console
console.log(globalAddress);

//Exercice 2
// Step 1: Store your birth year in a variable
let birthYear = 1998;

// Step 2: Store a future year in a variable
let futureYear = 2100;

// Step 3: Calculate your possible ages for that year based on the stored values
let ageNow = new Date().getFullYear() - birthYear;
let ageInFuture = futureYear - birthYear;

// Step 4: Display the message with the substituted values
let message = "I will be " + ageInFuture + " years old in " + futureYear + ".";
document.getElementById("ageDisplay").textContent = message;

//Log to the console
console.log(ageInFuture);

