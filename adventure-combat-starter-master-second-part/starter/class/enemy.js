const {Character} = require('./character');
const { Player } = require('./player');



class Enemy extends Character {
  constructor(name, description, currentRoom,attackTarget,cooldown = 3000) {
    super(name,description,currentRoom),
    this.attackTarget = null,
    this.cooldown = cooldown
  }

  setPlayer(player) {
    this.player = player;
  }


  randomMove() {
    // Fill this in
  }

  takeSandwich() {
    this.items.forEach(item,ind => {
      if (item.name === 'sandwich'){
        this.alert("Enemy have eaten the sandwich !");
        this.items.splice(ind,1);
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
    if (this.health <= 0) {
      // Dead, do nothing;
    } else if (this.cooldown > 0) {
      this.rest();
    } else if (this.attackTarget) 
    {
      this.attack();
    }
    else {
      this.scratchNose();
      this.rest();
    }

    // Fill this in
  }


  scratchNose() {
    this.cooldown += 1000;

    this.alert(`${this.name} scratches its nose`);

    

  }


}

module.exports = {
  Enemy,
};
