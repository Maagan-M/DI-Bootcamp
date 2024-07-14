class Counter {
  constructor() {
    this.count = 0;
  }

  increment() {
    this.count++;
  }
}
//increment add 1 to count everytime

const counterOne = new Counter();
counterOne.increment();
counterOne.increment();
//counterOne is a new Counter objet

const counterTwo = counterOne;
counterTwo.increment();
//it refers to the same object instance

console.log(counterOne.count);
//3; 2 for the two rounds of counterOne plus 1 for the sole round of counterTwo