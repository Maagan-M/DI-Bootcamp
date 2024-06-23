function removeDuplicates(arr) {
    const uniqueArray = [...new Set(arr)];
    return uniqueArray;
}

// Example
const array1 = [1, 2, 3, 3, 4, 5, 5, 6];
const uniqueArray1 = removeDuplicates(array1);
console.log(uniqueArray1); 

const array2 = ["apple", "banana", "orange", "banana", "apple"];
const uniqueArray2 = removeDuplicates(array2);
console.log(uniqueArray2);
