// Prompt the user for a string of numbers separated by commas
let inputString = prompt("Enter a string of numbers separated by commas:");

// Split the string into an array of substrings using ',' as the delimiter
let numberStrings = inputString.split(",");

// Convert the substrings to numbers and calculate the sum
let sum = numberStrings.reduce((accumulator, currentValue) => {
  return accumulator + Number(currentValue);
}, 0);

// Log the sum to the console
console.log("The sum of the numbers is: " + sum);
