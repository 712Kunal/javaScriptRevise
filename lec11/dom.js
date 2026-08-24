let changeText = () => {
  let x = document.getElementById("react");
  console.log(x); // <h1 id=​"react">​Hello react​</h1>​
  console.log(typeof x); // object

  console.log(x.innerText); // Hello react

  x.style.color = "pink";
  x.style.backgroundColor = "yellow";
  x.style.textAlign = "center";
  x.style.fontSize = "5em";
};
