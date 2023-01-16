// logBetween

// Define a function logBetween(lowNum, highNum) that will return an array from lowNum to highNum, inclusive. Inclusive means that the range includes lowNum and highNum.

// Examples:



const logBetween = (lowNum, highNum) => {
    let arr = [];
    if (lowNum > highNum){
        return arr;
    }
    for (let i = lowNum ; i <= highNum ; i++){
        arr.push(i);
    }
    return arr;
}

// console.log(logBetween(-1, 2));  // => [-1, 0, 1, 2]
// console.log(logBetween(14, 6));  // => []
// console.log(logBetween(4, 6));  // => [4, 5, 6]

// O(n) runtime with O(n) space complexity;


// logBetweenStepper

// Write a function logBetweenStepper(min, max, step) that takes in three numbers as parameters. The function should return an array of numbers between min and max at step intervals.

// Examples:

const logBetweenStepper = (min,max,step) => {
    let arr = [];
    for (let i = min ; i <= max ; i+=step){
        arr.push(i);
    }
    return arr;
}

// O(n) runtime with O(n) space complexity;


// console.log(logBetweenStepper(5, 9, 1)) // => [5, 6, 7, 8, 9]
// console.log(logBetweenStepper(-10, 15, 5)) // => [-10, -5, 0, 5, 10, 15]


// printReverse

// Write a function printReverse(min, max) that returns an array of all numbers from max to min (exclusive), in reverse order.

// Examples:

const printReverse = (min,max) => {
    let arr = [];
    for (let i = max-1 ; i > min ; i--){
        arr.push(i);
    }
    return arr;
}


// O(n) runtime with O(n) space complexity;

// console.log(printReverse(13, 18)) // => [17, 16, 15, 14]
// console.log(printReverse(90, 94)) // => [93, 92, 91]





// fizzBuzz

// Define a function fizzBuzz(max) that takes a number and returns an array of every number from 0 to max that is divisible by either 3 or 5, but not both.

// Examples:

const fizzBuzz = number => {
    let arr = [];
    for (let i = 1 ; i < number ; i++){
        if ((( i % 3 ) === 0) ^ (((i % 5) === 0))){
            arr.push(i);
        }
    }
    return arr;
};
// O(n) runtime with O(n) space complexity;
// console.log(fizzBuzz(20)); // => [3, 5, 6, 9, 10, 12, 18]



// isPrime

// Define a function isPrime(number) that returns true if number is prime. Otherwise, false. Assume number is a positive integer.

const isPrime = num => {
    if (num === 1){
        return false;
    }
    for (let i = 2 ; i < num ; i++){
        if (num % i === 0){
            return false;
        }
    }
    return true;
}

// O(n) runtime with O(1) space complexity;

// Examples:

// console.log(isPrime(2));  // => true
// console.log(isPrime(10));  // => false
// console.log(isPrime(11));  // => true
// console.log(isPrime(9));  // => false
// console.log(isPrime(2017));  // => true




// maxValue

const maxValue = array => {
    if (array.length === 0 ){
        return null;
    }
    let max = array[0];
    for (let i = 0 ; i < array.length ; i++){
        if ( array[i] > max ){
            max = array[i];
        }
    } 
    return max;
}

// O(n) runtime with O(n) space complexity;

// Write a function maxValue(array) that returns the largest value in array. Assume array is an array of numbers.

// Examples:

// console.log(maxValue([12, 6, 43, 2]));  // => 43
// console.log(maxValue([]));  // => null
// console.log(maxValue([-4, -10, 0.43]));  // => 0.43




// myIndexOf

// Write a function myIndexOf(array, target) that takes in an array of numbers and a target number as arguments. It should return the index value of the target if it is present in the array or -1 if it is not present.

// CONSTRAINT: Do not use the indexOf or includes method

const myIndexOf = ( array , value ) => {
    for (let i = 0 ; i < array.length ; i++){
        if (value === array[i]){
            return i;
        }
    }
    return -1;
}

// O(n) runtime with O(n) space complexity;


// Examples:

// console.log(myIndexOf([1,2,3,4],4)); // => 3
// console.log(myIndexOf([5,6,7,8],2)); // => -1





// factorArray

// Write a function factorArray(array, number) that takes in an array of numbers and a number and returns an array of all the factors.

const factorArray = ( array , number ) => {
    let factors = [];
    for ( let i = 0 ; i < array.length ; i++ ){
        if ( ( number % array[i] ) === 0){
            factors.push( array[i] );
        }
    }
    return factors;
}

// O(n) runtime with O(n) space complexity;

// Examples:

// console.log(factorArray([2,3,4,5,6],20)) // => [2,4,5]
// console.log(factorArray([2,3,4,5,6],35)) // => [5]
// console.log(factorArray([10,15,20,25],5)) // => []





// oddRange

// Write a function oddRange(end) that takes in a number and returns an array containing all positive odd numbers up to end.

const oddRange = end => {
    let odds = [];
    for ( let i = 1 ; i <= end ; i++){
        if ( i % 2 === 1 ){
            odds.push(i);
        }
    }
    return odds;
}

// O(n) runtime with O(n) space complexity;

// Examples:

// console.log(oddRange(13));  // => [ 1, 3, 5, 7, 9, 11, 13 ]
// console.log(oddRange(6));  // => [ 1, 3, 5 ]



// reverseHyphenString

// Write a function reverseHyphenString(string) that takes in a hyphenated string and returns a the hyphenated string reversed.

const reverseHyphenString = string => {
    let sequence = string.split("-");
    let newSequence = [];
    for (let i = sequence.length -1 ; i >= 0 ; i-- ) {
        newSequence.push(sequence[i]);
    }
    return newSequence.join("-");
}

// O(n) runtime with O(n) space complexity;

