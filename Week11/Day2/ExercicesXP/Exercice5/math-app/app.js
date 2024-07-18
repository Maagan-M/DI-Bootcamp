// app.js

// Require lodash and math module
const _ = require('lodash');
const { add, multiply } = require('./math');

// Sample data
const num1 = 5;
const num2 = 3;

// Calculations using lodash and custom math module
const sum = _.add(num1, num2);          // Using lodash for addition
const product = multiply(num1, num2);   // Using custom math module for multiplication

// Output results
console.log(`Sum: ${sum}`);
console.log(`Product: ${product}`);
