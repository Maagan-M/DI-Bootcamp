const stock = {
    banana: 6,
    apple: 0,
    pear: 12,
    orange: 32,
    blueberry: 1,
  };
  const prices = {
    banana: 4,
    apple: 2,
    pear: 1,
    orange: 1.5,
    blueberry: 10,
  };
  const shoppingList = ["banana", "orange", "apple"];
  function myBill() {
    let totalPrice = 0;
    for (const item of shoppingList) {
      if (item in stock && stock[item] > 0) {
        const itemPrice = prices[item];
        totalPrice += itemPrice;
        stock[item]--;
        console.log(`${item}: $${itemPrice.toFixed(2)}`);
      } else {
        console.log(`${item}: Out of stock`);
      }
    }
    return totalPrice;
  }
  const totalBill = myBill();
  console.log(`Total bill: $${totalBill.toFixed(2)}`);