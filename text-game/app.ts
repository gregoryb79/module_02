// Text based adventure game
// Locations and navigation - show description of current location and available options
// End game states - get to certain state/goal to win, or run into "trouble" and loose
// Inventory - track items in the user's possession and their state, allow using and dropping items, (limit invnetory size?)


const inventorySize = 3;
let Inventory: string [] = new Array(inventorySize).fill("");
let key = true;

Inventory[0] = "sword";
Inventory[1] = "shield";
Inventory[2] = "apple";


playGame();

function playGame() {
    let currentRoom: Function | undefined = moonlitGrove;
    
    printInventory();
    
    while (currentRoom) {
        currentRoom = currentRoom();
    }

    alert("Thank you for playing!");
}

function moonlitGrove() {

    if (key) {
        const userAction = getInput("The air is cool and fragrant with the scent of pine. Moonlight filters through the trees, casting long shadows. In the distance, a babbling stream is heard. The soft rustle of leaves is the only sound, as an ancient stone archway looms ahead.\n" +
        "There is a rusty key on the floor\n" + 
        "1. Approach the stone archway\n" +
        "2. Follow the stream towards the distant forest\n" +
        "3. Pick up the key",3);
    }
        else {
            const userAction = getInput("The air is cool and fragrant with the scent of pine. Moonlight filters through the trees, casting long shadows. In the distance, a babbling stream is heard. The soft rustle of leaves is the only sound, as an ancient stone archway looms ahead.\n" +              
                "1. Approach the stone archway\n" +
                "2. Follow the stream towards the distant forest",2); 
        }

    switch (userAction) {
        case 1: return forgottenTemple;
        case 2: return enchantedForrestClearing;
        case 3: 
            if (pickUpItem("key")) {
                key = false;
            }
            return moonlitGrove;
        case -1: return undefined;
        default:
            alert("ERROR unknown state.");
            return moonlitGrove;
    }
}


function forgottenTemple() {
    const userAction = getInput(
        "The crumbling walls of a long-abandoned temple rise before you. The floor is covered in moss and vine, and faint carvings of gods and beasts can be seen on the stone pillars. A heavy door to the south is slightly ajar.\n" +
        "1. Enter the ajar door\n" +
        "2. Return to the Moonlit Grove",2
    );

    switch (userAction) {
        case 1: return hiddenChamber;
        case 2: return moonlitGrove;
        case -1: return undefined;
        default:
           alert("ERROR unknown state.");
           return forgottenTemple;
    }
}

function enchantedForrestClearing() {
    const userAction = getInput(
        "A serene, circular clearing surrounded by ancient oaks. The air here feels charged with magic, and faint whispers can be heard if you listen closely. In the center, an old well glows faintly, its waters still and inviting.\n" +
        "1. Inspect the glowing well\n" +
        "2. Head back toward the Moonlit Grove",2
    );

    switch (userAction) {
        case 1: return hiddenChamber;
        case 2: return moonlitGrove;
        case -1: return undefined;
        default:
           alert("ERROR unknown state.");
           return enchantedForrestClearing;
    }
}

function hiddenChamber() {
    const userAction = getInput(
        "A small, hidden chamber deep beneath the earth, lit by glowing crystals embedded in the walls. Strange symbols pulse faintly, and an old chest lies in the corner, untouched for centuries. A narrow tunnel leads further into the darkness.\n" +
        "1. Open the chest\n" +
        "2. Enter the narrow tunnel",2
    );

    switch (userAction) {
        case 1:
            if(hasItem("key")){
                alert("You found a secret treasure!");
                return;
            } else{
                alert("The chest is locked. If only you had a key");
                return hiddenChamber;
            }
        case 2: return enchantedForrestClearing;
        case -1: return undefined;
        default:
           alert("ERROR unknown state.");
           return hiddenChamber;
    }
}

function getInput(promptText : string, answerRange : number): number {
    //returns uder answer by checking thai it's within the required range
    //legal answers are between 1 to answerRange inclusive
    //returns "-1" if the player wants to quit.
     
    
    let userAnswer = 0;
    while (userAnswer === 0){
        const userAction = prompt(promptText);
        if (userAction === null) {          
            const shouldQuit = confirm("Are you sure you want to quit the game?");
            if (shouldQuit){
                return -1;
            }
        }
        
        userAnswer = Number(userAction);
        if (isNaN(userAnswer)){
            alert(`Sorry, I don't know what is "${userAction}", please enter number between "1" and "${answerRange}`);
            userAnswer = 0;
        } else if ((userAnswer >= 1) && (userAnswer <= answerRange)){
            return userAnswer;
            } else {
                    alert(`Sorry, "${userAction}" is not a valid answer, please enter number between "1" and "${answerRange}`);
                    userAnswer = 0;
                }
    }

}

function printInventory(){
    let inventoryList = "";
    let counter = 0;
    
    for (i = 0; i < Inventory.length; i++){
        
        if (Inventory[i] !== ""){
            inventoryList = inventoryList + (i+1) + " : " + Inventory[i] + "\n";
            counter++;
        }
    }

    if (inventoryList !== "") {
        alert(`Your inventory is:\n ${inventoryList.trim()} \n You have ${(inventorySize - counter)} slots available.`);
    } else{
        alert(`Your inventory is empty. You have ${inventorySize} slots available.`);
    }
}

function dropItemSlot(itemSlot : number) {
    Inventory[itemSlot-1] = "";
    //printInventory();
}

function addItemSlot(itemSlot : number, itemName : string){
    Inventory[itemSlot-1] = itemName;
}

function isRoom(){
    for (i = 0; i < Inventory.length; i++){        
        if (Inventory[i] === ""){
            return i+1;
        }
    }
    return false;   
}

function hasItem (itemName : string) : boolean{

    for (i = 0; i < Inventory.length; i++){        
        if (Inventory[i] === itemName){
            return true;
        }
    }
    return false; 
}

function pickUpItem(itemName : string) : boolean {

    while (true){
        if (isRoom()){
            addItemSlot(isRoom(),itemName);
            printInventory();
            return true;
        }
         
        alert("There is no room in your inventory.");
        printInventory();
        if(confirm("Do you want to drop an item?")){
            const indexToDrop = getInput("What item do you want to drop",inventorySize);
            alert(`You dropped ${Inventory[indexToDrop-1]}.`);
            dropItemSlot(indexToDrop);
        }else {
            alert(`The ${itemName} is unpicked.`);
            return false;
        }
    }   
}