//Global variable to hold the current bank amount
let bankAmount = 1000;

//Variable to hold the VAT percentage
const VAT = 0.17;

//Array with all monthly expenses
const details = ["+200", "-100", "+146", "+167", "-2900"];

//Function to modify the expenses to include VAT
const modifyExpenses = (expenses, vat) => {
    return expenses.map(expense => {
        let value = parseFloat(expense);
        return (value + (value * vat)).toFixed(2);
    });
};

//Modify the expenses to include VAT
const modifiedDetails = modifyExpenses(details, VAT);

//Calculate the final bank amount after applying the modified expenses
modifiedDetails.forEach(expense => {
    bankAmount += parseFloat(expense);
});

//Display the current bank account standing at the end of the month
console.log(`Current bank account standing: ${bankAmount.toFixed(2)}`);
