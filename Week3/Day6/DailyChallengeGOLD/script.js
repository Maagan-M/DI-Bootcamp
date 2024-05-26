const numbers = [5, 0, 9, 1, 7, 4, 2, 6, 3, 8];

//Using the .toString() method convert the array to a string
let str1 = numbers.toString();
console.log(str1); // "5,0,9,1,7,4,2,6,3,8"

//Using the .join()method convert the array to a string. Try passing different values into the join.
//Eg .join(“+”), .join(” “), .join(“”)
let str2 = numbers.join("+");
console.log(str2); // "5+0+9+1+7+4+2+6+3+8"

let str3 = numbers.join(" ");
console.log(str3); // "5 0 9 1 7 4 2 6 3 8"

let str4 = numbers.join("");
console.log(str4); // "5091742638"

//Sort the numbers array in descending order, do so using for loops (Not using built-in sort methods).
for (let i = 0; i < numbers.length - 1; i++) {
  for (let j = 0; j < numbers.length - 1 - i; j++) {
    if (numbers[j] < numbers[j + 1]) {
      let temp = numbers[j];
      numbers[j] = numbers[j + 1];
      numbers[j + 1] = temp;
    }
  }
  console.log(`After pass ${i + 1}: ${numbers}`);
}
console.log("Sorted array:", numbers); //The output should be: [9,8,7,6,5,4,3,2,1,0]
