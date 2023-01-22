class KeyValuePair {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
  }
}

class HashTable { // get O(1), set O(1), deleteKey O(1)

  constructor(numBuckets = 8) {
    // Initialize your buckets here
    // Your code here
    this.data = new Array(numBuckets).fill(null);
    this.capacity = numBuckets;
    this.count = 0;
    this.loadFactor = 0,7;
  }

  hash(key) {
    let hashValue = 0;
    for (let i = 0; i < key.length; i++) {
      hashValue += key.charCodeAt(i);
    }

    return hashValue;
  }

  hashMod(key) {
    // Get index after hashing
    return this.hash(key) % this.capacity;
  }


  insert(key, value) {
    // Your code here
    let loadFactor = this.count / this.capacity;

    while (loadFactor >= 0.7) {
      this.resize();
      loadFactor = this.count / this.capacity;
    }
    
    const pair = new KeyValuePair(key, value);
    const index = this.hashMod(key);
    const element = this.data[index];

    if ( element ) {
      let current = element;

      while (current) {

        if (current.key === key) {
          current.value = value;
          break;
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


  read(key) {
    let current = this.data[this.hashMod(key)];
    while (current){
    if (current.key === key){
      return current.value;
    } else {
      current = current.next;
    }}
  }


  resize() {
    const oldData = this.data;
    this.capacity = this.capacity * 2;
    this.data = new Array(this.capacity).fill(null);
    this.count = 0;
    for (let i = 0 ; i < oldData.length ; i++){
      let old = oldData[i];
      if (old){
        this.insert(old.key, old.value);
        let current = old;
        while(current.next){
          let newNext = current.next.next;
          this.insert(current.next.key, current.next.value);
          current.next.next = null;
          current.next = newNext;
        }

      }
    }
  }


  delete(key) {
    let current = this.data[this.hashMod(key)];
    if (!this.read(key)) {
      return 'Key not found';
    }
    while (current.key !== key && current.next.key !== key) {
      current = current.next;
    }
    if (current.key === key) {
      const newHead = current.next;
      current.next = null;
      this.data[this.hashMod(key)] = newHead;
      this.count--;
    } else {
      const newNext = current.next.next;
      current.next.next = null;
      current.next = newNext;
      this.count--;
    }
  }
}


module.exports = HashTable;
