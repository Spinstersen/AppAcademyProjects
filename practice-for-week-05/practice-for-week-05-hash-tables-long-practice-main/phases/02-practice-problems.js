function anagrams(str1, str2) {
  let referenceObj = {};
  const isEqual = s.length === t.length;
    if (!isEqual) return false;

  for (let i = 0 ; i < str1.length; i++){
    if (str1[i]){
      referenceObj[str1[i]]=true;
    } 
  }
  for (let i = 0 ; i < str2.length ; i++){
    if (!referenceObj[str2[i]]){
      return false;
    }
  }
  return true;

}
// console.log(anagrams('elvis', 'lives'));// => true
// console.log(anagrams('coding', 'rocks'));// => false

function commonElements(arr1, arr2) {

  let referenceObj = {};
  let commonEl = [];

  for (let i = 0 ; i < arr1.length; i++){
      referenceObj[arr1[i]]=true;
  }

  for (let i = 0 ; i < arr2.length ; i++){

    if (referenceObj[arr2[i]] && (commonEl.indexOf(arr2[i]) === -1)){
      commonEl.push(arr2[i]);
    }

  }

  return commonEl;
}
// console.log(commonElements([1,2,3], [3,4,5]));  // => [3]
// console.log(commonElements([2,4,6], [5,4,3,2,1]));// => [2,4]

function duplicate(arr) {
  let referenceObj = {};
  for (let i = 0 ; i < arr.length; i++){
    if (referenceObj[arr[i]]){
      return arr[i];
    } 
    referenceObj[arr[i]] = true;
  }
  
  
  return false;
}
// console.log(duplicate([2,1]));      // => false
// console.log(duplicate([7,2,4,9,5,4,8])); // => 4

function twoSum(nums, target) {
  let referenceObj = {};
  nums.forEach( (element,index) => referenceObj[element] = index); // indexing the elements into a hashmap without duplicates with their index
  for (let i = 0 ; i < nums.length ; i++){
    let difference = target - nums[i]; // checking if the number that will make up to the total indeed exists and that it's different than the index so you won't use the same element twice
    if ( referenceObj[difference] && referenceObj[difference] !== i )
    return true;
  }
  return false;
}
// console.log(twoSum([2, 7, 11, 15], 22));// => true
// console.log(twoSum([3, 4, 5], 6)); // => false

function wordPattern(pattern, strings) {
  let alphabet = 'ABCD';
  let hashmap = {};
  let wordPatt = [];
  for ( let i = 0 ; i < strings.length; i++){
    if (!hashmap[strings[i]]){

      hashmap[strings[i]] = alphabet[i];
      wordPatt.push(hashmap[strings[i]]);
    }
     else if (hashmap[strings[i]]){
      let letter = hashmap[strings[i]];
      wordPatt.push(letter);
    }
  }
  if((wordPatt.join("")) === pattern){
    return true;
  }
  return false;
}

// console.log(wordPattern("ABBA", ['dog', 'cat', 'cat', 'dog']));// => true
// console.log(wordPattern("ABBA", ['dog', 'dog', 'dog', 'dog']));// => false
// console.log(wordPattern("AAAA", ['dog', 'dog', 'dog', 'dog']));// => true
// console.log(wordPattern("ABCD", ['dog', 'cat', 'dog', 'cat']));// => false

function kth(string,k){
  let referenceObj = {};
  for (let i = 0 ; i < string.length ; i++){
    if (!referenceObj[string[i]]){
      referenceObj[string[i]] = 1;
    } else {
      referenceObj[string[i]] += 1;
    }
  }
  let sorted = Object.keys(referenceObj).sort((a,b) => referenceObj[b] - referenceObj[a]);
  return sorted[k-1];
}

// console.log(kth('aaabbc', 1));//  => 'a'
// console.log(kth('aaabbc', 2));//  => 'b'
// console.log(kth('aaabbc', 3));//  => 'c'

function newAlphabet(string,characters){
  let referenceObj = {};
  let orderOfIndex = 0; 
  characters.split("").forEach( (element,index) => referenceObj[element] = index);
  
  for (let i = 0 ; i < string.length ; i++){
    let index = referenceObj[string[i]];
    if (orderOfIndex > index){
      return false;
    }
    else {
      orderOfIndex = referenceObj[string[i]];
    }
  }
  return true;
}



// console.log(newAlphabet('dino', 'abcdefghijklmnopqrstuvwxyz'));         // => true
// console.log(newAlphabet('leetcode', 'abcdefghijklmnopqrstuvwxyz'));       // => false
// console.log(newAlphabet('leetcod', 'labefghijkmnpqrstucvowxdyz'));        // => true

function longestPalindrome(string){
  let referenceObj = {};
  let palindrome = [];

  for (let i = 0 ; i < string.length ; i++){  // getting the number of characters
    if (!referenceObj[string[i]]){
      referenceObj[string[i]] = 1;
    } else if (referenceObj[string[i]]){
      referenceObj[string[i]]++;
    }
  }

  let keys = Object.keys(referenceObj); // setting the odd character in the middle, can only use one, break after finding it 
  for (let i = 0 ; i < keys.length ; i++){
    if (referenceObj[keys[i]] % 2 === 1){
      palindrome.push(keys[i]);
      if (referenceObj[keys[i]]===1){
      break;
      } else {
        referenceObj[keys[i]]--;
      }
    }
  }
  for (let i = 0 ; i < keys.length ; i++){// setting a character each side until there's none to set for each character length that is not odd
    if (referenceObj[keys[i]] % 2 === 0){
      while(referenceObj[keys[i]] > 0){
      palindrome.push(keys[i]);
      palindrome.unshift(keys[i]);
      referenceObj[keys[i]] -=2;
      }
    }
  }
  return palindrome.join("");// returning the string
}

// console.log(longestPalindrome("abccccdd"));      // => 3, where the longest substring is "abc"

function longestSubstr(string){
  let dictionary = {};
  let word = '';
  let words = [];
  
  for (let i = 0 ; i < string.length ; i++){
  
    if (!dictionary[string[i]]){ 
    word += string[i];
    dictionary[string[i]] = true;
  } else {

    let newWord = word;
    word = ''
    words.push(newWord);
  
  }
  }
  let longestString = words[0];
  for (let i = 0 ; i < words.length ; i++){
    if (words[i].length > longestString.length){
      longestString = words[i];
    }
  }
  return longestString;
  
}

// console.log(longestSubstr("abcabcbb"));      // => 3, where the longest substring is "abc"
// console.log(longestSubstr("bbbbb"));         // => 1, where the longest substring is "b"

function maxSubarr(array){
  // let maxLength = 0;
  // let start = 0;
  // let min = array[0];
  // let max = array[0];
  // for (let end = 0; end < array.length; end++) {
  //   min = Math.min(min, array[end]);
  //   max = Math.max(max, array[end]);
  //   if (max - min > 1) {
  //     start = end;
  //     min = array[end];
  //     max = array[end];
  //   }
  //   maxLength = Math.max(maxLength, end - start + 1);
  // }
  // return maxLength;
  // didn't work :/
}

// console.log(maxSubarr([1,3,2,2,5,2,3,7]));  // => 5 because the longest subarray is [3,2,2,2,3]
// console.log(maxSubarr([1,1,1,1,3]));// => 4 because the longest subarray is [1,1,1,1]



module.exports = [anagrams, commonElements, duplicate, twoSum, wordPattern];
