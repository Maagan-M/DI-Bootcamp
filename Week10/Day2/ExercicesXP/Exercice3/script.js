//Create a promise that resolves with the value 3
const resolveWithThree = Promise.resolve(3);

//Create a promise that rejects with the string "Boo!"
const rejectWithBoo = Promise.reject("Boo!");

resolveWithThree
  .then(result => console.log(result))
  .catch(error => console.log(error));

rejectWithBoo
  .then(result => console.log(result))
  .catch(error => console.log(error));
