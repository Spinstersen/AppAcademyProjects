/***********************************************************************
Write a recursive function `iceCreamShop(flavors, favorite)` that takes in an
array of ice cream flavors available at the ice cream shop, as well as the
user's favorite ice cream flavor. Recursively find out whether or not the shop
offers their favorite flavor.

Examples:
iceCreamShop(['vanilla', 'strawberry'], 'blue moon'); // false
iceCreamShop(['pistachio', 'green tea', 'chocolate', 'mint chip'], 'green tea'); // true
iceCreamShop(['cookies n cream', 'blue moon', 'superman', 'honey lavender', 'sea salt caramel'], 'pistachio'); // false
iceCreamShop(['moose tracks'], 'moose tracks'); // true
iceCreamShop([], 'honey lavender'); // false
***********************************************************************/
const iceCreamShop = function(flavors,favorite){
  if (flavors.length === 0){
    return false;
  }
  else if (flavors[0] === favorite){
    return true;
  }
  else {
    return iceCreamShop(flavors.slice(1),favorite);
  }
}

// your code here

tc1=iceCreamShop(['vanilla', 'strawberry'], 'blue moon'); // false
tc2=iceCreamShop(['pistachio', 'green tea', 'chocolate', 'mint chip'], 'green tea'); // true
tc3=iceCreamShop(['cookies n cream', 'blue moon', 'superman', 'honey lavender', 'sea salt caramel'], 'pistachio'); // false
tc4=iceCreamShop(['moose tracks'], 'moose tracks'); // true
tc5=iceCreamShop([], 'honey lavender'); // false
console.log(tc1,tc2,tc3,tc4,tc5);
/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = iceCreamShop;
} catch (e) {
  module.exports = null;
}
