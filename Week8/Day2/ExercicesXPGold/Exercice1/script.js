const addTo = x => y => x + y;
const addToTen = addTo(10);
addToTen(3);
//addTo take a parameter x and computes another function with y parameter and sum the two
//x takes 10 and addToTen 3, then the outcome is 13