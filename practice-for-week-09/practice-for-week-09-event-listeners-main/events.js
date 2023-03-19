// Your code here
window.addEventListener("DOMContentLoaded", (event) => {
  console.log("The Dom is loaded");
  //-------------changing background of the input to red -----//
  const redInput = document.getElementById("red-input");
  redInput.addEventListener(
    "input",
    (makeRed = (event) => {
      if (event.target.value === "red") {
        redInput.style.backgroundColor = "red";
      } else {
        redInput.style.backgroundColor = "white";
      }
    })
  );
  //---------------adding list items when the button is pressed--//
  const list = document.querySelector("ul");
  const theButton = document.getElementById("add-item");
  const input = document.getElementById("list-add");
  theButton.addEventListener(
    "click",
    (addListItem = addItem =
      (event) => {
        const li = document.createElement("li");
        li.innerText = input.value;
        list.appendChild(li);
      })
  );
  //---------------Change background color of section to reflect color selected--//
  const colorSelector = document.getElementById("color-select");
  const colorContainer = document.getElementById("section-3");
  colorSelector.addEventListener(
    "input",
    (changeColor = (event) => {
      colorContainer.style.backgroundColor = colorSelector.value;
    })
  );
  const remove = document.getElementById("remove-listeners");

  remove.addEventListener(
    "click",
    (removeEvents = (event) => {
      redInput.removeEventListener("input", makeRed);
      theButton.removeEventListener("click", addItem);
      colorSelector.removeEventListener("change", changeColor);
    })
  );
});
