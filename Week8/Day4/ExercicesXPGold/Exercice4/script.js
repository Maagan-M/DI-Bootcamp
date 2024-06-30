const array = [[1],[2],[3],[[[4]]],[[[5]]]];
const greeting = [["Hello", "young", "grasshopper!"], ["you", "are"], ["learning", "fast!"]];
const trapped = [[[[[[[[[[[[[[[[[[[[[[[[[[3]]]]]]]]]]]]]]]]]]]]]]]]]];

const flattenedArray = array.flatMap(item => Array.isArray(item) ? item : [item]);

const flattenedGreeting = greeting.map(words => words.join(' '));
const combinedString = flattenedGreeting.join(' ');

let unwrapped = trapped;
while (Array.isArray(unwrapped)) {
  unwrapped = unwrapped[0];
}

console.log(flattenedArray); 
console.log(flattenedGreeting); 
console.log(combinedString); 
console.log([unwrapped]); 
