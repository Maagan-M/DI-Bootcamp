//Create a function called findAvg(gradesList) that takes an argument called gradesList.
//Your function must calculate and console.log the average.
//If the average is above 65 let the user know they passed
//If the average is below 65 let the user know they failed and must repeat the course.
//Bonus Try and split parts 1,2 and 3,4 of this exercise to two separate functions.
//Hint One function must call the other.
function calculateAverage(gradesList) {
    let sum = 0;
    for (let i = 0; i < gradesList.length; i++) {
      sum += gradesList[i];
    }
    let average = sum / gradesList.length;
    return average;
  }
function findAvg(gradesList) {
let average = calculateAverage(gradesList);
console.log("Average grade:", average);

if (average > 65) {
    console.log("You passed!");
} else {
    console.log("You failed and must repeat the course.");
}
}
const grades = [70, 85, 60, 90, 55, 75];
findAvg(grades)