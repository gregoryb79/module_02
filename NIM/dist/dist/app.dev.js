"use strict";

var _nim = require("nim.js");

console.log("HELLO!");
var playerOneInput = document.getElementById("playerOneNameInput");
var playerTwoInput = document.getElementById("playerTwoNameInput");
var boardSizeInput = document.getElementById("boardSizeInput");
var applyButton = document.getElementById("applyButton");
var gameBoard = document.getElementById("gameBoard");
var playerOne = (0, _nim.setPlayer)("");
var playerTwo = (0, _nim.setPlayer)("");
var boardSize = 0;
document.getElementById("applyButton").addEventListener("click", function (e) {
  // e.preventDefault();
  var playerOneName = playerOneInput.value;
  var playerTwoName = playerTwoInput.value;
  boardSize = parseInt(boardSizeInput.value, 10);
  gameBoard.innerHTML = "";
  playerOne = (0, _nim.setPlayer)(playerOneName);
  playerTwo = (0, _nim.setPlayer)(playerTwoName);
  (0, _nim.resetBoard)(boardSize);
  (0, _nim.updateBoard)(gameBoard);
  (0, _nim.keepScore)(playerOne, playerTwo);
  (0, _nim.debug)();
});
gameBoard.addEventListener("click", function (e) {
  var lineID = Number(e.target.id) + 1;
  (0, _nim.removeMatch)(lineID);
  console.log(lineID);
  (0, _nim.debug)();
  gameBoard.innerHTML = "";
  (0, _nim.updateBoard)(gameBoard); // updateBoard(gameBoard);
});