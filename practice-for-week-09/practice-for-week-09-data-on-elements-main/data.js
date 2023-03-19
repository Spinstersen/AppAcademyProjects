// Your code here
window.addEventListener("DOMContentLoaded", (event) => {
  const button = document.getElementById("add");
  button.addEventListener(
    "click",
    (adding = (event) => {
      const type = document.getElementById("type").value;
      const text = document.getElementById("name").value;
      if (type && text) {
        const ul = document.querySelector("ul");
        const li = document.createElement("li");
        li.setAttribute("data-type", type);
        li.textContent = text;
        ul.appendChild(li);
        event.preventDefault();
      } else {
        event.preventDefault();
        alert("Enter the type of grocery and the name");
      }
    })
  );
});
