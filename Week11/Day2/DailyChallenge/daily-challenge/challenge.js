import { greet } from './greeting.js';
import { displayColorfulMessage } from './colorful-message.js';
import { readFile } from './read-file.js';

const userName = 'Alice'; 

console.log(greet(userName));

displayColorfulMessage();

readFile();
