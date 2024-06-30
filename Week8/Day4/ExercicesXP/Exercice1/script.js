const fruits = ["apple", "orange"];
const vegetables = ["carrot", "potato"];

const result = ['bread', ...vegetables, 'chicken', ...fruits];
console.log(result);
//The ... is used to spread the elements of vegetables and fruits into the result array.
//The result array is constructed by concatenating 'bread', the elements of vegetables, 'chicken', and the elements of fruits.
//output: ["bread", "carrot", "potato", "chicken", "apple", "orange"]

const country = "USA";
console.log([...country]);
//The ... (spread operator) is used to spread the characters of the string country into an array.
//The string "USA" is split into its individual characters: ['U', 'S', 'A'].

let newArray = [...[,,]];
console.log(newArray);
//The ... (spread operator) is used to spread the elements of the array [,,] into newArray
//The array [,,] has two empty slots. When spread, these empty slots are preserved in the new array
//output: [undefined, undefined]