// Examples:

// console.log(reverseHyphenString("Go-to-the-store")) // => "store-the-to-Go"
// console.log(reverseHyphenString("Jump,-jump-for-joy")) // => "joy-for-jump-Jump,"




// intersect

// Write a function intersect(arr1, arr2) that takes in two arrays and returns a new array containing the elements common to both arr1 and arr2.

const intersect = (arr1 , arr2) => {
    let intersections = arr1.filter( el => arr2.includes(el))
    return intersections;
}

// O(n) runtime with O(n) space complexity;

// Examples:

// console.log(intersect(['a', 'b', 'c', 'd'], ['b', 'd', 'e'])) // => [ 'b', 'd' ]
// console.log(intersect(['a', 'b', 'c'], ['x', 'y', 'z'])) // => []




// mirrorArray

// Write a function mirrorArray(array) that takes in an array as an argument and returns a new array "mirrored" as shown in the examples:

const mirrorArray = array => {
    return [...array,...array.reverse()];
}

// O(n) runtime with O(n) space complexity;

// Examples:

// console.log(mirrorArray([1,2,3]));
//   // => [ 1, 2, 3, 3, 2, 1 ]
// mirrorArray(['a', 'b', 'c', 'd']);
//   // => [ 'a', 'b', 'c', 'd', 'd', 'c', 'b', 'a' ]





// abbreviate

// Write a function abbreviate(sentence) that takes in a sentence string and returns a new sentence where words longer than 4 characters have their vowels removed. Assume the sentence has all lowercase characters. Feel free to use the array below in your solution: const vowels = ['a', 'e', 'i', 'o', 'u'];

const abbreviate = sentence => {
    const  vowels = "aeiou";
    let words = sentence.split(" ");
    let newSentence = [];
    for (let i = 0 ; i < words.length ; i++){
        if (words[i].length >= 4){
            let newWord = words[i].split('')
            newSentence.push((newWord.filter( el => !vowels.includes(el))).join(""));
            newSentence.push(" ");
        } else {
            newSentence.push(words[i]);
            newSentence.push(" ");
        }
    }
    return newSentence.join("");
} 

// O(n) runtime with O(n) space complexity;

// Examples:

// console.log(abbreviate('the bootcamp is fun')); // => 'the btcmp is fun'
// console.log(abbreviate('programming is fantastic')); // => 'prgrmmng is fntstc'
// console.log(abbreviate('hello world')); // => 'hll wrld'
// console.log(abbreviate('how are you')); // => 'how are you'





// adults

// Write a function adults(people) that takes in an array of person objects.
//  The function should return an array containing the names of those who have
//  an age of 18 or higher.

function adults(people) {
    return people.filter(person => person.age >= 18).map(person => person.name);
  }

// O(n) runtime with O(n) space complexity;

// Example:

// const ppl = [
//   {name: 'John', age: 20},
//   {name: 'Jim', age: 13},
//   {name: 'Jane', age: 18},
//   {name: 'Bob', age: 7}
// ];

// console.log(adults(ppl)); // => [ 'John', 'Jane' ]




// countScores

// Write a function countScores(people) that takes in an array of score objects,
// people, as its input. A score object, people, has two key-value pairs: a name
//  (string) and a score (number). countScores(people) should return an object that
//  has key-value pairs where each name is a key and the value is their total score.

const countScores = people => {
    let obj = {};
    people.forEach ( person => {
       let {name,score} = person;
        if (!obj[name]){
            obj[name] = score;
        } else {
            obj[name] = obj[name] + score;
        }
    })
    return obj;
}

// O(n) runtime with O(n) space complexity;


// // Example 1:
// const ppl = [
//   { name: "Anthony", score: 10 },
//   { name: "Fred", score : 10 },
//   { name: "Anthony", score: -8 },
//   { name: "Winnie", score: 12 }
// ];
// console.log(countScores(ppl)); // => { Anthony: 2, Fred: 10, Winnie: 12 }

// // Example 2
// const peeps = [
//   { name: "Anthony", score: 2 },
//   { name: "Winnie", score: 2 },
//   { name: "Fred", score: 2 },
//   { name: "Winnie", score: 2 },
//   { name: "Fred", score: 2 },
//   { name: "Anthony", score: 2 },
//   { name: "Winnie", score: 2 }
// ];

// console.log(countScores(peeps)); // => { Anthony: 4, Fred: 4, Winnie: 6 }



// firstNPrimes

// Using the isPrime function you made, write a function firstNPrimes(n) that returns an array of the first n prime numbers.

// Examples:
const firstNPrimes =  n => {
    let array = [];
    let number = 2;
    while (array.length < n){
        if (isPrime(number)){
            array.push(number);
        }
        number++;
    }
    return array;
}

// O(n) runtime with O(n) space complexity;

// console.log(firstNPrimes(0));  // => []
// console.log(firstNPrimes(1));  // => [2]
// console.log(firstNPrimes(4));  // => [2, 3, 5, 7]

// peakFinder

// Write a function peakFinder(array) that takes in an array of numbers. It should return an array containing the indices of all the peaks. A peak is an element that is greater than both of its neighbors. If it is the first or last element, it is a peak if it is greater than its one neighbor. Assume the array has a length of at least 2.

const peakFinder = array => {
    let peaks = [];
    if (array[0]>array[1]){
        peaks.push(0);
    }
    for (let i = 1 ; i < array.length ; i++){
        if (array[i-1] < array [i] && array[i] > array[i+1]){
            peaks.push(i);
        }
    }
    if (array[array.length-1] > array[array.length-2]){
        peaks.push(array.length-1)
    }
    return peaks;
}

// O(n) runtime with O(n) space complexity;

// Examples:

