//Create a function that takes a string as an argument.
//Have the function return:
//The string but all letters in even indexes should be capitalized.
//The string but all letters in odd indexes should be capitalized.
function capitalize(str) {
    let evenCaps = '';
    let oddCaps = '';

    for (let i = 0; i < str.length; i++) {
      if (i % 2 === 0) {
        evenCaps += str[i].toUpperCase();
        oddCaps += str[i];
      } else {
        evenCaps += str[i];
        oddCaps += str[i].toUpperCase();
      }
    }
  
    return [evenCaps, oddCaps];
  }
  
  console.log(capitalize("abcdef")); // Output: ['AbCdEf', 'aBcDeF']
  