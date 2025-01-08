alert("Enter 5 numbers, I'll show you the largest");

let UserInput = Number(prompt("Please enter first Number"));
if (isNaN(UserInput)){
    alert("ERROR - this is not a number!");
    throw "ERROR - this is not a number!";
}

let MaxNum = UserInput;

UserInput = Number(prompt("Please enter second Number"));
if (isNaN(UserInput)){
    alert("ERROR - this is not a number!");
    throw "ERROR - this is not a number!";
}

if (UserInput > MaxNum) {
    MaxNum = UserInput;
}

UserInput = Number(prompt("Please enter third Number"));
if (isNaN(UserInput)){
    alert("ERROR - this is not a number!");
    throw "ERROR - this is not a number!";
}

if (UserInput > MaxNum) {
    MaxNum = UserInput;
}

UserInput = Number(prompt("Please enter forth Number"));
if (isNaN(UserInput)){
    alert("ERROR - this is not a number!");
    throw "ERROR - this is not a number!";
}

if (UserInput > MaxNum) {
    MaxNum = UserInput;
}

UserInput = Number(prompt("Please enter fifth Number"));
if (isNaN(UserInput)){
    alert("ERROR - this is not a number!");
    throw "ERROR - this is not a number!";
}

if (UserInput > MaxNum) {
    MaxNum = UserInput;
}

alert("The largest number is: " + MaxNum);
