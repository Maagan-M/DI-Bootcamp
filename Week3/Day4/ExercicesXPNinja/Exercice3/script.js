//Prompt the user for a word and save it to a variable.
const word = prompt("Please enter a word:")

//Delete all the vowels of the word and console.log the result.
const vowelsRegex = /[aeiou]/gi
console.log(vowelsRegex)

const replaced = word.replace(vowelsRegex, function(match) {
  switch (match.toLowerCase()) {
    case "a":
      return "1";
    case "e":
      return "2";
    case "i":
      return "3";
    case "o":
      return "4";
    case "u":
      return "5";
  }
})
console.log(replaced);
