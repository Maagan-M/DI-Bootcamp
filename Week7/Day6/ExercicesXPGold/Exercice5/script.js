const startLine = '     ||<- Start line';
let turtle = '       🐢'; 
let rabbit = '       🐇'; 

console.log(startLine);
console.log(turtle);
console.log(rabbit);

turtle = turtle.trim().padEnd(9, '=');
console.log(turtle);//outcome: '🐢======='