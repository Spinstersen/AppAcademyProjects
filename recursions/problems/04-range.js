const { cp } = require("fs");

/***********************************************************************
Write a recursive function, `range`, that takes a start and an end and returns
an array of all numbers in that range, exclusive. If the end number is less than
the start, return an empty array.

Examples:

range(1, 5); // [1, 2, 3, 4]
range(3, 4); // [3]
range(7, 6); // []
***********************************************************************/
const range = (a,b) => {
  let array = [];
  if (a >= b ){
    return [];
  }
  if (a < b){
  array = [a,...range(a+1,b)];
  return array;
  }
}


tc1 = range(1, 5); // [1, 2, 3, 4]
tc2 = range(3, 4); // [3]
tc3 = range(7, 6); // []
console.log(tc1);
console.log(tc2);
console.log(tc3);
/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = range;
} catch (e) {
  module.exports = null;
}
