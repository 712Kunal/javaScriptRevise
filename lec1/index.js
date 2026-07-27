console.log("Hello Javascript !!");

let x = document.querySelector("button");
let y = document.querySelector("h1");

x.addEventListener("click", function () {
  y.innerHTML = "Hello World !!";
});