// console.log(peakFinder([1, 2, 3, 2, 1])); // => [2]
// console.log(peakFinder([2, 1, 2, 3, 4, 5])); // => [0, 5]
// console.log(peakFinder([4, 6, 9, 4, 2, -7, 2, -4, 5])); // => [2, 6, 8]

// divisibleByThreePairSum

// Write a function divisibleByThreePairSum(array) that takes an array of numbers. 
// It should return an array of all the pairs of indices, whose elements sum to a 
// multiple of three.

const divisibleByThreePairSum = array => {
    let pairSum = [];
    for (let i = 0 ; i < array.length ; i++){
        for ( let j = i+1 ; j < array.length ; j++){
            let sum = array[i] + array[j];
            if ((sum%3 === 0)){
                pairSum.push([i,j]);
            }
        }
    }
    return pairSum;
}

// O(n²) runtime with O(n²) space complexity;

// Examples:

// const arr1 = divisibleByThreePairSum([1, 6, 3, 4, 2, 0]);
// console.log(arr1);// => [[0, 4], [1, 2], [1, 5], [2, 5], [3, 4]]

// const arr2 = divisibleByThreePairSum([8, 3, 5, 9, 2]);
// console.log(arr2); // => [[1, 3]]

// zipArray

// Write a function zipArray(arr1, arr2) that takes in two arrays and "zips" them 
// together by returning a single 2D-array. Assume that both input arrays have the 
// same length.

const zipArray = (array1,array2) => {
    let zipped = [];
    for (let i = 0 ; i < array1.length ; i++){
                zipped.push([array1[i],array2[i]]);
    }
    return zipped;
}

// O(n) runtime with O(n) space complexity;

// Examples:

// const a1 = ['a', 'b', 'c', 'd'];
// const a2 = [10, 20, 30, 40];

// const result = zipArray(a1, a2);
// console.log(result); // => [ [ 'a', 10 ], [ 'b', 20 ], [ 'c', 30 ], [ 'd', 40 ] ]

// twoDimensionalTotal

// Write a function twoDimensionalTotal(array) that takes in a 2D array of numbers and returns the total sum of all elements. Examples:


const twoDimensionalTotal = array => {
    let sum = 0;
    for (let i = 0 ; i < array.length ; i++){
        for ( let j = 0 ; j < array[i].length ; j++){
            sum = sum + array[i][j];
        }
    }
    return sum;
}

// O(n²) runtime with O(n²) space complexity;

// const arr1 = [
//   [5, 2, 5, 3],
//   [12, 13],
// ];

// console.log(twoDimensionalTotal(arr1));  // => 40

// const arr2 = [
//   [2],
//   [1, 9],
//   [1, 1, 1]
// ]

// console.log(twoDimensionalTotal(arr2));  // => 15

// countInnerElement

// Write a function countInnerElement(arr) that takes in a 2-D array of elements. Each element of arr is a sub array that contains multiple elements. The number of elements contained in each sub array are not the same. You can assume each sub array contains at least one element. You should return an object that counts how many times each element in each sub array repeats.

const countInnerElement = array => {
    let obj = {};
    for (let i = 0 ; i < array.length ; i++){
        for ( let j = 0 ; j < array[i].length ; j++){
            if ( obj[array[i][j]] ){
                obj[array[i][j]] += 1;
            } else {
                obj[array[i][j]] = 1;
            }
        }
    }
    return obj;
}

// O(n²) runtime with O(n²) space complexity; 

// Examples:

// const arr1 = [
//   [1, 2, 4, 5],
//   [2, 7, 4],
//   [1, 4, 5, 2, 7]
// ]

// console.log(countInnerElement(arr1))  // => {1: 2, 2: 3, 4: 3, 5: 2, 7: 2}

// const arr2 = [
//   ['a','b','c','d'],
//   ['a','b'],
//   ['a','c','d','a']
// ]

// console.log(countInnerElement(arr2))  // => {a: 4, b: 2, c: 2, d: 2}

// twoDiff

// Write a function twoDiff(array), given an array of numbers, return a 2-D array,
//  where each of the sub array are indices of the two numbers such that their difference is 2.
//  If there are no such numbers, return an empty array.

// NOTE: The pairs are unique. HINT: Account for negative difference too!

const twoDiff= array => {
    let twoDiffy = [];
    for (let i = 0 ; i < array.length ; i++){
        for ( let j = i+1 ; j < array.length ; j++){
            let difference = array[i] - array[j];
            if ((Math.abs(difference)===2)){
                twoDiffy.push([i,j]);
            }
        }
    }
    return twoDiffy;
}

// O(n²) runtime with O(n²) space complexity; 

// Examples:


// console.log(twoDiff([2, 3, 4, 6, 1, 7]))  // => [[0, 2], [1, 4], [2, 3]]
// console.log(twoDiff([0, 2, 4, 3, 5]))  // => [[0, 1], [1, 2], [3,4]]
// console.log(twoDiff([]))  // => []

// arrayDiff

// Write a function arrayDiff(arr1, arr2) that takes in two arrays. The function should return a new array, containing the elements of arr1 that are not also in arr2.

// Note: Assume both arrays have unique elements.

const arrayDiff = (array1,array2) => {
    let obj = {};
    let diffs = [];
    for (let i = 0 ; i < array1.length ; i++){
        for ( let j = 0 ; j < array2.length ; j++){
            if (array1[i] === array2[j]){
             obj[array1[i]] = true;
        }
     }
        if (!obj[array1[i]]){
         diffs.push(array1[i]);
      }
    }
    return diffs;
}


// O(n²) runtime with O(n²) space complexity; 

// Examples:

// const array1 = [1, 23, 2, 43, 3, 4]
// const array2 = [3, 23]
// console.log(arrayDiff(array1, array2))  // => [1, 2, 43 ,4]

