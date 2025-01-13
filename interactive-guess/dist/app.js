function getAnswer(messageToUser) {
    var userAnswer = prompt(messageToUser);
    if (userAnswer === null) {
        alert("Looks like you don't want to play. Good Day!");
        throw "The game was canceled by the player.";
    }
    return userAnswer;
}
function getDifficulty() {
    var Difficulty = 0;
    var DifficultyAnswer = "";
    while ((Difficulty !== 1) && (Difficulty !== 2) && (Difficulty !== 3)) {
        DifficultyAnswer = getAnswer("Pick your difficulty 1 - Low, 2 - Medium, 3 - Hard.");
        Difficulty = Number(DifficultyAnswer);
        if ((Difficulty !== 1) && (Difficulty !== 2) && (Difficulty !== 3)) {
            alert("ERROR - wrong input, it must be 1 or 2 or 3!");
        }
    }
    return Difficulty;
}
function getGameMode() {
    var GameMode = 0;
    var GameModeAnswer = "";
    while (!((GameMode === 1) || (GameMode === 2))) {
        GameModeAnswer = getAnswer("Pick your game mode 1 - Classic (above/below), 2 - Hot/Cold.");
        GameMode = Number(GameModeAnswer);
        if (!((GameMode === 1) || (GameMode === 2))) {
            alert("ERROR - wrong input, it must be 1 or 2!");
        }
    }
    return GameMode;
}
alert("This is a Number Guessing Game");
var Difficulty = getDifficulty();
var GameMode = getGameMode();
//Sets the upper limit and number of guesse according to the difficulty
var HighNum = 10;
var NumberOfGuesses = 3;
if (Difficulty === 3) {
    HighNum = 100;
    NumberOfGuesses = 10;
}
else if (Difficulty === 2) {
    HighNum = 50;
    NumberOfGuesses = 5;
}
//Generates a random integer number between 1 and HighNum (inclusive)
var MyNumber = Math.floor(Math.random() * HighNum) + 1;
alert("Try and guess my number, it's between 1 and " + HighNum + ". You have " + NumberOfGuesses + " guesses.");
var UserGuess = 0;
var UserGuessAnswer = "";
var GuessDelta = 0;
var AttemptsLeft = NumberOfGuesses;
while ((AttemptsLeft > 0) && (UserGuess !== MyNumber)) {
    UserGuess = NaN;
    while (isNaN(UserGuess) || (UserGuess < 1) || (UserGuess > HighNum)) {
        if (NumberOfGuesses === 1) {
            UserGuessAnswer = getAnswer("Enter your only guess...");
        }
        else if (AttemptsLeft > 1) {
            UserGuessAnswer = getAnswer("Enter your guess, you have " + AttemptsLeft + " guesses left");
        }
        else {
            UserGuessAnswer = getAnswer("Enter your guess, this is your last attempt.");
        }
        UserGuess = Number(UserGuessAnswer);
        if (isNaN(UserGuess)) {
            alert("ERROR - this is not a number!");
        }
        if ((UserGuess < 1) || (UserGuess > HighNum)) {
            alert("Pay attention, I picked a number between 1 and " + HighNum + ". I won't count it as a guess.");
        }
    }
    if (UserGuess === MyNumber) {
        alert("Congradulations! " + MyNumber + " Is indeed the number I picked!");
    }
    else if (AttemptsLeft > 1) {
        if (GameMode === 1) {
            if (UserGuess < MyNumber) {
                //alert("Tough luck, my number is larger then your guess, try again..." + " " + MyNumber);
                alert("Tough luck, my number is larger then your guess, try again...");
            }
            else {
                // alert("Tough luck, my number is smaller then your guess, try again..." + " " + MyNumber);
                alert("Tough luck, my number is smaller then your guess, try again...");
            }
        }
        else {
            if (GuessDelta > Math.abs(UserGuess - MyNumber)) {
                alert("Hot!");
                // alert("Hot!"  + " " + MyNumber + " " + GuessDelta);
            }
            else {
                alert("Cold!");
                // alert("Cold!"  + " " + MyNumber + " " + GuessDelta);
            }
            GuessDelta = Math.abs(UserGuess - MyNumber);
        }
    }
    else {
        alert("Tough luck, my number is " + MyNumber + " not " + UserGuess + ".");
    }
    AttemptsLeft--;
}
