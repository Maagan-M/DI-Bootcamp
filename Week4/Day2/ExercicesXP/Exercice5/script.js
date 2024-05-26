function changeEnough(itemPrice, amountOfChange) {
    const coinValues = [25, 10, 5, 1];
    let totalChange = 0;
    for (let i = 0; i < amountOfChange.length; i++) {
      totalChange += amountOfChange[i] * coinValues[i];
    }
    return totalChange >= itemPrice * 100;
  }
  console.log(changeEnough(4.25, [25, 20, 5, 0]));
  console.log(changeEnough(14.11, [2, 100, 0, 0]));
  console.log(changeEnough(0.75, [0, 0, 20, 5]));