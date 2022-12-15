const readline = require("readline");
const { number } = require("yargs");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});



function askGuess(secretNumber){
rl.question("What's the secret Number ?", answer => {
    let att = checkGuess(answer,secretNumber);
    if(!att){
        askGuess(secretNumber);
    } else 
    rl.close();
  });
}

function randomInRange(min,max){
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min); 
    }

function askRange(){
    rl.question("Enter max number :", maxNumber => {
        rl.question("Enter min number ", minNumber => {
          console.log("I'm thinking of a number between "+maxNumber+" and "+minNumber+"...");
          let secretNumber = randomInRange(minNumber,maxNumber);
          askGuess(secretNumber);
        });
      });
}

function checkGuess(num,secretNumber){
    if (Number(num) > secretNumber){
        console.log("Too high");
        return false;
    }
    else if (Number(num) < secretNumber){
        console.log("Too low");
        return false;
    }
    else if (Number(num) === secretNumber){
        console.log("Correct !");
        return true;
    }
}
askRange();
