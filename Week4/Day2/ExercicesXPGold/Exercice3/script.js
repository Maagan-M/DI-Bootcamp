function swapCase(str) {
    let characters = str.split('')
    let swappedCharacters = characters.map(char => {
        if (char === char.toUpperCase()) {
            return char.toLowerCase()
        } else {
            return char.toUpperCase()
        }
    });
    return swappedCharacters.join('')
}
console.log(swapCase('The Quick Brown Fox'))//tHE qUICK bROWN fOX