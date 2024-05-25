//Write a JavaScript program that recreates the pattern below.
const maxiI = 6
let stars = ""
for (let i = 0; i < maxiI;i++){
    stars = stars + " * "
    console.log(stars)
}

//Do this challenge twice: first by using one loop, then by using two nested for loops (Nested means one inside the other - check out this tutorial of nested loops).
const maxNumber = 6

//Do this Daily Challenge by yourself, without looking at the answers on the internet.
const maxiII = 6
for (let i = 0; i < maxiII; i++){
    const nbOfStars = i + 1
    let ligneOS = ""
    for (let j = 0; j < nbOfStars; j++){
        ligneOS = ligneOS + " * "
    }
    console.log(ligneOS)
}
