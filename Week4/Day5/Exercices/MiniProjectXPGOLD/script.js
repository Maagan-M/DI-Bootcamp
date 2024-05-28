function hangmanGame() {
    //Prompt Player 1 for a word
    let secretWord = prompt("Player 1, enter a word with a minimum of 8 letters:");
    
    //Validate the word length
    if (secretWord.length < 8) {
        alert("The word must have a minimum of 8 letters.");
        return;
    }

    //Convert the word to an array of characters
    let wordArray = secretWord.split('');

    //Initialize variables
    let guessedWord = [];
    let incorrectGuesses = [];
    let chances = 10;

    //Initialize guessedWord with stars
    for (let i = 0; i < wordArray.length; i++) {
        guessedWord.push('*');
    }

    //Main game loop
    while (chances > 0) {
        //Display the guessed word
        console.log("Guessed Word: " + guessedWord.join(''));

        //Prompt Player 2 for a letter
        let guess = prompt("Player 2, guess a letter:").toLowerCase();

        //Check if the guess is a single letter
        if (!/^[a-zA-Z]$/.test(guess)) {
            alert("Please enter a single letter.");
            continue;
        }

        //Check if the letter has already been guessed
        if (incorrectGuesses.includes(guess) || guessedWord.includes(guess)) {
            alert("You already guessed that letter.");
            continue;
        }

        //Check if the guess is correct
        let correctGuess = false;
        for (let i = 0; i < wordArray.length; i++) {
            if (wordArray[i] === guess) {
                guessedWord[i] = guess;
                correctGuess = true;
            }
        }

        //If the guess is incorrect, decrement chances
        if (!correctGuess) {
            chances--;
            incorrectGuesses.push(guess);
            console.log("Incorrect Guesses: " + incorrectGuesses.join(', '));
            console.log(`Chances left: ${chances}`);
        }

        //Check if all letters have been guessed correctly
        if (!guessedWord.includes('*')) {
            console.log("CONGRATS! YOU WIN!");
            return;
        }
    }

    //If the loop ends without a win, the player loses
    console.log("YOU LOSE. The word was: " + secretWord);
}
hangmanGame();
