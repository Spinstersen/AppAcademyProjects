const { array } = require("yargs");

/***********************************************************************
Write a recursive function called `addToTwelve` that will return true if there
are two adjacent numbers in the input array that can sum up to 12. Otherwise,
return false.

Examples:

addToTwelve([1, 3, 4, 7, 5]); // true
addToTwelve([1, 3, 4, 7, 6]); // false
addToTwelve([1, 11, 4, 7, 6]); // true
addToTwelve([1, 12, 4, 7, 6]); // false
addToTwelve([1]); // false
***********************************************************************/
const addToTwelve = arr => {
  if (arr.length === 0){
    return false;
  }
  else if ((arr[0]+arr[1]) === 12){
    return true;
  } else
   {
    return addToTwelve(arr.slice(1));
  }
}
// your code here
t1 = addToTwelve([1, 3, 4, 7, 5]); // true
t2 = addToTwelve([1, 3, 4, 7, 6]); // false
t3 = addToTwelve([1, 11, 4, 7, 6]); // true
t4 = addToTwelve([1, 12, 4, 7, 6]); // false
t5 = addToTwelve([1]); // false
console.log(t1,t2,t3,t4,t5);
/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = addToTwelve;
} catch (e) {
  module.exports = null;
}
