class PartyPlanner {
	constructor(guestList = []){
		this.guestList = guestList
	}
	addToGuestList(name){
		this.guestList.push(name);
	}
	throwParty(){
		if (this.guestList.length === 0){
			return 'Gotta add people to the guest list';
		} else {
			let guests = this.guestList.join(" and ");
			return `Welcome to the party ${guests}`;
		}
	}
}

const party = new PartyPlanner();

console.log(party.throwParty()); // prints "Gotta add people to the guest list"

party.addToGuestList("James");
console.log(party.throwParty()); // prints "Welcome to the party James"

party.addToGuestList("Alvin");
console.log(party.throwParty()); // prints "Welcome to the party James and Alvin"


const party2 = new PartyPlanner();
console.log(party2.throwParty()); // prints "Gotta add people to the guest list"

party2.addToGuestList("Lucy");
console.log(party2.throwParty()); // prints "Welcome to the party Lucy"

/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

try {
	module.exports = PartyPlanner;
} catch {
	module.exports = null;
}
