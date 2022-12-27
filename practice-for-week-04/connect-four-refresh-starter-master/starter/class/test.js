const { grid } = require("./screen");

for (let rows = 0 ; rows < grid.length ; rows++){
    for (let cols = 0 ; cols < grid[0].length-3 ; cols++){
        if (grid[rows][cols] === grid [rows+1][cols+1] &&  grid[rows+1][cols+1] === grid [rows+2][cols+2] && grid[rows+2][cols+2] === grid [rows+3][cols+3] && grid[rows][cols] !== ' '){
            let win  =  grid[rows][cols];
            return win;
          } else if (grid[rows][cols+2] === grid [rows+1][cols+1] &&  grid[rows+1][cols+1] === grid [rows+2][cols] && grid[rows][cols+2] !== ' '){
            let win  =  grid[rows][cols+2];
            return win;

         }
    }
}
