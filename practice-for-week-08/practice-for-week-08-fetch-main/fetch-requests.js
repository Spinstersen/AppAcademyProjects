/*
Make fetch requests in the browser for each of the following tasks.
Paste your code for fetch requests here once you finish each task.
*/

/* =============== 1. Print the status code of the response =============== */

// Your code here

fetch("/", { method: "GET" }).then((response) => {
  console.log(response.status);
});

/* ====== 2. Print true if the status of the response was successful ====== */

// Your code here

fetch("/", { method: "GET" }).then((response) => {
  console.log(response.ok);
});

/* =================== 3. Print the Content-Type Header =================== */

// Your code here

fetch("/", { method: "GET" }).then((response) => {
  console.log(response.headers.get("Content-Type"));
});

/* ============== 4. Print the body of the response as text =============== */

// Your code here

fetch("/", { method: "GET" }).then((response) => {
  response.text().then((text) => console.log("content of the text", text));
});
