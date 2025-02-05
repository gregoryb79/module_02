export function resetBoard(numberOfRows) {
    board = [];
    for (let i = 0; i < numberOfRows; i++) {
        board.push(i * 2 + 1);
    }
}
export function removeMatch(row) {
    if ((board[row - 1] > 0) && (row - 1 < board.length)) {
        board[row - 1] = board[row - 1] - 1;
    }
    else {
        console.error("ERROR");
    }
}
export function getNimSum() {
    return board.reduce((acc, curr) => acc ^ curr, 0);
}
export function findWinningMove(nimSum) {
    for (let i = 0; i < board.length; i++) {
        const targetRow = board[i];
        const newRow = targetRow ^ nimSum;
        if (newRow < targetRow) {
            return {
                rowIndex: i,
                matchesToRemove: targetRow - newRow
            };
        }
    }
    return {
        rowIndex: board.findIndex(row => row > 0),
        matchesToRemove: -1
    };
}
export function keepScore(playerOne, playerTwo) {
    const scoreBoard = `${playerOne.name}:${playerOne.score},${playerTwo.name}:${playerTwo.score}`;
    console.log(scoreBoard);
    localStorage.setItem(playerOne.name, playerOne.score.toString());
    localStorage.setItem(playerTwo.name, playerTwo.score.toString());
}
export function updateScoreBoard(highScoreTable) {
    highScoreTable.style.setProperty("--records", localStorage.length.toString());
    if (localStorage.length > 0) {
        Object.keys(localStorage).forEach(key => {
            const li = document.createElement("li");
            li.classList.add("score-record");
            li.textContent = `${key} : ${localStorage.getItem(key)}`;
            highScoreTable.appendChild(li);
        });
    }
    else {
        const li = document.createElement("li");
        li.classList.add("score-record");
        li.textContent = `NO SCORES`;
        highScoreTable.appendChild(li);
    }
}
export function updateBoard(gameBoard) {
    gameBoard.style.setProperty("--rows", board.length.toString());
    const buttonsList = document.createElement("menu");
    buttonsList.classList.add("buttonsList");
    const matches = document.createElement("article");
    matches.classList.add("matchesHeap");
    for (let i = 0; i < board.length; i++) {
        const row = document.createElement("ul");
        row.classList.add(`board-row_${i}`);
        for (let j = 0; j < board[i]; j++) {
            const li = document.createElement("li");
            li.classList.add("game-piece");
            const img = document.createElement("img");
            img.src = "./images/download.jpg";
            img.alt = `match image for game piece ${i}-${j}`;
            img.classList.add("matchImage");
            row.appendChild(li);
            li.appendChild(img);
        }
        if (board[i] !== 0) {
            const button = document.createElement("button");
            button.textContent = `Remove`;
            button.classList.add(`removeButton`);
            button.classList.add(`u-buttonStyle`);
            button.classList.add(`u-radius-8`);
            button.id = `${i}`;
            const li = document.createElement("li");
            li.classList.add("buttons_li");
            li.appendChild(button);
            buttonsList.appendChild(li);
        }
        matches.appendChild(row);
    }
    gameBoard.appendChild(matches);
    gameBoard.appendChild(buttonsList);
}
export function setPlayer(name) {
    const player = {
        name: name,
        score: 0
    };
    return player;
}
export function isOver() {
    const sum = board.reduce((acc, curr) => acc + curr, 0);
    if (sum === 0) {
        return true;
    }
    else {
        return false;
    }
}
// let playerOne : Player  = {
//     name : "",
//     score : 0
// };
// let playerTwo : Player  = {
//     name : "",
//     score : 0
// };
// console.log(playerOne.name);
// console.log(playerTwo.name);
let board = [];
export function testResetBoard() {
    const testNumber = 3;
    resetBoard(testNumber);
    console.log(`The board for ${testNumber} is: ${board}`);
}
export function debug() {
    console.log(`The board now is: ${board}`);
    console.log(`Is the game over? ${isOver()}`);
}
