const findMinimum = arr => {
  let min = arr[0];
  arr.forEach((el) => {
    if(el < min){
      min = el;
    }
  });
  return min;
}; // complexity of time O(n)
   // complexity of space O(1)

const runningSum = arr => {

  let sum = 0;
  let newArr = [];

  for(let i = 0 ; i < arr.length ; i++){
    sum += arr[i];
    newArr.push(sum);
  }

  return newArr;
};  // complexity of time O(n)
    // complexity of space O(n)

const evenNumOfChars = arr => {

  return arr.filter( element => (element.length%2) === 0).length;
};// complexity of time O(n)
// complexity of space O(1)  

const smallerThanCurr = arr => {
  // let newArr = [];
  
  // arr.forEach( el => {
  //   let  count = 0 ;
  //     for (let j = 0  ; j < arr.length ; j++){
  //       if ( el > arr[j] ){
  //         count++;
  //       }
  //     } 
  //     newArr.push(count);
  // });
  return arr.map( current => {
    return arr.filter( element => element < current ).length 
  })
  // complexity of time O(n²)
// complexity of space O(1)  
};

const twoSum = (arr, target) => {
  
let ind;
for (let i = 0 ; i < arr.length ; i++){
    ind = arr.indexOf(target - arr[i]);
    if (ind >= 0 && ind !== i){
      return true;
    }
    }
    return false;
  }

// complexity of time O(n²)
// complexity of space O(1)

//second solution 

// const twoSum = (arr, target) => {
// for (let i = 0 ; i < arr.length ; i++){
  //   for (let j = 0 ; j < arr.length ; j++){
  //     if ((target - arr[i]) === arr[j]){
  //       return true;
  //     }
  //   }
  // }
  // return false;
// };

// const secondLargest = arr => {
//   if (arr.length < 2 ){
//     return undefined;
//   }
//   let max = Math.max(...arr);
//   let secondLargest = -Infinity;
//   for ( let i = 0 ; i < arr.length ; i++ ){
//     if (arr[i]>secondLargest && arr[i] !== max){
//       secondLargest = arr[i];
//     }
//   }
//   return secondLargest;
// }; didn't work in case of duplicates

const secondLargest = arr => {
  if (arr.length < 2 ){
    return undefined;
  }
  let max = Math.max(...arr);
  let ind = arr.indexOf(max);
  arr[ind] = -Infinity;
  let secondLargest = Math.max(...arr);
  return secondLargest;
};

// complexity of time of O(n)
// complexity of space of O(1)

const shuffle = (arr) => {
  if (arr.length === 0) return undefined;
  else if (arr.length === 1) return arr;
  let shuffledArray = [];
  let shuffledIndex;
  for (let i = 0 ; i < arr.length ; i++){
    shuffledIndex = Math.floor(Math.random()*(arr.length));
    while(shuffledArray[i] === undefined) {
      let randomEl = arr[shuffledIndex];

      if (!shuffledArray.includes(randomEl)) {
        shuffledArray[i] = randomEl;
      }

      shuffledIndex = Math.floor( Math.random() * (arr.length) );
    }
  }

  return shuffledArray;

};
// complexity of time of O(n²)
// complexity of space of O(n)

const arr = [2, 5, 1, 3, 4, 7];
let a = shuffle(arr); // => [2, 3, 5, 4, 1, 7]
console.log(a); 
module.exports = [findMinimum, runningSum, evenNumOfChars, smallerThanCurr, twoSum, secondLargest, shuffle];
