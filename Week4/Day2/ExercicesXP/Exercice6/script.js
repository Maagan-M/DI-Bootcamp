function hotelCost(nights) {
    if (isNaN(nights) || nights <= 0) {
      return "Please enter a valid number of nights.";
    }
    return nights * 140;
  }
  function planeRideCost(destination) {
    if (!destination || typeof destination !== "string") {
      return "Please enter a valid destination.";
    }
    const prices = {
      "London": 183,
      "Paris": 220,
    };
    return prices[destination] || 300;
  }
  function rentalCarCost(days) {
    if (isNaN(days) || days <= 0) {
      return "Please enter a valid number of rental days.";
    }
    let cost = days * 40;
    if (days > 10) {
      cost *= 0.95;
    }
    return cost;
  }
  function totalVacationCost() {
    const nights = parseInt(prompt("Enter the number of nights you'll stay at the hotel: "));
    const destination = prompt("Enter your travel destination: ");
    const rentalDays = parseInt(prompt("Enter the number of days you'll rent a car: "));
    const hotelPrice = hotelCost(nights);
    const planePrice = planeRideCost(destination);
    const carPrice = rentalCarCost(rentalDays);
    let totalCost = hotelPrice + planePrice + carPrice;
    if (typeof hotelPrice === "string" || typeof planePrice === "string" || typeof carPrice === "string") {
      console.error("Invalid input detected. Please try again.");
      return;
    }
    const output = `The car cost: $${carPrice.toFixed(2)}, the hotel cost: $${hotelPrice.toFixed(2)}, the plane tickets cost: $${planePrice.toFixed(2)}.`;
    console.log(output);
    console.log(`Total vacation cost: $${totalCost.toFixed(2)}`);
  }
  totalVacationCost();