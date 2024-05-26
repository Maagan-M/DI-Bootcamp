let guestList = {
    randy: "Germany",
    karla: "France",
    wendy: "Japan",
    norman: "England",
    sam: "Argentina"
  };
  
// Prompt the student for their name
const studentName = prompt("Enter your name:").toLowerCase();
  
//If the name is in the object, console.log the name of the student and the country they come from.
//For example: "Hi! I'm [name], and I'm from [country]."
//Hint: You don’t need to use a for loop, just look up the statement if ... in
//If the name is not in the object, console.log: "Hi! I'm a guest."
  if (studentName in guestList) {
    console.log(`Hi! I'm ${studentName}, and I'm from ${guestList[studentName]}.`);
  } else {
    console.log("Hi! I'm a guest.");
  }
  