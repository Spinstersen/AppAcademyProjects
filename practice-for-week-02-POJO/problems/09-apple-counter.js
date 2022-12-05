/***********************************************************************
Write a function `appleCounter(appleObj)` that takes in an object containing a 
number of keys that have the word 'apple' contained within them. The `appleCounter`
function will be in charge of returning the number of keys that contain the word 
"apple".

**Hint**: you may want to take all the keys and lower case them for easier
searching.


Example:
let obj = { banana: "yay!" };
appleCounter(obj); // => 0

let obj1 = { crabapple: "yum!" };
appleCounter(obj1); // => 1

let obj2 = { crabapple: "yum!", honeyapple: "super yum", banana: "yay" };
appleCounter(obj2); // => 2


let obj3 = {
  crabApple: "yum!",
  honeyApple: "super yum",
  banana: "yay",
  bigapple: "NYC"
};
appleCounter(obj3); // => 3
***********************************************************************/

function appleCounter(appleObj) {
  // Your code here
  let count=0;
  let arr = Object.keys(appleObj);
  let arr1 = arr.map(function(element){
    return element.toLowerCase();
  });
  arr1.forEach(function(element){

    if (element.includes("apple")){
      count++;
    }

  });
  return count;
}
let obj = { banana: "yay!" };
appleCounter(obj); // => 0
console.log(appleCounter(obj));

let obj1 = { crabapple: "yum!" };
appleCounter(obj1); // => 1
console.log(appleCounter(obj1));

let obj2 = { crabapple: "yum!", honeyapple: "super yum", banana: "yay" };
appleCounter(obj2); // => 2
console.log(appleCounter(obj2));

let obj3 = {
  crabApple: "yum!",
  honeyApple: "super yum",
  banana: "yay",
  bigapple: "NYC"
};
appleCounter(obj3); // => 3
console.log(appleCounter(obj3));
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = appleCounter;
