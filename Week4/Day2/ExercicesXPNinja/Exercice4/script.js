//Create a function called biggestNumberInArray(arrayNumber) that takes an array as a parameter and returns the biggest number.
//Note : This function should work with any array
function biggestNumberInArray(arrayNumber) {
    let maxNumber = 0;
  
    for (let i = 0; i < arrayNumber.length; i++) {
      if (typeof arrayNumber[i] === 'number') {
        if (arrayNumber[i] > maxNumber) {
          maxNumber = arrayNumber[i];
        }
      }
    }
      return maxNumber;
  }
  
//Examples
const array1 = [-1, 0, 3, 100, 99, 2, 99];
const array2 = ['a', 3, 4, 2];
const array3 = [];

console.log(biggestNumberInArray(array1)); // Output: 100
console.log(biggestNumberInArray(array2)); // Output: 4
console.log(biggestNumberInArray(array3)); // Output: 0
