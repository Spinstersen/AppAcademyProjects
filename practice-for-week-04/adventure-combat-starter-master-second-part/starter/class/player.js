const {Character} = require('./character');
const {Enemy} = require('./enemy');
const {Food} = require('./food');
const { Room } = require('./room');

class Player extends Character {

  constructor(name, startingRoom) {
    super(name, "main character", startingRoom);
  }

  move(direction) {

    const nextRoom = this.currentRoom.getRoomInDirection(direction);

    // If the next room is valid, set the player to be in that room
    if (nextRoom) {
      this.currentRoom = nextRoom;

      nextRoom.printRoom(this);
    } else {
      console.log("You cannot move in that direction");
    }
  }

  printInventory() {
    if (this.items.length === 0) {
      console.log(`${this.name} is not carrying anything.`);
    } else {
      console.log(`${this.name} is carrying:`);
      for (let i = 0 ; i < this.items.length ; i++) {
        console.log(`  ${this.items[i].name}`);
      }
    }
  }

  takeItem(itemName) {
    let item = this.currentRoom.getItemByName(itemName)
    this.items.push(item); 
    let roomItems = this.currentRoom.items;
    this.currentRoom.items = roomItems.filter(roomItem =>roomItem.name !=itemName);  

  }

  dropItem(itemName) {
    let item = this.getItemByName(itemName);
    let items = this.items;
    this.items = items.filter(item => item.name !=itemName);
    this.currentRoom.items.push(item);
   
  }

  eatItem(itemName) {
    this.items.forEach((item, index) => {
      if (item.name === itemName) {
          if (item instanceof Food) {
            this.items.splice(index, 1);
          }
      }
  })


  }

  getItemByName(name) {
    for (let i = 0 ; i < this.items.length ; i++) {
        if (this.items[i].name === name){
             return this.items[i];
        }
    }
  }
  hit(name) {
      let enemy = this.currentRoom.getEnemyByName(name);
      if (enemy){
      enemy.applyDamage(this.strength);
      enemy.setTarget(); 
      }
  }

  

  die() {
    console.log("You are dead!");
    process.exit();
  }

}

module.exports = {
  Player,
};
