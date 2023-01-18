const sha256 = require('js-sha256');

class KeyValuePair {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
  }
}

class HashTable {

  constructor(numBuckets = 4) {
    this.data = new Array(numBuckets).fill(null);
    this.capacity = numBuckets;
    this.count = 0;
    
  }

  hash(key) {
    let hash = sha256(key);
    hash = hash.slice(0,8);
    let intNumber = parseInt(hash, 16);
    return intNumber;
  }

  hashMod(key) {
    return this.hash(key)%this.capacity;
  }

  insertNoCollisions(key, value) {
    if (this.data[this.hashMod(key)] !== null){
      throw new Error('hash collision or same key/value pair already exists!')
    } else {
    this.data[this.hashMod(key)]= new KeyValuePair(key,value);
    this.count++;
    }
  }

  insertWithHashCollisions(key, value) {

    if (this.data[this.hashMod(key)] !== null){

      let next = this.data[this.hashMod(key)];
      this.data[this.hashMod(key)] = new KeyValuePair(key,value);
      this.data[this.hashMod(key)].next = next;
      

    } else {

    this.data[this.hashMod(key)]= new KeyValuePair(key,value);

    }
    this.count++;
  }

  insert(key, value) {
    const pair = new KeyValuePair(key, value);
    const index = this.hashMod(key);
    const element = this.data[index];

    if ( element ) {
      let current = element;

      while (current) {

        if (current.key === key) {
          current.value = value;
          current = null;
        } else {
          if (!current.next) {
            this.data[index] = pair
            this.data[index].next = element;
            this.count++;
          }
          current = current.next;
        }
      }

    } else {
      this.data[index] = pair;
      this.count++;
    }
  }

}


module.exports = HashTable;
