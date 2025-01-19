function divide(num1, num2) {
    if (num2 !== 0) {
        alert("Result of division is: " + (num1 / num2));
    }
    else {
        alert("ERROR! Can't divide by zero.");
    }
}
function capitalize(inputString) {
    var outputString = inputString.slice(0, 1).toUpperCase() + inputString.slice(1);
    return outputString;
}
function superGreet(firstName, lastName) {
    alert("Hello, " + capitalize(firstName) + " " + capitalize(lastName) + "!");
}
function greetFullname(fullName) {
    var firstName = fullName.slice(0, fullName.indexOf(" "));
    var lastName = fullName.slice(fullName.indexOf(" ") + 1);
    alert("Hello, " + capitalize(firstName) + " " + capitalize(lastName) + "!");
}
function whereTo() {
    var userAnswer = prompt("Where north/south/west/east ?");
    if (userAnswer === null) {
        alert("Looks like you don't want to play. Good Day!");
        throw "The game was canceled by the player.";
    }
    return userAnswer;
}
function firstRoom(player, inventory) {
    var nextRoom = "firstRoom";
    while (nextRoom === "firstRoom") {
        alert("you are in first room");
        var direction = whereTo();
        switch (direction) {
            case "north":
                nextRoom = "secondRoom";
                break;
            case "east":
                nextRoom = "thirdRoom";
                break;
            case "west":
                nextRoom = "forthRoom";
                break;
            default:
                nextRoom = "firstRoom";
                break;
        }
    }
    return nextRoom;
}
function secondRoom(player, inventory) {
    var nextRoom = "secondRoom";
    while (nextRoom === "secondRoom") {
        alert("you are in second room");
        var direction = whereTo();
        switch (direction) {
            case "south":
                nextRoom = "firstRoom";
                break;
            default:
                nextRoom = "secondRoom";
                break;
        }
    }
    return nextRoom;
}
function thirdRoom(player, inventory) {
    var nextRoom = "thirddRoom";
    while (nextRoom === "thirdRoom") {
        alert("you are in third room");
        var direction = whereTo();
        switch (direction) {
            case "west":
                nextRoom = "firstRoom";
                break;
            default:
                nextRoom = "thirdRoom";
                break;
        }
    }
    return nextRoom;
}
function forthRoom(player, inventory) {
    var nextRoom = "forthRoom";
    var counter = 0;
    while ((nextRoom === "forthRoom") && (counter < 3)) {
        alert("you are in forth room, you stay too long you die!");
        var direction = whereTo();
        switch (direction) {
            case "east":
                nextRoom = "firstRoom";
                break;
            default:
                nextRoom = "forthRoom";
                break;
        }
        counter++;
    }
    if (counter = 3) {
        alert("you are dead");
        return "dead";
    }
    return nextRoom;
}
function playGame(fullName) {
    //create inventory
    var inventory = "";
    //create player
    var player = fullName;
    var nextRoom = "firstRoom";
    var status = "alive";
    alert("Hello " + fullName);
    while (nextRoom !== "dead") {
        switch (nextRoom) {
            case "firstRoom":
                nextRoom = firstRoom(player, inventory);
                break;
            case "secondRoom":
                nextRoom = secondRoom(player, inventory);
                break;
            case "thirdRoom":
                nextRoom = thirdRoom(player, inventory);
                break;
            default:
                nextRoom = forthRoom(player, inventory);
                break;
        }
    }
    alert("GAME OVER!");
}
//call
playGame("BORIS");
