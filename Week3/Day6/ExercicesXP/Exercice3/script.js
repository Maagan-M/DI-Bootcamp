//Prompt the user for a number.
//Hint : Check the data type you receive from the prompt (ie. Use the typeof method)
let number = null
//While the number is smaller than 10 continue asking the user for a new number.
//Tip : Which while loop is more relevant for this situation?
while(number < 10){
    const response = prompt("Please enter a nb")
    const number = Number(response)
}