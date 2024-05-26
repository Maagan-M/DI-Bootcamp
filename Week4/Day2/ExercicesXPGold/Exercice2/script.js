function abbrevName(fullName) {
    let nameParts = fullName.split(' ')
    if (nameParts.length > 1) {
        let firstName = nameParts[0]
        let lastNameInitial = nameParts[nameParts.length - 1].charAt(0) + '.'
        return `${firstName} ${lastNameInitial}`
    } else {
        return fullName
    }
}
console.log(abbrevName("Robin Singh"));  // "Robin S."