// const array3 = ['a', 'ab', 'c', 'd', 'c']
// const array4 = ['d']
// console.log(arrayDiff(array3, array4))  // => ['a', 'ab', 'c', 'c']

// valueCounter

// Write a function valueCounter(obj, val) that takes in an object and a value, the function should return
//  the number of times val repeats as a value in obj.

const valueCounter = (obj, val) => {
    let counter = 0;
    for (key in obj){
    if (obj[key]===val){
        counter++;
    }
    }
    return counter;

}

// O(n) runtime with O(n) space complexity; 

// Examples:

// const obj1 = { 1: 'Anne', 2: 'Alvin', 3: 'Anne', 4: 'Anne' }
// console.log(valueCounter(obj1, 'Anne'))  // => 3

// const obj2 = { Anne: 50, Alvin: 1, JJ: 100, Roman: 100 }
// console.log(valueCounter(obj2, 88))  // => 0

// const pairs = { Anne: 'Roman', Alvin: 'Roman', JJ: 'Anne', Roman: 'Anne' }
// console.log(valueCounter(pairs, 'Roman'))  // => 2

// elementCount

// Write a function elementCount(array) that returns a object. Each key corresponds to an element in the array and the value corresponds to how many times that element appears in the array.

const elementCount = array => {
    let obj = {};
    array.forEach ( element => {
        if (!obj[element]){
            obj[element] = 1;
        } else {
            obj[element] = obj[element] + 1;
        }
    })
    return obj;
}

// O(n) runtime with O(n) space complexity; 

// Example:

// console.log(elementCount(["a", "a", "b", "b"])); // => { "a" : 2, "b" : 2 }
// console.log(elementCount(['c', 'a', 'c', 'a', 'b'])); // => { "c": 2, "a": 2, "b": 1 }

// nextTwoPrimes

// Write a function nextTwoPrimes(num) that takes in a number num and returns the next two prime numbers greater than num.

const nextTwoPrimes = num => {
    let counter = 2;
    let array = [];
    while(counter > 0){
        num++;
        if (isPrime(num)){
            array.push(num);
            counter--;
        }
    }
    return array;
}

// O(n) runtime with O(n) space complexity; 

// Examples:

// console.log(nextTwoPrimes(2));  // => [ 3, 5 ]
// console.log(nextTwoPrimes(3));  // => [ 5, 7 ]
// console.log(nextTwoPrimes(7));  // => [ 11, 13 ]
// console.log(nextTwoPrimes(8));  // => [ 11, 13 ]
// console.log(nextTwoPrimes(20));  // => [ 23, 29 ]
// console.log(nextTwoPrimes(97));  // => [ 101, 103 ]

// pairProduct

// Write a function pairProduct(arr, num) that accepts an array of numbers, arr, 
// and a target number, num. It should return pairs of indices whose elements multiply 
// to num. No pair should appear twice in the result.

// CONSTRAINT: Use only while loops. No for loops.


function pairProduct(arr, num) {
    let pairs = [];
    let i = 0;

    while (i < arr.length - 1) {

      let j = i + 1;
      while (j < arr.length) {
  
        if (arr[i]* arr[j] === num) {
          pairs.push([i, j]);
        }
        j++;
      }
      i++;
    }
  
    return pairs;
  }

// O(n²) runtime with O(n²) space complexity; 

// Examples:

// pairProduct([1, 2, 3, 4, 5], 4); // => [ [ 0, 3 ] ]
// pairProduct([1, 2, 3, 4, 5], 8); // => [ [ 1, 3 ] ]
// pairProduct([1, 2, 3, 12, 8], 24); // => [ [ 1, 3 ], [ 2, 4 ] ]

// twoDimensionalSize

// Write a function twoDimensionalSize(array) that takes in a 2D-array as an argument.
//  The function should return the total number of elements in the 2D-array.

const twoDimensionalSize = array => {
    let sum = 0;
    for ( let i = 0 ; i < array.length ; i++){
        sum = sum + array[i].length;
    }
    return sum;

}

// O(n) runtime with O(n²) space complexity; 

// Examples:

// const arr1 = [
//   [1, 2, 3],
//   [4, 5],
//   [6, 7, 8, 9]
// ];
// console.log(twoDimensionalSize(arr1));  // => 9

// const arr2 = [
//   ['a'],
//   ['b', 'c', 'd', 'e']
// ];
// console.log(twoDimensionalSize(arr2));  // => 5

// longWordCount

// Write a function longWordCount(string) that takes in a string and returns the number of words longer than 7 characters.

const longWordCount = string => string.split(" ").filter( element => element.length > 7).length;

// O(n) runtime with O(n) space complexity; 

// Examples:

// console.log(longWordCount(""));  // => 0
// console.log(longWordCount("short words only"));  // => 0
// console.log(longWordCount("one reallylong word"));  // => 1
// console.log(longWordCount("two reallylong words inthisstring"));  // => 2
// console.log(longWordCount("allwordword longwordword wordswordword"));  // => 3
// console.log(longWordCount("seventy schfifty five"));  // => 1

// factorial

// Write a function factorial(n), that returns the factorial of the number n. For example, the factorial of 4 is 4 * 3 * 2 * 1 = 24.

function factorial(n) {
    if (n === 1) {return 1;}
    return n * factorial(n-1);
  }

  // O(n) runtime with O(n) space complexity; 

// Examples:

// factorial(1);  // => 1
// factorial(4);  // => 24
// factorial(5);  // => 120
// factorial(10);  // => 3628800

// lcm

// Write a function lcm(num1, num2) that returns the lowest number which is a multiple of both num1 and num2.


