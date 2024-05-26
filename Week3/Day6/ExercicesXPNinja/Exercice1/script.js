//Create two objects, each object should hold a person’s details. Here are the details:
// 1 FullName
// 2 Mass
// 3 Height
//Each object should also have a key which value is a function (ie. A method), that calculates the Body Mass Index (BMI) of each person
const person1 = {
    fullName: "John Doe",
    mass: 70, // in kilograms
    height: 1.8, // in meters
    calculateBMI: function() {
      return this.mass / (this.height * this.height);
    }
  };
  const person2 = {
    fullName: "Jane Smith",
    mass: 65, // in kilograms
    height: 1.7, // in meters
    calculateBMI: function() {
      return this.mass / (this.height * this.height);
    }
  };

  //Outside of the objects, create a JS function that compares the BMI of both objects
  //Display the name of the person who has the largest BMI
  function compareBMI(person1, person2) {
    let bmi1 = person1.calculateBMI();
    let bmi2 = person2.calculateBMI();
  
    if (bmi1 > bmi2) {
      console.log(`${person1.fullName} has the largest BMI.`);
    } else if (bmi1 < bmi2) {
      console.log(`${person2.fullName} has the largest BMI.`);
    } else {
      console.log("Both have the same BMI.");
    }
  }
  compareBMI(person1, person2)