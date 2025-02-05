"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.resetBoard = resetBoard;
exports.removeMatch = removeMatch;
exports.keepScore = keepScore;
exports.testResetBoard = testResetBoard;

function resetBoard(numberOfRows) {
  for (var i = 0; i < numberOfRows; i++) {
    board.push(i + 1);
  }
}

function removeMatch(row) {
  board[row];
}

function keepScore() {}

var board = [];

function testResetBoard() {
  var testNumber = 3;
  resetBoard(testNumber);
  console.log("The board for ".concat(testNumber, " is: ").concat(board));
}