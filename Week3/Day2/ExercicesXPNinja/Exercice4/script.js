// Prompt the user for a number
let num = Number(prompt("Enter a number:"));

// Initialize the base "Boom" string
let boomString = "B";

// Check the value of the number and build the "Boom" string accordingly
if (num < 2) {
  boomString += "o";
} else {
  boomString += "o".repeat(num);
}

// Check if the number is evenly divisible by 2
if (num % 2 === 0) {
  boomString += "!";
}

// Check if the number is evenly divisible by 5
if (num % 5 === 0) {
  boomString = boomString.toUpperCase();
}

// Check if the number is evenly divisible by both 2 and 5
if (num % 2 === 0 && num % 5 === 0) {
  boomString = boomString.toUpperCase() + "!";
}

// Log the final "Boom" string to the console
console.log(boomString);
