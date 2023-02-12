function firstStep(input) {
  // Your code here
  return input.split("&");
}

function secondStep(input) {
  // Your code here
  return input.map((element) => element.split("="));
}

function thirdStep(input) {
  // Your code here
  return input.map((element) => element.map((el) => el.replace(/\+/g, " ")));
}

function fourthStep(input) {
  // Your code here
  return input.map((element) => element.map((el) => decodeURIComponent(el)));
}

function fifthStep(input) {
  // Your code here
  let object = {};
  input.forEach((element) => (object[element[0]] = element[1]));
  return object;
}

function parseBody(str) {
  // Your code here
  return fifthStep(fourthStep(thirdStep(secondStep(firstStep(str)))));
}

/******************************************************************************/
/******************* DO NOT CHANGE THE CODE BELOW THIS LINE *******************/

module.exports = {
  firstStep,
  secondStep,
  thirdStep,
  fourthStep,
  fifthStep,
  parseBody,
};
