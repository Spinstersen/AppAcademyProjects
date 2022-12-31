const TTT = require('../class/ttt');
class ComputerPlayer {

  static makeMove(grid,move,symbol){
    grid[move.row][move.col] = symbol;
  }

  static getValidMoves(grid) {

    let validMoves = [];
    for (let row = 0 ; row < grid.length ; row++){
      for (let col = 0 ; col < grid[0].length ; col++){
        if (grid[row][col] === ' '){
          validMoves.push({row,col});
        }
      }
    }
    return validMoves;
  }

  
  static randomMove(grid) {
    let moves = this.getValidMoves(grid);
    let random = Math.floor(Math.random()*moves.length);
    return moves[random];
  }

  static getWinningMoves(grid, symbol) {
    let moves = this.getValidMoves(grid);
    for(let i = 0 ; i < moves.length; i++){
      this.makeMove(grid,moves[i],symbol);
      if((TTT.checkWin(grid))===symbol){
        return moves[i];
      }
      this.makeMove(grid,moves[i],' ');
    }
    return false;
  }

  static getSmartMove(grid, symbol) {
    let winnable = this.getWinningMoves(grid,symbol);
    
    if (winnable){
      return winnable;
    }
    else{
      
      if (symbol === 'X'){
         symbol = 'O';
         let blockEnemy = this.getWinningMoves(grid,symbol);
         if(blockEnemy){
           return blockEnemy;
         } else if(!blockEnemy) {
          let random = this.randomMove(grid,symbol);
          return random;
         }
      } else {
         symbol = 'X';
         let blockEnemy = this.getWinningMoves(grid,symbol);
         if(blockEnemy){
           return blockEnemy;
         } else if(!blockEnemy) {
         let random = this.randomMove(grid,symbol);
         return random;
        }
      }
    }
    
  }

}

module.exports = ComputerPlayer;
