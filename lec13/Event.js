let btn = document.getElementById("btn");
btn.addEventListener("click", () => {
  console.log("btn clicked");
});

let box = document.getElementById("box");
box.addEventListener("click", (event) => {
  console.log("box clicked");
  console.log(event.target);
  event.target.style.backgroundColor = "red";
});

box.addEventListener("mouseover", (event) => {
  console.log("box clicked");
  console.log(event.target);
  event.target.style.backgroundColor = "red";
});

let input = document.getElementById("username");
let submitBtn = document.getElementById("submit");
submitBtn.addEventListener("click", (event) => {
  console.log(input.value);
});

// input.addEventListener("keydown", (event) => {
//   console.log(event.target.value);
// });

// input.addEventListener("keyup", (event) => {
//   console.log(event.target.value);
// });

input.addEventListener("change", (event) => {
  console.log(event.target.value);
});
