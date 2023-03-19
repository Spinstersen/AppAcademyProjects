import Board from "./board.js";

let board = new Board(); // creates a new game board

// Examine the grid of the game board in the browser console.
// Create the UI of the game using HTML elements based on this grid.
console.log(board.grid);

// Your code here
window.addEventListener("DOMContentLoaded", function resetGame(event) {
  const youWin = document.createElement("h2");
  youWin.innerText = "YOU WIN !";
  youWin.setAttribute("class", "hidden");
  document.body.appendChild(youWin);
  const reset = document.createElement("button");
  reset.innerText = "RESET";
  document.body.appendChild(reset);
  const gameContainer = document.createElement("div");
  gameContainer.setAttribute("class", "gameContainer");
  document.body.appendChild(gameContainer);
  for (let row = 0; row < board.numRows; row++) {
    for (let col = 0; col < board.numCols; col++) {
      let square = document.createElement("div");
      square.setAttribute("id", `row${row}col${col}`);
      square.setAttribute("data-row", `${row}`);
      square.setAttribute("data-col", `${col}`);
      square.setAttribute("class", `shipContainer`);
      const innerContent = document.createElement("div");
      square.appendChild(innerContent);
      innerContent.setAttribute("class", "content");
      if (board.grid[row][col]) {
        innerContent.textContent = `${board.grid[row][col]}`;
      }
      gameContainer.appendChild(square);
    }
  }
  gameContainer.addEventListener("click", function game(event) {
    const square = document.getElementById(event.target.id);
    const rowSquare = square.getAttribute("data-row");
    const colSquare = square.getAttribute("data-col");
    if (board.makeHit(rowSquare, colSquare)) {
      square.style.backgroundColor = "green";
    } else {
      square.style.backgroundColor = "red";
    }
    if (board.isGameOver()) {
      youWin.removeAttribute("class", "hidden");
      alert("You won the game !!");
      gameContainer.removeEventListener("click", game);
    }
  });
  reset.addEventListener("click", function add(event) {
    reset.remove();
    gameContainer.remove();
    board = new Board();
    youWin.setAttribute("class", "hidden");
    resetGame();
  });
});
