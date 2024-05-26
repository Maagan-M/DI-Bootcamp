function isDivisible(divisor) {
    let sum = 0;
    for (let i = 0; i <= 500; i++) {
      if (i % divisor === 0) {
        console.log(i);
        sum += i;
      }
    }
    console.log(`Sum: ${sum}`);
  }
  isDivisible(3); 
  isDivisible(45);