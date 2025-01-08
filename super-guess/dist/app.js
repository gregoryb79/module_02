alert("This is a Guess Game");
var MyNumber = Math.floor(Math.random() * 10) + 1; //Generates a random integer number between 1 and 10 (inclusive)
alert("I picked an integer number between 1 and 10, try to guess it... " + MyNumber);
var NumberOfGuesses = 0;
while (isNaN(NumberOfGuesses) || (NumberOfGuesses === 0)) {
    NumberOfGuesses = Number(prompt("How many guesses do you need?"));
    if (isNaN(NumberOfGuesses)) {
        alert("ERROR - this is not a number!");
    }
    if (NumberOfGuesses === 0) {
        alert("This is no fun, at least try once!");
    }
}
var UserGuess = 0;
var AttemptsLeft = NumberOfGuesses;
while ((AttemptsLeft > 0) && (UserGuess !== MyNumber)) {
    UserGuess = NaN;
    while (isNaN(UserGuess)) {
        if (NumberOfGuesses === 1) {
            UserGuess = Number(prompt("Enter your only guess..."));
        }
        else if (AttemptsLeft > 1) {
            UserGuess = Number(prompt("Enter your guess, you have " + AttemptsLeft + " guesses left"));
        }
        else {
            UserGuess = Number(prompt("Enter your guess, this is your last attempt."));
        }
        if (isNaN(UserGuess)) {
            alert("ERROR - this is not a number!");
        }
    }
    if (UserGuess === MyNumber) {
        alert("Congradulations! " + MyNumber + " Is indeed the number I picked!");
    }
    else if (AttemptsLeft > 1) {
        if (UserGuess < MyNumber) {
            alert("Tough luck, my number is larger then your guess, try again...");
        }
        else {
            alert("Tough luck, my number is smaller then your guess, try again...");
        }
    }
    else {
        alert("Tough luck, my number is " + MyNumber + " not " + UserGuess + ".");
    }
    AttemptsLeft--;
}
