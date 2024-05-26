function calculateTip() {
    const billAmount = parseFloat(prompt("Enter the bill amount: $"));
   let tipPercentage;
    if (billAmount < 50) {
      tipPercentage = 0.2;
    } else if (billAmount >= 50 && billAmount <= 200) {
      tipPercentage = 0.15;
    } else {
      tipPercentage = 0.1;
    }
    const tipAmount = billAmount * tipPercentage;
    const finalBill = billAmount + tipAmount;
    console.log(`Tip amount: $${tipAmount.toFixed(2)}`);
    console.log(`Final bill: $${finalBill.toFixed(2)}`);
  }
  calculateTip();

//or
  function calculateTip() {
    const billAmount = parseFloat(prompt("Enter the bill amount: $"));
    let tipPercentage;
    switch (true) {
      case billAmount < 50:
        tipPercentage = 0.2;
        break;
      case billAmount >= 50 && billAmount <= 200:
        tipPercentage = 0.15;
        break;
      default:
        tipPercentage = 0.1;
    }
    const tipAmount = billAmount * tipPercentage;
    const finalBill = billAmount + tipAmount;
    console.log(`Tip amount: $${tipAmount.toFixed(2)}`);
    console.log(`Final bill: $${finalBill.toFixed(2)}`);
  }
  calculateTip();