/*
Make fetch requests in the browser for each of the following phases.
Paste your code for fetch requests here once you finish each phase.
*/

/* ============================== Phase 1 ============================== */

// Your code here
fetch("/products", {
  method: "POST",
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
  },
  body: "name=Caribbean+Delight+Coffee&description=Made+by+Manatee+Coffee&price=11%2E99&categories=grocery",
});

/* ============================== Phase 2 ============================== */

// Your code here

fetch("/products", {
  method: "POST",
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
  },
  body: "name=Caribbean+Delight+Coffee&description=Made+by+Manatee+Coffee&price=11%2E99&categories=grocery",
}).then((response) => {
  console.log("Status Code", response.status);
  console.log(response.ok);
  console.log("Headers", response.headers.get("Content-Type"));
});

/* ============================== Phase 3 ============================== */

// Your code here

fetch("/products", {
  method: "POST",
  body: new URLSearchParams({
    name: "Caribbean Delight Coffee",
    description: "Made by Manatee Coffee",
    price: 11.99,
    categories: "grocery",
  }),
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
  },
}).then((response) => {
  console.log("Status Code", response.status);
  console.log(response.ok);
  console.log("Headers", response.headers.get("Content-Type"));
});
