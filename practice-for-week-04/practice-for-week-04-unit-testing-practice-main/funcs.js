function isFive(num) {
if (num === 5){
  return true;
}
else return false;
}

function isOdd(number) {
  if ((typeof number)!== 'number'){
    throw Error('not a type of number');
  }
  return number % 2 !== 0;
}

function myRange(min, max, step = 1) {
  let array = [];
  for (let i = min ; i <= max ; i=i+step){
    array.push(i);
  }
  return array;
}


module.exports = { isFive, isOdd, myRange };
