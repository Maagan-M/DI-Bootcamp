// Arrow function to check if the argument is a string
const isString = value => typeof value === 'string';

// Test the function
console.log(isString('hello')); // true
console.log(isString([1, 2, 4, 0])); // false
