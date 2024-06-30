const letters = ['x', 'y', 'z', 'z'];

let countMap = {};

for (let i = 0; i < letters.length; i++) {
  let letter = letters[i];
  if (countMap[letter]) {
    countMap[letter] += 1;
  } else {
    countMap[letter] = 1;
  }
}

console.log(countMap);

const letters = ['x', 'y', 'z', 'z'];

const countMapReduce = letters.reduce((acc, letter) => {
  acc[letter] = (acc[letter] || 0) + 1;
  return acc;
}, {});

console.log(countMapReduce);

