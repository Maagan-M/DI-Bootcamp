//Prompt the user for the first number.
//Store the first number in a variable called num1.
//Hint : console.log the type of the variable num1. What should you do to convert it to a number ?
let num1 = prompt("Enter 1st number:")
console.log(typeof num1)
num1 = Number(num1)

//Prompt the user for the second number.
//Store the second number in a variable called num2.
let num2 = prompt("Enter the second number:")
console.log(typeof num2)
num2 = Number(num2)

//Create an Alert where the value is the SUM of num1 and num2.
let sum = num1 + num2
alert("The sum of " + num1 + " and " + num2 + " is " + sum)

//BONUS: Make a program that can subtract, multiply, and also divide!
let difference = num1 - num2
alert("The difference of " + num1 + " and " + num2 + " is " + difference)

let product = num1 * num2
alert("The product of " + num1 + " and " + num2 + " is " + product)

let quotient = num1 / num2
alert("The quotient of " + num1 + " and " + num2 + " is " + quotient)
