function string_chop(str, size) {
    if (size <= 0 || str.length === 0) {
        return [];
    }
    
    let chunks = [];
    for (let i = 0; i < str.length; i += size) {
        chunks.push(str.slice(i, i + size));
    }
    
    return chunks;
}

//Example
console.log(string_chop('developers', 2)); 
//["de", "ve", "lo", "pe", "rs"]
