//Prompt the user for a number and save it to a variable.
const number = prompt("enter a nbr")

//Check whether the variable is even or odd.
//If it is even, display: “x is an even number”. Where x is the actual number the user chose.
//If it is odd, display: “x is an odd number”. Where x is the actual number the user chose.
if (Number(number) % 2 === 0){
    console.log(number + " is an even number")
} else {
    console.log(number + " is an odd number")
}