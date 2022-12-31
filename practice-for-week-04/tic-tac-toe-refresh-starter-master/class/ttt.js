const Screen = require("./screen");
const Cursor = require("./cursor");

class TTT {

  constructor() {

    this.textColor = 'magenta';
    this.playerTurn = "O";

    this.grid = [[' ',' ',' '],
                 [' ',' ',' '],
                 [' ',' ',' ']]

    this.cursor = new Cursor(3, 3);

    // Initialize a 3x3 tic-tac-toe grid
    Screen.initialize(3, 3);
    Screen.setGridlines(true);

    // List of commands
    Screen.addCommand('up', 'Move up ', this.cursor.up);
    Screen.addCommand('down', 'Move down ', this.cursor.down);
    Screen.addCommand('left', 'Move left ', this.cursor.left);
    Screen.addCommand('right', 'Move right ', this.cursor.right);
    Screen.addCommand('x', 'command X', this.pressedX);    
    Screen.addCommand('o', 'command O', this.pressedO);    
    this.cursor.setBackgroundColor()
    Screen.render();
  }
  // pressing X or O to establish turns :

  pressedX = () => {
    this.pressedXO('X')
  }
  pressedO = () => {
    this.pressedXO('O')
  }
  // logic of turns :
  pressedXO = (char)=> {
    if (this.playerTurn === char){
      console.log("It's already your turn ")
    }
    else if (this.grid[this.cursor.row][this.cursor.col] !== ' '){
      console.log('This position is already filled');
    } else if (this.grid[this.cursor.row][this.cursor.col] === ' '){
      this.grid[this.cursor.row][this.cursor.col] = char;
      Screen.setGrid(this.cursor.row, this.cursor.col, char);
      this.setTextColor();
      this.playerTurn = char; 
      if (TTT.checkWin(this.grid)) TTT.endGame(char);
    }

  }

  setTextColor = () => {
    Screen.setTextColor(this.cursor.row, this.cursor.col, this.textColor)
    Screen.render()
  }

  static checkWin(grid) {
    for (let rows = 0 ; rows < grid.length ; rows++){
      let cols = 0;
          if (grid[rows][cols] === grid [rows][cols+1] &&  grid[rows][cols+1] === grid [rows][cols+2] && grid[rows][cols] !== ' '){
            let win  =  grid[rows][cols];
            return win;
          }
    }
    for (let cols = 0 ; cols < grid.length ; cols++){
      let rows = 0;
        if(grid[rows][cols] === grid [rows+1][cols] &&  grid[rows+1][cols] === grid [rows+2][cols] && grid[rows][cols] !== ' '){
          let win  =  grid[rows][cols];
          return win;
        }
    }
      let rows = 0;
      let cols = 0;
          if (grid[rows][cols] === grid [rows+1][cols+1] &&  grid[rows+1][cols+1] === grid [rows+2][cols+2] && grid[rows][cols] !== ' '){
            let win  =  grid[rows][cols];
            return win;
          } else if (grid[rows][cols+2] === grid [rows+1][cols+1] &&  grid[rows+1][cols+1] === grid [rows+2][cols] && grid[rows][cols+2] !== ' '){
            let win  =  grid[rows][cols+2];
            return win;
          }
          else if(grid.filter((row) => row.includes(' ')).length === 0){
            return 'T';
           }
           else return false;
    // Return 'X' if player X wins
    // Return 'O' if player O wins
    // Return 'T' if the game is a tie
    // Return false if the game has not ended
    }
    

  

  static endGame(winner) {
    if (winner === 'O' || winner === 'X') {
      Screen.setMessage(`Player ${winner} wins!`);
    } else if (winner === 'T') {
      Screen.setMessage(`Tie game!`);
    } else {
      Screen.setMessage(`Game Over`);
    }
    Screen.render();
    Screen.quit();
  }

}

module.exports = TTT;