function lcm(num1, num2) {
    for (let i = 1; i <= num1*num2; i++) {
      if (i % num1 === 0 && i % num2 === 0) {
        return i;
      }
    }
  }

    // O(n) runtime with O(1) space complexity; 

// Examples:

// lcm(2, 3);  // => 6
// lcm(6, 10);  // => 30
// lcm(24, 26);  // => 312

// hipsterfyWord

// Write a function hipsterfyWord(word) that takes takes in a string and returns the string with the last vowel removed. 'y' is not a vowel.

function hipsterfyWord(word) {
    const vowels = "AEIOUaeiou";
    let hipster = "";
  
    for (let i = word.length - 1; i >= 0; i--) {
      if (vowels.includes(word[i])) {
        hipster = word.slice(0, i) + word.slice(i+1);
        break;
      }
    }
    return hipster;
  }

  // O(n) runtime with O(n) space complexity; 

// Examples:

// hipsterfyWord('proper') // => 'propr'
// hipsterfyWord('tonic') // => 'tonc'
// hipsterfyWord('PANTHER') // => 'PANTHR'
// hipsterfyWord('BACKWARDS') // => 'BACKWRDS'

// hipsterfy

// Write a function hipsterfy(sentence) that takes takes a string containing several words as input. Remove the last vowel from each word. 'y' is not a vowel.

function hipsterfy(sentence) {
    let words = sentence.split(" ");
    words = words.map(word => hipsterfyWord(word));
    return words.join(" ");
  }

    // O(n) runtime with O(n) space complexity; 

// Examples:

// hipsterfy("proper");  // => "propr"
// hipsterfy("proper tonic panther");  // => "propr tonc panthr"
// hipsterfy("towel flicker banana");  // => "towl flickr banan"
// hipsterfy("runner anaconda");  // => "runnr anacond"
// hipsterfy("turtle cheeseburger fries");  // => "turtl cheeseburgr fris"

// objectToString

function objectToString(obj) {
   
  let repeatedLetters = [];

  for (letter in count) {
    let repeated = new Array(count[letter]);
    repeated.fill(letter);
    repeated = repeated.join("");
    repeatedLetters.push(repeated);
  }

  return repeatedLetters.join("");
  }
  
  // O(n²) runtime with O(n²) space complexity; 


// Write a function objectToString(count) that takes in a char count object and returns a string representing the counts of each character.

// Examples:

// objectToString({ a : 2, b: 4, c: 1 }) // => 'aabbbbc'
// objectToString({ b: 1, o: 2, t: 1 }) // => 'boot'

// shortestWord

// Write a function shortestWord(sentence) that returns the shortest word of a sentence. You can assume that the words of the sentence all have different lengths.

function shortestWord(sentence) {
    let words = sentence.split(" ");
    let shortest = words[0];
  
    for (let i = 1; i < words.length; i++) {
      let currentWord = words[i];
      if (currentWord.length < shortest.length) {
        shortest = currentWord;
      }
    }
  
    return shortest;
  }

  // O(n) runtime with O(n) space complexity; 

// Examples:

// shortestWord('app academy is cool') // => 'is'
// shortestWord('programming bootcamp') // => 'bootcamp'

// greatestCommonFactor

// Write a function greatestCommonFactor(num1, num2) that returns the largest number that is divides both num1 and num2.

function greatestCommonFactor(num1, num2) {
    for (let i = Math.min(num1, num2); i > 0; i--){
      if (num1 % i === 0 && num2 % i === 0) {
        return i;
      }
    }
  }

    // O(n) runtime with O(1) space complexity; 
// Examples:

// greatestCommonFactor(15, 25) // => 5
// greatestCommonFactor(16, 24) // => 8
// greatestCommonFactor(7, 11) // => 1

// isPassing

// Write a function isPassing(assessments) that takes in an array of assessment objects. The function should return true if the average assessment score is at least 70. It should return false otherwise.

function isPassing(assessments) { 
    vals = assessments.reduce((sum, el) => sum + el.score, 0);
    result = vals/assessments.length >= 70
    return result
  }


// O(n) runtime with O(n) space complexity; 
// Examples:

// const assessments1 = [
//   { number: 1, score: 60 },
//   { number: 2, score: 90 },
//   { number: 3, score: 80 },
//   { number: 4, score: 100 },
//   { number: 5, score: 85 }
// ];

// isPassing(assessments1) // => true
// const assessments2 = [
//   { number: 1, score: 60 },
//   { number: 2, score: 20 },
//   { number: 3, score: 45 }
// ];

// isPassing(assessments2) // => false

// valueConcat

// Write a function valueConcat(array, obj) that takes in an array and object The function should return 
// a new array where each element is concatenated with it's corresponding value from the object.

const valueConcat = (array,obj) => {
    let newArray = [];
    for (let i = 0 ; i < array.length ; i++){
        if ( obj[array[i]] ){
            newArray.push(array[i]+obj[array[i]]);
        } else {
            newArray.push(array[i])
        }
    }
    return newArray;
}

  // O(n) runtime with O(n) space complexity; 

// Examples:

// const arr = ['alex', 'maurice', 'meagan', 'ali'];
// const obj = { alex: 'bronca', ali: 'harris' }
// console.log(valueConcat(arr, obj)) // => [ 'alexbronca', 'maurice', 'meagan', 'aliharris' ]

// console.log(valueConcat(['a', 'b', 'c'], { b: 2, c: 3 })) // => [ 'a', 'b2', 'c3' ]

// threeInARow

// Write a function threeInARow(arr) that takes in an array of numbers and returns true if the array contains 3 of the same number consecutively. The function should return false otherwise.

function threeInARow(arr) {
    for (let i = 0; i < arr.length - 3; i++) {
      if (arr[i] === arr[i+1] && arr[i+1] === arr[i+2]) {
        return true;
      }
    }
    return false;
  }
 // O(n) runtime with O(n) space complexity; 

