const people = ["Greg", "Mary", "Devon", "James"];

//Write code to remove “Greg” from the people array.
people.shift()
console.log(people)

//Write code to replace “James” to “Jason”.
people[2] = "Jason"
console.log(people)

//Write code to add your name to the end of the people array.
people.push("Ben")
console.log(people)
//Write code that console.logs Mary’s index. take a look at the indexOf method on Google.
console.log(people.indexOf("Mary"))

//Write code to make a copy of the people array using the slice method.
//The copy should NOT include “Mary” or your name.
//Hint: remember that now the people array should look like this const people = ["Mary", "Devon", "Jason", "Yourname"];
//Hint: Check out the documentation for the slice method
const newPeople = people.slice(1)
console.log(newPeople)

//Write code that gives the index of “Foo”. Why does it return -1 ?
console.log(people.indexOf("Foo")) //For it cannot find "Foo" in the array

//Create a variable called last which value is the last element of the array.
//Hint: What is the relationship between the index of the last element in the array and the length of the array?
const last = people.at(-1)
console.log(last)

//Using a loop, iterate through the people array and console.log each person.
for (const member of people){
console.log("here is:", member)
}

//Using a loop, iterate through the people array and exit the loop after you console.log “Devon” .
//Hint: take a look at the break statement in the lesson.
for (const member of people){
    console.log("here is:", member)
    if (member === "Devon"){ break }
    }