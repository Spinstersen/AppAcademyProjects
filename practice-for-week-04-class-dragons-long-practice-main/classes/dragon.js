class Dragon {
  constructor(name,color){
    this.name = name,
    this.color = color
  }
  breathesFire(){
    return `${this.name} breathes fire everywhere! BURN!!!!`
  }
  static getDragons(...dragons){
    let arr = [];
    dragons.forEach(element => arr.push(element.name));
    return arr;
  }
}
// const puff = new Dragon("Puff", "green");
// console.log(puff);
// console.log(puff.breathesFire());
// const toothless = new Dragon("Toothless", "black");
// console.log(Dragon.getDragons(puff, toothless));
module.exports = Dragon;

/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Dragon;
} catch {
  module.exports = null;
}
