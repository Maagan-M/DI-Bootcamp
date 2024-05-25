//Copy and paste the above object to your Javascript file.
const building = {
    numberOfFloors: 4,
    numberOfAptByFloor: {
        firstFloor: 3,
        secondFloor: 4,
        thirdFloor: 9,
        fourthFloor: 2,
    },
    nameOfTenants: ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent:  {
        sarah: [3, 990],
        dan:  [4, 1000],
        david: [1, 500],
    },
}

//Console.log the number of floors in the building.
console.log(`here is the nb of floors:`, building.numberOfFloors)
//Console.log how many apartments are on the floors 1 and 3.
console.log(`here we go:`, building.numberOfAptByFloor.firstFloor)
console.log(`here we go:`, building.numberOfAptByFloor.thirdFloor)

//Console.log the name of the second tenant and the number of rooms he has in his apartment.
console.log(`second tenant:`, building.nameOfTenants[1])
console.log(`nb of rooms:`, building.numberOfRoomsAndRent.dan[0])

//Check if the sum of Sarah’s and David’s rent is bigger than Dan’s rent. If it is, than increase Dan’s rent to 1200.
const sarahRent = building.numberOfRoomsAndRent.sarah[1]
console.log(sarahRent)
const davidRent = building.numberOfRoomsAndRent.david[1]
console.log(davidRent)
const danRent = building.numberOfRoomsAndRent.dan[1]
console.log(danRent)
if (sarahRent + davidRent > danRent){
    console.log("dan's is lower")
    console.log(building.numberOfRoomsAndRent.dan[1] = 1200)
}