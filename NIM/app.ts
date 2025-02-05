import {resetBoard, removeMatch, debug, setPlayer, keepScore, updateBoard} from "./nim";

console.log("HELLO!");

const playerOneInput = document.getElementById("playerOneNameInput");
const playerTwoInput = document.getElementById("playerTwoNameInput");
const boardSizeInput = document.getElementById("boardSizeInput");
const applyButton = document.getElementById("applyButton");
const gameBoard = document.getElementById("gameBoard");

let playerOne = setPlayer("");
let playerTwo = setPlayer("");
let boardSize = 0;

document.getElementById("applyButton").addEventListener("click", function (e) {
    // e.preventDefault();

    const playerOneName = playerOneInput.value; 
    const playerTwoName = playerTwoInput.value;
    boardSize = parseInt(boardSizeInput.value, 10);
    gameBoard.innerHTML = ""; 
    playerOne = setPlayer(playerOneName);
    playerTwo = setPlayer(playerTwoName);
    resetBoard(boardSize);  
                        
    updateBoard(gameBoard);            
    keepScore(playerOne,playerTwo);
    debug();                      
                            
});   

gameBoard.addEventListener("click", function (e) {
    const lineID = Number(e.target.id)+1;
    removeMatch(lineID);
    console.log(lineID);
    debug(); 
    gameBoard.innerHTML = ""; 
    updateBoard(gameBoard);
    // updateBoard(gameBoard);
});