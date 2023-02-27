function play() {
    const msgOne = document.querySelector('.message1');
    const msgTwo = document.querySelector('.message2');
    const msgThree = document.querySelector('.message3');
    const userGuess = document.querySelector('#guess').value;

    let answer = Math.floor(Math.random() * 100) + 1;
    let numberOfGuesses = 0;
    let guessedNumbers = [];

    if (userGuess < 1 || userGuess > 100) {
        alert("Please enter a number between 1-100.")
    } else {
        guessedNumbers.push(userGuess);
        numberOfGuesses++;

        if (userGuess < answer) {
            msgOne.textContent = "Your guess is to low.";

            msgThree.textContent = "Guessed numbers are: " + guessedNumbers;
        } else if (userGuess > answer) {
            msgOne.textContent = "Your guess is to high.";
            // msgTwo.textContent = "No. of guesses: " + numberOfGuesses;
            msgThree.textContent = "Guessed numbers are: " + guessedNumbers;
        } else if (userGuess == answer) {
            msgOne.textContent = "Yuppie! you win.";
            msgTwo.textContent = "The numbers was: " + answer;
            msgThree.textContent = "Guessed numbers are: " + guessedNumbers;
        }
    }
}