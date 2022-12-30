function myMap(inputArray, callback) {
  let newArr = [];
  for(let i = 0 ; i < inputArray.length ; i++){
    let element = inputArray[i];
    newArr.push(callback(element));
  }
  return newArr;
}

module.exports = myMap;
