function repeat(str, n = 1) {
    let result = '';

    for (let i = 0; i < n; i++) {
        result += str;
    }

    return result;
}

// Example
console.log(repeat('Ha!', 3)); 
console.log(repeat('Hello'));  
console.log(repeat('Wow!', 0));