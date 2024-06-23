// #1
function funcOne() {
    let a = 5; // a is initialized with 5
    if(a > 1) {
        a = 3; // a is changed to 3 because 5 > 1
    }
    alert(`inside the funcOne function ${a}`); // a is 3
}

// #1.1 - run in the console:
funcOne() // This will alert: "inside the funcOne function 3"
// #1.2 What will happen if the variable is declared 
// with const instead of let ?
// If a is declared with const, it cannot be reassigned. Hence, trying to reassign it in the if block will throw a TypeError.

//#2
let a = 0; // a is initialized with 0
function funcTwo() {
    a = 5; // a is reassigned to 5
}

function funcThree() {
    alert(`inside the funcThree function ${a}`); // alerts the current value of a
}

// #2.1 - run in the console:
funcThree() // This will alert: "inside the funcThree function 0"
funcTwo()   // This changes the value of a to 5
funcThree() // This will alert: "inside the funcThree function 5"
// #2.2 What will happen if the variable is declared 
// with const instead of let ?
// If a is declared with const, it cannot be reassigned. Hence, trying to reassign it in funcTwo will throw a TypeError.

//#3
function funcFour() {
    window.a = "hello"; // a is set on the global window object
}

function funcFive() {
    alert(`inside the funcFive function ${a}`); // alerts the value of window.a
}

// #3.1 - run in the console:
funcFour()  // This sets window.a to "hello"
funcFive()  // This will alert: "inside the funcFive function hello"

//#4
let a = 1; // a is initialized with 1
function funcSix() {
    let a = "test"; // a is declared within the function scope and initialized with "test"
    alert(`inside the funcSix function ${a}`); // a within the function is "test"
}

// #4.1 - run in the console:
funcSix() // This will alert: "inside the funcSix function test"
// #4.2 What will happen if the variable is declared 
// with const instead of let ?
// If a is declared with const inside the function, it will still be "test". const only affects the reassignment, not the scope. Hence, the alert will still show "inside the funcSix function test".

//#5
let a = 2; // a is initialized with 2
if (true) {
    let a = 5; // a is declared within the block scope and initialized with 5
    alert(`in the if block ${a}`); // a within the block is 5
}
alert(`outside of the if block ${a}`); // a outside the block is 2

// #5.1 - run the code in the console
// This will alert: "in the if block 5"
// This will then alert: "outside of the if block 2"

// #5.2 What will happen if the variable is declared 
// with const instead of let ?
// If a is declared with const, it will still behave the same way within each scope. const only prevents reassignment within the same scope. Hence, the alerts will still show "in the if block 5" and "outside of the if block 2".
