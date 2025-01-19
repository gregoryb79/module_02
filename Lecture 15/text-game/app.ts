
function divide (num1 : number, num2: number){
    if (num2 !== 0){
        alert("Result of division is: " + (num1/num2));
    } else{
        alert("ERROR! Can't divide by zero.");
    }
}

function capitalize (inputString: string): string {

    const outputString = inputString.slice(0, 1).toUpperCase() + inputString.slice(1);
    return outputString;

}

function superGreet (firstName : string, lastName : string) {

    alert ("Hello, " + capitalize(firstName) + " " + capitalize(lastName)+"!");

}

function greetFullname (fullName : string){

    const firstName = fullName.slice(0,fullName.indexOf(" "));
    const lastName = fullName.slice(fullName.indexOf(" ")+1);

    alert ("Hello, " + capitalize(firstName) + " " + capitalize(lastName) + "!");

}

function whereTo(){
    
    const userAnswer = prompt("Where north/south/west/east ?");
    if (userAnswer === null) {
        alert("Looks like you don't want to play. Good Day!");
        throw "The game was canceled by the player.";       
    }

    return userAnswer;

}

function firstRoom (player : string, inventory : string){

    

    let nextRoom = "firstRoom";
    
    while (nextRoom === "firstRoom") {
       
        alert("you are in first room");
        const direction = whereTo();
    
        switch (direction) {
            case "north" :
                nextRoom = "secondRoom";
                break;
            case "east" :
                nextRoom = "thirdRoom";
                break;
            case "west" :
                nextRoom = "forthRoom";
            break;
            default :
                nextRoom = "firstRoom";
            break;
        }

    }
        
    return nextRoom;

}

function secondRoom (player : string, inventory : string){

    

    let nextRoom = "secondRoom";
    
    while (nextRoom === "secondRoom") {
        
        alert("you are in second room");
        const direction = whereTo();
    
        switch (direction) {
            case "south" :
                nextRoom = "firstRoom";
                break;
            default :
                nextRoom = "secondRoom";
            break;
        }

    }
        
    return nextRoom;

}

function thirdRoom (player : string, inventory : string){

    

    let nextRoom = "thirddRoom";
    
    while (nextRoom === "thirdRoom") {

        alert("you are in third room");
        const direction = whereTo();
    
        switch (direction) {
            case "west" :
                nextRoom = "firstRoom";
                break;
            default :
                nextRoom = "thirdRoom";
            break;
        }

    }
        
    return nextRoom;

}

function forthRoom (player : string, inventory : string){

    

    let nextRoom = "forthRoom";
    let counter = 0;
    
    while ((nextRoom === "forthRoom") && (counter < 3)) {
       
        alert("you are in forth room, you stay too long you die!");
        const direction = whereTo();
    
        switch (direction) {
            case "east" :
                nextRoom = "firstRoom";
                break;
            default :
                nextRoom = "forthRoom";
            break;
        }

        counter++;

    }

    if (counter = 3) {
        alert ("you are dead");
       return "dead";
    }
        
    return nextRoom;

}

function playGame(fullName : string){

    //create inventory
    const inventory = "";
    //create player
    const player = fullName;

    let nextRoom = "firstRoom";
    let status = "alive";

    alert("Hello " + fullName);

    while (nextRoom !== "dead") {

        switch (nextRoom) {
            case "firstRoom" :
                nextRoom = firstRoom(player,inventory);
                break;
            case "secondRoom" :
                nextRoom = secondRoom(player,inventory);
                break;
            case "thirdRoom" :
                nextRoom = thirdRoom(player,inventory);
            break;
            default :
                nextRoom = forthRoom(player,inventory);
            break;
        }

    }

    alert("GAME OVER!");
}

//call

playGame("BORIS");
