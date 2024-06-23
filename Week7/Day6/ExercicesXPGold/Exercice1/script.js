function sumArray(arr) {
    let sum = 0;
    
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    
    return sum;
}

// Examples
const array1 = [1, 2, 3, 4, 5];
console.log(`Sum of array elements: ${sumArray(array1)}`); 

const array2 = [-1, 2, -3, 4, -5];
console.log(`Sum of array elements: ${sumArray(array2)}`); 

const array3 = [];
console.log(`Sum of array elements: ${sumArray(array3)}`); 
