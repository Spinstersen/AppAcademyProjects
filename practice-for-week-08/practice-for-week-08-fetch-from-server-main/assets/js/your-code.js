// const url = "/endpoint";
// const headers = { "Content-Type": "Request body's Content-Type" };
// // Use the URLSearchParams API to format your body as shown below
// const body = new URLSearchParams({
//   key: "value",
// });

// const options = {
//   method: "GET|POST|PUT|DELETE",
//   headers: headers,
//   body: body,
// };

export function getAllDogs() {
  // Your code here
  return fetch("/dogs");
}

export function getDogNumberTwo() {
  // Your code here
  return fetch("/dogs/2");
}

export function postNewDog() {
  // Your code here
  const body = new URLSearchParams({
    name: "jack",
    age: 3,
  });
  return fetch("/dogs", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: body,
  });
}

export function postNewDogV2(name, age) {
  // Your code here
  const body = new URLSearchParams({
    name: name,
    age: age,
  });
  return fetch("/dogs", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: body,
  });
}

export function deleteDog(id) {
  // Your code here
  return fetch(`/dogs/${id}/delete`, {
    method: "POST",
    headers: { AUTH: "ckyut5wau0000jyv5bsrud90y" },
    body: "",
  });
}
