export function changeTitle() {
  // Change the title of the page to "(Your name)'s Portfolio"
  // Your code here
  document.title = `Spin's Portfolio`;
}

export function changeHeader() {
  // Change the name in the h1 of the page to your name
  // Your code here
  document.body.children[0].children[0].innerText = "I am Spin";
}
export function changeAboutMe() {
  /* Update the first paragraph in the About Me section with a small
     passage about yourself */
  // Your code here
  document.body.children[1].children[1].innerText =
    "I’m currently doing App academy to level up my skills as a fullstack developer.";
}
