window.onload = () => {
  // creating the big title --------------------------//
  const header = document.createElement("h1");
  header.textContent = "Spinstersen stallon";
  header.setAttribute("id", "bigTitle");
  document.body.appendChild(header);
  // creating the unordered list --------------------------//
  const list = document.createElement("ul");
  list.setAttribute("class", "list");
  document.body.appendChild(list);
  function makeList(array) {
    for (let i = 0; i < array.length; i++) {
      let newElement = document.createElement("li");
      newElement.textContent = array[i];
      newElement.setAttribute(`class`, "listItem" + (i + 1));
      list.appendChild(newElement);
    }
  }
  makeList([
    "Does Painting",
    "Loves Technology",
    "Enjoys Creative endeavors",
    "Cat person",
  ]);

  const clockContainer = document.createElement("div");
  document.body.appendChild(clockContainer);
  const clock = document.createElement("h2");
  clockContainer.appendChild(clock);
  clock.setAttribute("class", "clock");
  const tick = () => {
    let date = new Date();
    clock.innerText = `${date.getFullYear()}/${date.getMonth()}/${date.getDate()} and it's ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
  };
  window.setInterval(tick, 1000);
};
