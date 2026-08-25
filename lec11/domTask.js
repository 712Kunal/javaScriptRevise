let changeImg = () => {
  let img = document.getElementById("myimg");
  console.log(img);

  img.src = "https://images.thedirect.com/media/photos/gwen2.png";
  //   img.style.borderRadius = "50%";
};

let users = [];

let handleSubmit = () => {
  let username = document.getElementById("username");
  let userphone = document.getElementById("userphone");

  console.log(username, userphone);

  // console.log(username.value);
  // console.log(userphone.value);

  let obj = {
    username: username.value,
    userphone: userphone.value,
  };

  console.log(obj);

  users.push(obj);

  username.value = ""; // clear the input
  userphone.value = ""; // clear the input
  console.log(users);
};

let counter = document.getElementById("cnt");
let dec = document.getElementById("decre");

let add = () => {
  counter.innerText = Number(counter.innerText) + 1;
};

let sub = () => {
  if (counter.innerText > 0) {
    counter.innerText = Number(counter.innerText) - 1;
  } else {
    dec.innerText = "You can't decrement";
  }
};

let reset = () => {
  counter.innerText = 0;
};

let btn = document.getElementById("switch");
let box = document.getElementById("box");

let changeColor = () => {
  if (btn.innerText == "White") {
    btn.innerText = "Black";
    box.style.backgroundColor = "white";
    cnt.style.color = "black";
    dec.style.color = "black";
  } else {
    btn.innerText = "White";
    box.style.backgroundColor = "black";
    cnt.style.color = "white";
    dec.style.color = "white";
  }
};

