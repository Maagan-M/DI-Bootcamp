// Prompt the user for a sentence containing the word "Nemo"
let sentence = prompt("Enter a sentence containing the word 'Nemo':");

// Split the sentence into an array of words
let words = sentence.split(" ");

// Find the index of the word "Nemo"
let position = words.indexOf("Nemo");

if (position !== -1) {
  // If "Nemo" is found, log the word position
  console.log("I found Nemo at " + position);
} else {
  // If "Nemo" is not found, log a different message
  console.log("I can't find Nemo");
}
