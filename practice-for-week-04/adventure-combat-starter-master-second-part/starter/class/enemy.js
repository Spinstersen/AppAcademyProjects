const {Character} = require('./character');
const { Player } = require('./player');



class Enemy extends Character {
  constructor(name, description, currentRoom,attackTarget = null,cooldown = 3000) {
    super(name,description,currentRoom),
    this.attackTarget = attackTarget,
    this.cooldown = cooldown
  }

  setPlayer(player) {
    this.player = player;
  }


  randomMove() {
    let roomOptions = this.currentRoom.exits;
    let keys = Object.keys(roomOptions);

    let randomRoom = roomOptions[keys[ keys.length * Math.random() << 0]];
    this.currentRoom = randomRoom;

    console.log(`The ${this.name} rushed to the ${this.currentRoom.name}!`);
    this.cooldown += 3000;
    this.act();
    
  }

  takeSandwich() {
    this.items.forEach(item,ind => {
      if (item.name === 'sandwich'){
        this.alert("Enemy have eaten the sandwich !");
        this.items.splice(ind,1);
        this.rest();
      }
    })
  }

  // Print the alert only if player is standing in the same room
  alert(message) {
    if (this.player && this.player.currentRoom === this.currentRoom) {
      console.log(message);
    }
  }

  rest() {
    // Wait until cooldown expires, then act
   
    const resetCooldown = function() {
      this.cooldown = 0;
      this.act();
    };
    setTimeout(resetCooldown.bind(this), this.cooldown);
    
  }

  attack() {
    if (this.attackTarget === null) return null;

    this.attackTarget.applyDamage(this.strength);
    this.cooldown += 3000; 
  
  }

  setTarget() {
    this.attackTarget = this.player;   
  }

  applyDamage(amount) {
    this.health = this.health - amount;
    if (this.health <= 0) {
      this.die();
    } else {
        this.attackTarget = this.player;
        this.act();
    }
  }



  act() {
    let randomNum = Math.floor(Math.random() * 5) ;

    if (this.health <= 0 || (this.player && this.player.currentRoom != this.currentRoom)) {
      // Do nothing
    } else if (this.cooldown > 0) {
      this.rest();
    }
    else if (this.attackTarget) {
      this.attack();
    }
    else {
      if (randomNum > 2) {
        this.scratchNose();
      } else if (this.currentRoom.items.length > 0) {
        this.takeSandwich();
      } else if (randomNum === 1) {
        this.attackTarget = this.player;
        this.act();
      } else {
        this.randomMove();
      }
    }

    
  }


  scratchNose() {
    this.cooldown += 1000;

    this.alert(`${this.name} scratches its nose`);

    

  }


}

module.exports = {
  Enemy,
};
