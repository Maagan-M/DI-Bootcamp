function playTheGame() {
    let play = confirm("Would you like to play the game?");
    if (!play) {
        alert("No problem, Goodbye");
        return;
    }
    
    let userNumber;
    do {
        userNumber = prompt("Please enter a number between 0 and 10:");
        if (isNaN(userNumber)) {
            alert("Sorry, not a number, Goodbye");
        } else if (userNumber < 0 || userNumber > 10) {
            alert("Sorry, it’s not a good number, Goodbye");
        } else {
            break;
        }
    } while (true);
    
    userNumber = parseInt(userNumber);
    let computerNumber = Math.floor(Math.random() * 11);
    compareNumbers(userNumber, computerNumber);
}

function compareNumbers(userNumber, computerNumber) {
    let attempts = 0;
    while (attempts < 3) {
        if (userNumber === computerNumber) {
            alert("WINNER");
            return;
        } else if (userNumber > computerNumber) {
            userNumber = parseInt(prompt("Your number is bigger than the computer’s, guess again"));
        } else if (userNumber < computerNumber) {
            userNumber = parseInt(prompt("Your number is smaller than the computer’s, guess again"));
        }
        attempts++;
    }
    alert("Out of chances");
}
