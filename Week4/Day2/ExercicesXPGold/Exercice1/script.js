function isBlank(str) {
    return (!str || /^\s*$/.test(str))
}

console.log(isBlank(''))
console.log(isBlank('abc'))
console.log(isBlank('   '))
console.log(isBlank('\t\n'))
console.log(isBlank(' a '))
