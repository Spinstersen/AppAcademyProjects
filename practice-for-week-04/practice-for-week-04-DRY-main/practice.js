function multiplyBiggerNumByTwo(num1, num2) {
 return compare(num1,num2)*2;
}
function compare(num1,num2){
  if (num1 > num2){
    return num1;
  } else {
    return num2;
  }
}
function divideBiggerNumByThree(num1, num2) {
  return compare(num1,num2)/3;
}

function eatMostTacos(sum1, sum2) {
  let mostTacos = compare(sum1,sum2);
    return `I ate ${mostTacos} tacos.`;
  
}

function adoptSmallerDog(weight1, weight2) {
  let heavier = Math.abs(compare(-weight1,-weight2));
    return `I adopted a dog that weighs ${heavier} pounds.`;
}

/**************************************************************************/
/* DO NOT CHANGE THE CODE BELOW */
module.exports = {
  multiplyBiggerNumByTwo,
  divideBiggerNumByThree,
  eatMostTacos,
  adoptSmallerDog
};
