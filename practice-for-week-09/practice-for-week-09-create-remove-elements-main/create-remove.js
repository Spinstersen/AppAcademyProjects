/****************************** ADD DOG BUTTON ******************************/
const add = document.getElementById("add");
add.addEventListener("click", async () => {
  try {
    const res = await fetch("https://dog.ceo/api/breeds/image/random");
    const data = await res.json();

    const url = data.message; // URL of new dog image

    /*--------------- Get breed (Hint: Parse from URL) ---------------- */
    // Your code here
    const urlParts = url.split("/");
    const breed = urlParts[4];

    /*------------ Create new dog card with the url above ------------- */
    /* (use the HTML structure for the current dog image in the index.html
            file to create a new image with the url) */
    // Your code here
    const image = document.createElement("img");
    image.setAttribute("src", url);
    const figure = document.createElement("figure");
    const figCaption = document.createElement("figcaption");
    figCaption.innerText = breed;
    figure.appendChild(image);
    figure.appendChild(figCaption);
    /* Add the new dog card as a child to the ul in the .gallery element */

    //Alternative way
    //const li = document.createElement("li");
    // li.innerHTML = `
    // <figure>
    // <img src=${url} />
    // <figcaption>${breed}</figcaption>
    // </figure>
    // `
    const list = document.querySelector("li");
    list.appendChild(figure);
  } catch (e) {
    console.log(e.message);
    console.log("Couldn't fetch dog :(");
  }
});

/************************** REMOVE FIRST DOG BUTTON **************************/
const removeFirst = document.getElementById("remove-first");
removeFirst.addEventListener("click", () => {
  /*-------------------- Select the first dog card --------------------- */
  // Your code here
  const dogsList = document.querySelector("ul");
  const firstDog = dogsList.firstChild;

  /*-------------------- Remove the first dog card --------------------- */
  // Your code here
  firstDog.remove();
});

/************************** REMOVE LAST DOG BUTTON ***************************/
const removeLast = document.getElementById("remove-last");
removeLast.addEventListener("click", () => {
  /*-------------------- Select the last dog card ----------------------- */
  const dogsList = document.querySelector("ul");
  const lastDog = dogsList.lastChild;

  /*-------------------- Remove the last dog card ----------------------- */
  // Your code here
  lastDog.remove();
});
