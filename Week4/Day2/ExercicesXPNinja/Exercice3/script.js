//Write a JavaScript function that checks whether a string is a palindrome or not
function isPalindrome(str) {
    let normalizedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
        let reversedStr = normalizedStr.split('').reverse().join('');
        return normalizedStr === reversedStr;
  }
console.log(isPalindrome("madam"));        // Output: true
console.log(isPalindrome("bob"));          // Output: true
console.log(isPalindrome("kayak"));        // Output: true
console.log(isPalindrome("hello"));        // Output: false  