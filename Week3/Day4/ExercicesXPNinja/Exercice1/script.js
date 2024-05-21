//Given the years two people were born, find the date when the younger one is exactly half the age of the older.
//Notes: The dates are given in the format YYYY
const birthYear1 = prompt("Please enter the birth year of the first person:");
const birthYear2 = prompt("Please enter the birth year of the second person:");

const currentYear = new Date().getFullYear();
const age1 = currentYear - birthYear1;
const age2 = currentYear - birthYear2;

if (age1 > age2) {
  const yearsToHalfAge = (age1 - age2) / 2;
  const halfAgeYear = currentYear + yearsToHalfAge;
  console.log("The younger person will be half the age of the older person in " + halfAgeYear);
} else if (age1 < age2) {
  const yearsToHalfAge = (age2 - age1) / 2;
  const halfAgeYear = currentYear + yearsToHalfAge;
  console.log("The younger person will be half the age of the older person in " + halfAgeYear);
} else {
  console.log("The two people are the same age.");
}
