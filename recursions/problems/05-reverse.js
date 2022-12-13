/***********************************************************************
Write a recursive function reverse(string) that takes in a string and returns
it reversed.

Examples:

reverse("house"); // "esuoh"
reverse("dog"); // "god"
reverse("atom"); // "mota"
reverse("q"); // "q"
reverse("id"); // "di"
reverse(""); // ""
***********************************************************************/
const reverse = string => {
  if (string === ''){
    return '';
  }
  else {
    return string[string.length-1]+reverse(string.slice(0,-1));
  }
}

tc1 = reverse("house"); // "esuoh"
tc2 = reverse("good"); // "doog"
tc3 = reverse("atom"); // "mota"
tc4 = reverse("q"); // "q"
tc5 = reverse("id"); // "di"
tc6 = reverse(""); // ""
console.log(tc1,tc2,tc3,tc4,tc5,tc6);
/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = reverse;
} catch (e) {
  module.exports = null;
}
