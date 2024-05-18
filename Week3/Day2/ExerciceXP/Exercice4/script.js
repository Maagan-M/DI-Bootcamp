let c;
let a = 34;
let b = 21;

console.log(a+b)
// Prediction: 34 + 21 = 55
// Actual: 55

a = 2;

console.log(a+b) //second expression
// Prediction: a + 21 = 2 + 21 = 23
// Actual: 23

//The value of c is undefined even though c does exist

console.log(3 + 4 + '5')
// Prediction: 12
// Actual: 75, the quotation marks show that 5 is not a number but a string i. e. it's a concatenation, so 3+4 means 7 and 5 is added right after to get 75