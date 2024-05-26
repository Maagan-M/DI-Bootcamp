//Write a JS function that takes an array and returns a new array with only unique elements
function getUniqueElements(array) {
    let uniqueArray = [];
  
    for (let i = 0; i < array.length; i++) {
      if (!uniqueArray.includes(array[i])) {
        uniqueArray.push(array[i]);
      }
    }
  
    return uniqueArray;
  }

const list1 = [1, 2, 3, 3, 3, 3, 4, 5];
console.log(getUniqueElements(list1)); // Output: [1, 2, 3, 4, 5]

const list2 = [1, 2, 3, 3, 3, 3, 4, 5];
console.log(getUniqueElements(list2)); // Output: [1, 2, 3, 4, 5]
