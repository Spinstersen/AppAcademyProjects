// 1.
function sum(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}
try {
let res = sum(null); 
} catch (error) {
  console.error(error.name +' : ' + error.message);
}

// 2.
// tests
function sayName(name) {
  if (typeof name !== 'string') {
    throw new Error("The word you input is not a string !");
  } else 
  console.log(name);
}

try {
  sayName("Alex");
  sayName(1);
} catch (error) {
  console.error(error.name +' : ' + error.message);
}

// Your code here

// 3.

function greet(greeting) {
  if (!greeting) {
    throw new Error("There was no greeting given.");
  }

  console.log(greeting);
}

try {
greeting(false)
} catch {
  console.log("hello world");
}
