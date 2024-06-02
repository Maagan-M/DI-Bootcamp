function calculateTip() {
    //Get the values from the form inputs
    const billAmount = document.getElementById('billamt').value;
    const serviceQuality = document.getElementById('serviceQual').value;
    let numberOfPeople = document.getElementById('peopleamt').value;

    //Validate the inputs
    if (serviceQuality == 0 || billAmount === '') {
        alert('Please enter values for bill amount and service quality.');
        return;
    }

    //Check if the number of people is empty or less than 1
    if (numberOfPeople === '' || numberOfPeople < 1) {
        numberOfPeople = 1;
        document.getElementById('each').style.display = 'none';
    } else {
        document.getElementById('each').style.display = 'inline';
    }

    //Calculate the total tip per person
    const total = (billAmount * serviceQuality) / numberOfPeople;

    //Round the total to two decimal points
    const roundedTotal = total.toFixed(2);

    //Display the total tip
    document.getElementById('totalTip').style.display = 'block';
    document.getElementById('tip').textContent = roundedTotal;
}

//Hide the total tip amount on load
document.getElementById('totalTip').style.display = 'none';

//Set up the event listener for the calculate button
document.getElementById('calculate').onclick = function() {
    calculateTip();
};
