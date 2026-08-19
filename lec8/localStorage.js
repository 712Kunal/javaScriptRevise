let a = localStorage.getItem("data");
console.log(a); // 100

let animal = localStorage.getItem("animal");
console.log(animal); // Tiger

localStorage.setItem("animal", "Lion");
console.log(localStorage.getItem("animal")); // Lion (updated)

localStorage.removeItem("animal"); // remove the item
console.log(localStorage.getItem("animal")); // null

localStorage.clear(); // clear all the items

let user = {
  name: "John",
  place: "New York",
  mobile: "1234567890",
};

localStorage.setItem("user", JSON.stringify(user));

localStorage.setItem("isLoggedIn", true);
localStorage.setItem("users", ["John", "Jane", "Jack"]);
let arr = localStorage.getItem("users");
console.log(arr); // ["John","Jane","Jack"]

let userData = JSON.parse(localStorage.getItem("user"));
console.log(userData); // { name: 'John', place: 'New York', mobile: '1234567890' }
