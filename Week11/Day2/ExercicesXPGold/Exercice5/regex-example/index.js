// Function to extract numbers from a string
function returnNumbers(input) {
    // Use regular expression to match all digits in the string
    const matches = input.match(/\d+/g);
    
    // Join all matched numbers and return as a single string
    return matches ? matches.join('') : '';
}

// Example usage
const input = 'k5k3q2g5z6x9bn';
const result = returnNumbers(input);

console.log(result); // Expected output: 532569
