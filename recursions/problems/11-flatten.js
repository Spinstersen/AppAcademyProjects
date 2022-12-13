/***********************************************************************
Write a recursive function called `flatten` that takes a single array with
any number of nested arrays and returns and array with all the nested
contents on one level.

Examples:

flatten([]); // []
flatten([1, 2]); // [1, 2]
flatten([1, [2, [3]]]); // [1, 2, 3]
***********************************************************************/
function flatten(array) {
  let arr = [];
  for (let i = 0 ; i < array.length ; i++){
    if (Array.isArray(array[i])){
      arr = arr.concat(flatten(array[i]));
    }
    else {
      arr.push(array[i]);
    }
  }
  return arr;
}
function flatten2(array){
  if (!Array.isArray(array)){
    return [array];
  }
  let allElements = [];
  array.forEach(function (element){
    let flattened = flatten2(element);
    allElements.push(...flattened);
  });
  return allElements;
}



console.log(flatten([])); // []
console.log(flatten([1, 2])); // [1, 2]
console.log(flatten([1, [2, [3]]])); // [1, 2, 3]
/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = flatten;
} catch (e) {
  module.exports = null;
}
