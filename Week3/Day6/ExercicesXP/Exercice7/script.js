const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"]
names.sort()
//A group of friends have decided to start a secret society. The society’s name will be the first letter of each of their names sorted in alphabetical order.
//Hint: a string is an array of letters
let nameSociety = " "
for (const name of names){
    nameSociety = nameSociety + name[0]
}

//Console.log the name of their secret society. The output should be “ABJKPS”
console.log(nameSociety)