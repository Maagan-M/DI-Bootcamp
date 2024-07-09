function timesTwoAsync(x) {
  return new Promise(resolve => resolve(x * 2));
}
//This function takes a number x as an argument and returns a promise that resolves with the value of x * 2.

const arr = [1, 2, 3];
const promiseArr = arr.map(timesTwoAsync);
//arr.map(timesTwoAsync) creates a new array promiseArr where each element is the result of calling timesTwoAsync on the corresponding element of arr. Therefore, promiseArr will be an array of promises that resolve to [2, 4, 6].

Promise.all(promiseArr)
  .then(result => {
    console.log(result);
  });
//Promise.all(promiseArr) takes an array of promises (promiseArr) and returns a single promise that resolves when all of the promises in the array have resolved.
//The resolved value of this single promise is an array containing the resolved values of all the promises in promiseArr, in the same order.