// Examples:

// threeInARow([4, 3, 7, 7, 7, 13, 8]);  // => true;
// threeInARow([10, 9, 20, 33, 3, 3]);  // => false;

// variableNameify

// Write a function variableNameify(words) that takes in an array of words. The function should return a string representing the variable name obtained by combining the words and captitalizing them in mixCased style.

const variableNameify = array => {
    let newArr = [];
    newArr.push(array[0].toLowerCase());
    for (let i = 1 ; i < array.length ; i++){
        newArr.push(array[i].slice(0, 1).toUpperCase() + array[i].slice(1).toLowerCase());
    }
    return newArr.join("");
}

// O(n) runtime with O(n) space complexity; 

// Examples:

// console.log(variableNameify(['is', 'prime'])) // => 'isPrime'
// console.log(variableNameify(['remove', 'last', 'vowel'])) // => 'removeLastVowel'
// console.log(variableNameify(['MaX', 'VALUE'])) // => 'maxValue'

// threeIncreasing

// Write a function threeIncreasing(arr) that takes in an array of numbers and returns true if the array contains 3 consecutive numbers in increasing order. The function should return false otherwise. Note that the 3 consecutive numbers should be increasing by 1, so the the second number is 1 greater than the first, and the third number is 1 greater than the second.

function threeIncreasing(arr) {
    for (let i = 0; i < arr.length - 3; i++) {
      if (arr[i]+1 === arr[i+1] && arr[i+1]+1 === arr[i+2]) {
        return true;
      }
    }
    return false;
  }

  // O(n) runtime with O(n) space complexity; 

// Examples:

// console.log(threeIncreasing([3, 2, 11, 12, 13, 2, 4]));  // => true
// console.log(threeIncreasing([7, 2, 4, 5, 2, 1, 6]));// => false

// reverse2D

// Write a function reverse2D(array) that takes in a 2D array of strings. The function should return a string representing the elements of the array in reverse order.

const reverse2D = arr => {
    let newArr = [];
    arr.forEach( element => {
        newArr = [...newArr,...element];
    })
    return newArr.reverse().join("");
};

    // O(n) runtime with O(n) space complexity; 

// Examples:

// const arr1 = [
//   ['a', 'b', 'c', 'd'],
//   ['e', 'f'],
//   ['g', 'h', 'i']
// ];

// console.log(reverse2D(arr1)) // => 'ihgfedcba'
// const arr2 = [
//   ['Julian', 'Matt', 'Mike'],
//   ['Oscar', 'Patrick']
// ];
// console.log(reverse2D(arr2)) // => 'PatrickOscarMikeMattJulian'

// reverb

// Write a function reverb(word) that takes in a word string and returns the word with all characters after the last vowel repeated.

function reverb(word) {
    let vowels = "aeiou";
    for (let i = word.length; i >= 0; i--) {
      if (vowels.includes(word[i])) {
        return word + word.slice(i);
      }
    }
  
    return word;
  }

    // O(n) runtime with O(n) space complexity; 


// Examples:

// reverb('running');  // => 'runninging'
// reverb('wild');  // => 'wildild'
// reverb('debugged');  // => 'debuggeded'
// reverb('my');  // => 'my'

// countRepeats

// Write a function countRepeats(string) that takes in a string and returns the number of letters that appear more than once in the string. You may assume the string contains only lowercase letters. Count the number of letters that repeat, not the number of times they repeat in the string.

// Examples:

function countRepeats(string) {
    let counts = {};
    let count = 0;
    for (let i = 0; i < string.length; i++) {
      if (counts[string[i]] === 1) {
        count++;
        counts[string[i]]++;
      }
      else if (counts[string[i]]) {counts[string[i]]++;}
      else {counts[string[i]] = 1;}
    }
  
    return count;
  }

      // O(n) runtime with O(n) space complexity; 

// countRepeats('calvin'); // => 0
// countRepeats('caaaalvin'); // => 1
// countRepeats('pops'); // => 1
// countRepeats('mississippi'); // => 3
// countRepeats('hellobootcampprep'); // => 4

// pairsToString

// Write a function pairsToString(arr) that takes in an array of pairs. The function should return a string corresponding to the pairs.

function pairsToString(arr) {
    let result = '';
    for (let i = 0; i < arr.length; i++) {
        const pair = arr[i];
        const char = pair[0];
        const count = pair[1];
        for (let j = 0; j < count; j++) {
            result += char;
        }
    }
    return result;
}

    // O(n²) runtime with O(n²) space complexity; 

// Examples:

// const array1 = [
//   ['a', 3],
//   ['b', 1],
//   ['c', 2]
// ];
// pairsToString(array1);  // => 'aaabcc'

// const array2 = [
//   ['f', 1],
//   ['o', 2],
//   ['d', 1],
//   ['!', 1]
// ];
// console.log(pairsToString(array2));  // => 'food!'

// countAdjacentSums

// Write the function countAdjacentSums(arr, n) that takes an array and number. It should count the number of times that two adjacent numbers in an array add up to n.

function countAdjacentSums(arr, n) {
    let count = 0;
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] + arr[i + 1] === n) {
            count++;
        }
    }
    return count;
}

// O(n) runtime with O(1) space complexity; 

// Examples:

// countAdjacentSums([1, 5, 1], 6) // => 2
// countAdjacentSums([7, 2, 4, 6], 7) // => 0
// countAdjacentSums([6, 7, 11, 2, 5, 10, 3], 13) // => 3

// signFlipCount

// Write a function signFlipCount(nums) that takes in an array of numbers as arguments. The function should return the number of times adjacent numbers in the array switch signs from positive to negative or vice versa. The number 0 is neither positive nor negative.

