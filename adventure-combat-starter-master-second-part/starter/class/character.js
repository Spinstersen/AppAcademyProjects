const { Item } = require("./item");
const { Room } = require("./room");



class Character {

  constructor(name, description, currentRoom , items = [], health = 100,strength = 10) {
    this.name = name,
    this.description = description,
    this.currentRoom = currentRoom,
    this.items = items,
    this.health = health,
    this.strength = strength
    
  }

  applyDamage(amount) {
    this.health = this.health - amount;
    if (this.health <= 0){
      this.die();
    }
  }

  die() {
    this.items.forEach(item => {
      let dropped = item;
      this.currentRoom.items.push(dropped);
    });
    this.currentRoom = null;
  }

}

module.exports = {
  Character,
};
