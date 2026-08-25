let changeText = () => {
  let x = document.getElementById("react");
  console.log(x); // <h1 id=​"react">​Hello react​</h1>​
  console.log(typeof x); // object

  console.log(x.innerText); // Hello react

  x.style.color = "pink";
  x.style.backgroundColor = "yellow";
  x.style.textAlign = "center";
  x.style.fontSize = "5em";
  x.innerText = "Hello React js";
};

let y = document.getElementsByClassName("text");
console.log(y);

let z = document.getElementsByTagName("h1");
console.log(z);

let a = document.querySelector("h1"); // we can pass anything but it will target only first one
console.log(a);

let b = document.querySelector(".text");
console.log(b);

let c = document.querySelector("#react");
console.log(c);

let d = document.querySelectorAll("h1"); // it will target all elements
console.log(d);

let e = document.querySelectorAll("#react");
console.log(e);