function signFlipCount(nums) {
    let count = 0;
    for (let i = 0; i < nums.length - 1; i++) {
        if ((nums[i] > 0 && nums[i + 1] < 0) || (nums[i] < 0 && nums[i + 1] > 0) && (nums[i]!==0 && nums[i+1]!==0)) {
            count++;
        }
    }
    return count;
}

// O(n) runtime with O(1) space complexity; 

// Examples:

// signFlipCount([5, 6, 10, 3]); // => 0
// signFlipCount([-12, 0, -3, -5]); // => 0
// signFlipCount([-12, 10, -3, -5]); // => 2
// signFlipCount([1, -2, -3, -4]); // => 1
// signFlipCount([-1, 11.3, -3, 100]); // => 3

// powerSequence

// Write a function powerSequence(base, length) that takes in two numbers, base and length. The function should return an array containing a power sequence with the given length. Assume that the length is at least 1.

// The first number of a power sequence begins with base. The second number of the sequence is the product between the first number and the base. The third number of the sequence is the product between the second number and the base...

function powerSequence(base, length) {
    const sequence = [base];
    for (let i = 1; i < length; i++) {
        sequence.push(sequence[i - 1] * base);
    }
    return sequence;
}

// O(n) runtime with O(n) space complexity; 


// Examples:

// powerSequence(3, 4);  // => [ 3, 9, 27, 81 ]
// powerSequence(2, 6);  // => [ 2, 4, 8, 16, 32, 64 ]
// powerSequence(8, 3);  // => [ 8, 64, 512 ]

// collapseString

// Write a function collapseString(str) that takes in a string as an argument. The function should return the string where 'streaks' of consecutive characters are collapsed to a single character.

// Hint: use the keyword continue

function collapseString(str) {
    let result = str[0];
    for (let i = 1; i < str.length; i++) {
      if (str[i] === str[i - 1]) {
        continue;
      }
      result += str[i];
    }
    return result;
  }

// O(n) runtime with O(n) space complexity; 

// Examples:

// collapseString('apple'); // => 'aple'
// collapseString('AAAaalviiiiin!!!'); // => 'Aalvin!'
// collapseString('hello   app academy'); // => 'helo ap academy'

// oddWordsOut

// Write a function oddWordsOut(sentence) that takes in a sentence string and returns the sentence where words with an odd number of characters are removed.

function oddWordsOut(sentence) {
    let words = sentence.split(" ");
    let newWords = [];
    for (let i = 0; i < words.length; i++) {
      if (words[i].length % 2 === 0) {
        newWords.push(words[i]);
      }
    }
    return newWords.join(" ");
  }

// O(n) runtime with O(n) space complexity;

// Examples:

// oddWordsOut('go to the store and buy milk');  // => 'go to milk'
// oddWordsOut('what is the answer');  // => 'what is answer'

// mindPsAndQs

// Write a function mindPsAndQs(str) that accepts a string of uppercase letters. The function should return the length of the longest consecutive streak of the letters 'P' and 'Q'.

// Hint: Use two variables. One to track the length of the current streak and another to track the length of the longest streak so far. Think of using a strategy similar to maxValue. This can also be solved using a single loop!

// Nested loops not needed!

function mindPsAndQs(str) {
    let currentStreak = 0;
    let longestStreak = 0;
    for (let i = 0; i < str.length; i++) {
      if (str[i] === 'P' || str[i] === 'Q') {
        currentStreak++;
        if (currentStreak > longestStreak) {
          longestStreak = currentStreak;
        }
      } else {
        currentStreak = 0;
      }
    }
    return longestStreak;
  }

  // O(n) runtime with O(n) space complexity;

// Examples:

// mindPsAndQs('BOOTCAMP');  // => 1
// mindPsAndQs('APCDQQPPC');  // => 4
// mindPsAndQs('PQPQ');  // => 4
// mindPsAndQs('PPPXQPPPQ');  // => 5

// commonFactors

// Write a function commonFactors(num1, num2) that returns an array that contains the common factors between both numbers. A factor is a number that divides another number with no remainder.

function commonFactors(num1, num2) {
    let factors = [];
    for (let i = 1; i <= Math.min(num1, num2); i++) {
      if (num1 % i === 0 && num2 % i === 0) {
        factors.push(i);
      }
    }
    return factors;
  }
// O(n) runtime with O(n) space complexity;

// Examples:

// commonFactors(12, 50);  // => [ 1, 2 ]
// commonFactors(6, 24);  // => [ 1, 2, 3, 6 ]
// commonFactors(11, 22);  // => [ 1, 11 ]
// commonFactors(45, 60);  // => [ 1, 3, 5, 15 ]

// commonPrimeFactors

// Write a function commonPrimeFactors(num1, num2) that takes in two numbers as arguments and returns an array of all prime factors that are common between the two numbers. A factor is a number that divides another number without resulting in a remainder.

function commonPrimeFactors(num1, num2) {
    let factors = [];
    for (let i = 2; i <= Math.min(num1, num2); i++) {
      if (isPrime(i) && num1 % i === 0 && num2 % i === 0) {
        factors.push(i);
      }
    }
    return factors;
  }

  // O(n²) runtime with O(n) space complexity;

// Examples:

// console.log(commonPrimeFactors(12, 50));  // => [ 2 ]
// console.log(commonPrimeFactors(6, 24));  // => [ 2, 3 ]
// console.log(commonPrimeFactors(11,22));  // => [ 11 ]
// console.log(commonPrimeFactors(45, 60));  // => [ 3, 5 ]

// splitHalfArray

// Write a function splitHalfArray(array) that takes in an array as an argument and returns two halves of that array split in the middle. If the array has an odd number of elements, then the middle element should be excluded.

