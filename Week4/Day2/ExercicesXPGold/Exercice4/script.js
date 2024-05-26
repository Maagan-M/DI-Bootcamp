function isOmnipresent(arr, val) {
    for (let subArray of arr) {
        if (!subArray.includes(val)) {
            return false
        }
    }
    return true
}
console.log(isOmnipresent([[1, 1], [1, 3], [5, 1], [6, 1]], 1))//true 
console.log(isOmnipresent([[1, 1], [1, 3], [5, 1], [6, 1]], 6))//false
console.log(isOmnipresent([[3, 4], [8, 3, 2], [3], [9, 3], [5, 3], [4, 3]], 3)); //true
console.log(isOmnipresent([[2, 4], [8, 2, 2], [3], [9, 2], [5, 2], [4, 2]], 3)); //false
