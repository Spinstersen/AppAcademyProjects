class DynamicArray {

  constructor(defaultSize=4) {
    this.capacity = defaultSize,
    this.data = new Array(defaultSize),
    this.length = 0
  }

  read(index) {
    return this.data[index];
  }

  unshift(val) {

    for(let i = this.length ; i >= 1 ; i--){
      this.data[i] = this.data[i-1];
    }
    this.data[0] = val;
    this.length++;
    return this.data;
  }

}


module.exports = DynamicArray;
