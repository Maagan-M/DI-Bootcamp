//First, use function declaration and invoke it.
function kgToGrams(weightInKg) {
    return weightInKg * 1000;
}
console.log(kgToGrams(5));

//Then, use function expression and invoke it.
const kgToGramsExpression = function(weightInKg) {
    return weightInKg * 1000;
};
console.log(kgToGramsExpression(5));
//Function declarations are hoisted, meaning they can be called before they are defined, while function expressions are not hoisted, so they cannot be called before they are defined.

//Finally, use a one line arrow function and invoke it.
const kgToGramsArrow = weightInKg => weightInKg * 1000;
console.log(kgToGramsArrow(5));
