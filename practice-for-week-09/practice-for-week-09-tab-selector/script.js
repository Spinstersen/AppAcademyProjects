window.onload = () => {
  let buttons = document.getElementsByTagName("button");
  buttons.foreach(element, () => {
    element.addEventListener("click", () => {
      let div = document.getElementsByClassName("shown");
      div.className.remove("unhighlighted");
      div.className.add("highlighted");
    });
  });
};
