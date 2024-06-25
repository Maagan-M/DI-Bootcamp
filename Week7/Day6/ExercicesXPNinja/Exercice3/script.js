function search_word(str, word) {
    let regex = new RegExp('\\b' + word + '\\b', 'gi');
    let matches = str.match(regex);

    let count = matches ? matches.length : 0;
    
    return `'${word}' was found ${count} ${count === 1 ? 'time' : 'times'}.`;
}

//Example
console.log(search_word('The quick brown fox jumps over the lazy dog', 'fox'));
//"'fox' was found 1 time."