function splitHalfArray(array) {
    let middle = Math.floor(array.length / 2);
    if (array.length % 2 === 1) {
      return [array.slice(0, middle), array.slice(middle + 1)];
    } else {
      return [array.slice(0, middle), array.slice(middle)];
    }
  }

    // O(n) runtime with O(n) space complexity;

// Examples:

// splitHalfArray([1, 2, 3, 4, 5]);
//   // => [ [ 1, 2 ], [ 4, 5 ] ]

// splitHalfArray(['a', 'b', 'c', 'd', 'e', 'f']);
//   // => [ [ 'a', 'b', 'c' ], [ 'd', 'e', 'f' ] ]

// threeUniqueVowels

// Write a function threeUniqueVowels(string) that takes in a string and returns true if the string contains at least three different vowels.

// const VOWELS = ['a', 'e', 'i', 'o', 'u'];



function threeUniqueVowels(string) {
  const VOWELS = ['a', 'e', 'i', 'o', 'u'];
  let uniqueVowels = [];
  for (let i = 0; i < string.length; i++) {
    let char = string[i];
    if (VOWELS.indexOf(char) !== -1 && uniqueVowels.indexOf(char) === -1) {
      uniqueVowels.push(char);
    }
  }
  return uniqueVowels.length >= 3;
}
     // O(n) runtime with O(n) space complexity;

// Examples:

// threeUniqueVowels('delicious');  // => true
// threeUniqueVowels('the bootcamp');  // => true
// threeUniqueVowels('bootcamp');  // => false
// threeUniqueVowels('dog');  // => false
// threeUniqueVowels('go home');  // => false

// vowelShift

// Write a function vowelShift(sentence) that takes in a sentence string. The function should return a new sentence, where every vowel is replaced with the next vowel in the alphabet.

// const VOWELS = ['a', 'e', 'i', 'o', 'u'];


function vowelShift(sentence) {
    let vowels = "aeiou";
    let newSentence = "";
    for (let i = 0; i < sentence.length; i++) {
      let char = sentence[i];
      if (vowels.indexOf(char) !== -1) {
          let index = vowels.indexOf(char);
          if(index === 4) index = -1;
          newSentence += vowels[index + 1];
      } else {
        newSentence += char;
      }
    }
    return newSentence;
  }

  // O(n) runtime with O(n) space complexity;

// Examples:

// vowelShift('bootcamp');  // => 'buutcemp'
// vowelShift('hello world');  // => 'hillu wurld'
// vowelShift('on the hunt');  // => 'un thi hant'

// hasSymmetry

// Write a function hasSymmetry(array) that takes in an array. The function should return true if the array has symmetry, false otherwise. For an array to have symmetry, it should be the same forwards and backwards.

// TIP: In JavaScript, it is not possible to compare arrays for equality with ===. In other words, [1, 2, 3] === [1, 2, 3] evaluates to false.

function hasSymmetry(array) {
    for(let i = 0; i < array.length/2; i++){
        if(array[i] !== array[array.length - 1 - i]){
            return false;
        }
    }
    return true;
}

  // O(n) runtime with O(1) space complexity;

// Examples:

// hasSymmetry([1, 2, 3, 3, 2, 1]) // => true
// hasSymmetry([1, 2, 3, 3, 4, 1]) // => false
// hasSymmetry(['cat', 'dog', 'bird', 'dog', 'cat']) // => true
// hasSymmetry(['cat', 'dog', 'bird', 'bird', 'cat']) // => false

// evenSumArray

// Write a function evenSumArray(array) that takes in an array of numbers and returns a new array where each num is replaced with the sum of all even numbers less than or equal to that num.

function evenSumArray(array) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
      let num = array[i];
      let sum = 0;
      for (let j = 2; j <= num; j += 2) {
        sum += j;
      }
      newArray.push(sum);
    }
    return newArray;
  }
  // O(n²) runtime with O(n) space complexity;

// Examples:

// evenSumArray([6, 7, 5]) // => [ 12, 12, 6 ]
// evenSumArray([2, 8, 3, 5]) // => [ 2, 20, 2, 6 ]

// numsToWords

// Write a function numsToWords(numString) that takes in a string representing a number. The function should return a new string where each digit character is replaced with it's "word" representation. Assume the input string only contains numeric characters.

function numsToWords(numString) {
  let words = {
    '0': 'Zero',
    '1': 'One',
    '2': 'Two',
    '3': 'Three',
    '4': 'Four',
    '5': 'Five',
    '6': 'Six',
    '7': 'Seven',
    '8': 'Eight',
    '9': 'Nine'
  };
  let result = "";
  for (let i = 0; i < numString.length; i++) {
    result += words[numString[i]];
  }
  return result;
}

 // O(n) runtime with O(n) space complexity;

// Examples:

// numsToWords('42') // => 'FourTwo'
// numsToWords('123') // => 'OneTwoThree'
// numsToWords('159598') // => 'OneFiveNineFiveNineEight'

// moreDotLessDash

// Write a function moreDotLessDash(str) that takes in a string and returns the true if the string contains more dots ('.') than dashes ('-'), false otherwise.

function moreDotLessDash(str) {
    let dotCount = 0;
    let dashCount = 0;
  
    for (let i = 0; i < str.length; i++) {
      if (str[i] === ".") {
        dotCount++;
      } else if (str[i] === "-") {
        dashCount++;
      }
    }
    return dotCount > dashCount;
  }

   // O(n) runtime with O(1)) space complexity;

// Examples:

// moreDotLessDash('2-D arrays are fun. I think.');  // => true
// moreDotLessDash('.-.-.');  // => true
// moreDotLessDash('.-');  // => false
// moreDotLessDash('..--');  // => false
