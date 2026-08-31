let box = document.getElementById("box");
console.log(box);
// box.innerHTML = `<h1>Hello Webtech</h1>`;

let y = document.createElement("h1");
console.log(y);
y.innerText = "Hello Webtech";
console.log(y);
// box.appendChild(y);

let z = document.createElement("p");
z.innerText = "Hello aayush";
// box.appendChild(z);

box.append(y, z);
