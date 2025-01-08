alert("This is a Guess Game");
var MyNumber = Math.floor(Math.random() * 10) + 1; //Generates a random integer number between 1 and 10 (inclusive)
// let UserGuess = Number(prompt("I picked an integer number between 1 and 10, try to guess it... " + MyNumber));
var UserGuess = Number(prompt("I picked an integer number between 1 and 10, try to guess it..."));
if (isNaN(UserGuess)) {
    alert("ERROR - this is not a number!");
    throw "ERROR - this is not a number!";
}
if (UserGuess === MyNumber) {
    alert("Congradulations! " + MyNumber + " Is indeed the number I picked!");
}
else if (UserGuess < MyNumber) {
    UserGuess = Number(prompt("Tough luck, my number is larger then your guess, try again..."));
    if (isNaN(UserGuess)) {
        alert("ERROR - this is not a number!");
        throw "ERROR - this is not a number!";
    }
}
else {
    UserGuess = Number(prompt("Tough luck, my number is smaller then your guess, try again..."));
    if (isNaN(UserGuess)) {
        alert("ERROR - this is not a number!");
        throw "ERROR - this is not a number!";
    }
}
if (UserGuess === MyNumber) {
    alert("Congradulations! " + MyNumber + " Is indeed the number I picked!");
}
else if (UserGuess < MyNumber) {
    UserGuess = Number(prompt("Tough luck again, my number is larger then your guess, this is your last try..."));
    if (isNaN(UserGuess)) {
        alert("ERROR - this is not a number!");
        throw "ERROR - this is not a number!";
    }
}
else {
    UserGuess = Number(prompt("Tough luck again, my number is smaller then your guess, this is your last try..."));
    if (isNaN(UserGuess)) {
        alert("ERROR - this is not a number!");
        throw "ERROR - this is not a number!";
    }
}
if (UserGuess === MyNumber) {
    alert("Congradulations! " + MyNumber + " Is indeed the number I picked!");
}
else {
    alert("Tough luck, my number is " + MyNumber + " not " + UserGuess + ".");
}
