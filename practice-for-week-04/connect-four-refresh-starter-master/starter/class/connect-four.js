const Screen = require("./screen");
const Cursor = require("./cursor");

class ConnectFour {

  constructor() {
    this.textColor = 'magenta';
    this.playerTurn = "O";

    this.grid = [[' ',' ',' ',' ',' ',' ',' '],
                 [' ',' ',' ',' ',' ',' ',' '],
                 [' ',' ',' ',' ',' ',' ',' '],
                 [' ',' ',' ',' ',' ',' ',' '],
                 [' ',' ',' ',' ',' ',' ',' '],
                 [' ',' ',' ',' ',' ',' ',' ']]

    this.cursor = new Cursor(6, 7);

    // Initialize a 6x7 connect-four grid
    Screen.initialize(6, 7);
    Screen.setGridlines(true);

    Screen.addCommand('up', 'Move up ', this.cursor.up);
    Screen.addCommand('down', 'Move down ', this.cursor.down);
    Screen.addCommand('left', 'Move left ', this.cursor.left);
    Screen.addCommand('right', 'Move right ', this.cursor.right);
    Screen.addCommand('x', 'command X', this.pressedX);    
    Screen.addCommand('o', 'command O', this.pressedO);    

    this.cursor.setBackgroundColor();
    Screen.render();
  }
  setTextColor = () => {
    Screen.setTextColor(this.cursor.row, this.cursor.col, this.textColor)
    Screen.render()
  }

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
    else if ((this.checkColumn(this.cursor.col) === 0)){
      console.log('This position is already filled');
    } else if (this.checkColumn(this.cursor.col)){
      this.grid[(this.checkColumn(this.cursor.col)) - 1][this.cursor.col] = char;
      Screen.setGrid((this.checkColumn(this.cursor.col)) , this.cursor.col, char);
      this.setTextColor();
      this.playerTurn = char; 
      if (ConnectFour.checkWin(this.grid)) ConnectFour.endGame(char);
    }

  }

  checkColumn = (column) =>{
    const cols = column;
    for (let rows = 0 ; rows < this.grid.length ; rows++){
          if (this.grid[rows][cols] !== ' '){
            return rows;
          }
    }
    return this.grid.length;
  }

  static checkWin(grid) {
    for (let rows = 0 ; rows < grid.length ; rows++){
      for (let cols = 0 ; cols < grid[0].length-3 ; cols++){
          if (grid[rows][cols] === grid [rows][cols+1] &&  grid[rows][cols+1] === grid [rows][cols+2] && grid[rows][cols+2] === grid [rows][cols+3] && grid[rows][cols] !== ' '){
              let win  =  grid[rows][cols];
              return win;
            }
  
      }
    }
    for (let col = 0 ; col < grid[0].length ; col++){
      for (let rows = 0 ; rows < grid.length-3 ; rows++){
          if (grid[rows][col] === grid [rows+1][col] &&  grid[rows+1][col] === grid [rows+2][col] && grid[rows+2][col] === grid [rows+3][col] && grid[rows][col] !== ' '){
              let win  =  grid[rows][col];
              return win;
            }

      } 
    }

    for (let rows = 0 ; rows < grid.length-3 ; rows++){
      for (let cols = 0 ; cols < grid[0].length-3 ; cols++){
         if (grid[rows][cols] === grid [rows+1][cols+1] &&  grid[rows+1][cols+1] === grid [rows+2][cols+2] && grid[rows+2][cols+2] === grid [rows+3][cols+3] && grid[rows][cols] !== ' '){
              let win  =  grid[rows][cols];
              return win;
           } else if (grid[rows][cols+3] === grid [rows+1][cols+2] &&  grid[rows+1][cols+2] === grid [rows+2][cols+1] && grid[rows+2][cols+1] === grid [rows+3][cols+0] &&  grid[rows][cols+3] !== ' '){
              let win  =  grid[rows][cols+3];
              return win;

           }
      }
   } 
          if(grid.filter((row) => row.includes(' ')).length === 0){
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

module.exports = ConnectFour;
