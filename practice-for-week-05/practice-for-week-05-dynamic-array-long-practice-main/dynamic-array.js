class DynamicArray {

  constructor(defaultSize = 4) {
    
    this.capacity = defaultSize,
    this.data = new Array(defaultSize),
    this.length = 0
  }

  read(index) {
    return this.data[index];
  }

  push(val) {
    if (this.length === this.capacity) {
      this.resize();
    } 
      this.data[this.length] = val;
      this.length++;
    }
  


  pop() {
    if (this.length === 0){
      return undefined;
    }
    this.length --;
    return this.data[this.length];
  }

  shift() {

    const element = this.data[0];
    for (let i = 0 ; i < this.length ; i++){
      this.data[i] = this.data[i+1];
    }
    if (this.length > 0){
    this.length--;
    }
    return element;
  }

  unshift(val) {
    if (this.length === this.capacity){
      this.resize();
    }
    for(let i = this.length ; i > 0 ; i--){
      this.data[i] = this.data[i-1];
    }
    this.data[0] = val;
    this.length++;
    return this.data;
  }

  indexOf(val) {
    for (let i = 0 ; i < this.length ; i++){
      if (this.data[i] === val){
        return i;
      }
    }
    return -1;
  }

  resize() {
    this.capacity = this.capacity*2;
    this.data.length = this.data.length*2;
  }

}


module.exports = DynamicArray;
