const select = () => {
  /* Write queries for each of the following */

  /* Section 1 */
  // 1. Get all seeded fruit elements
  // Your code here
  console.log(document.querySelectorAll(".seed"));

  // 2. Get all seedless fruit elements
  // Your code here
  console.log(document.querySelectorAll(".seedless"));
  // 3. Get first seedless fruit element
  // Your code here
  console.log(document.querySelector(".seedless"));

  /* Section 2 */
  // 4. Get inner span with text "you"
  // Your code here
  console.log(document.querySelector("span"));

  // 5. Get all children of element "wrapper"
  // Your code here
  console.log(document.getElementsByClassName("wrapper"));

  // 6. Get all odd number list items in the list
  // Your code here
  console.log(document.getElementsByClassName("odd"));

  // 7. Get all even number list items in the list
  // Your code here
  const list = document.getElementsByTagName("ol");
  let listed = list[0].children;
  let newList = [];
  for (let i = 1; i < listed.length; i = i + 2) {
    newList.push(listed[i]);
  }
  console.log(newList);

  /* Section 3 */
  // 8. Get all tech companies without a class name
  // Your code here
  const links = document.querySelectorAll("a");
  let newLinkText = [];
  const innerTxt = links.forEach((link) => newLinkText.push(link.innerText));
  console.log(newLinkText);
  // 9. Get "Amazon" list element
  // Your code here
  console.log(document.getElementsByClassName("shopping"));

  // 10. Get all unicorn list elements (not the image element)
  // Your code here
  const unicornListElements = document.querySelectorAll(
    "section#three > ul > li"
  );
  console.log(unicornListElements);
};

window.onload = select;
