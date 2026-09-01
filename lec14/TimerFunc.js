// setTimeout(() => {
//   console.log("Hello world");
// }, 2000);

// let x = setTimeout(() => {
//   console.log("hello");
// }, 2000);

// clearTimeout(x);

// setInterval(() => {
//   console.log("Function called");
// }, 2000);

// let a = 0;
// let y = setInterval(() => {
//   a++;
//   console.log(a);
//   if (a == 5) {
//     clearInterval(y);
//   }
// }, 1000);

let cntr = document.getElementById("cntr");
let cnt = 0;
let b;
let start = () => {
  b = setInterval(() => {
    cntr.innerText = cnt;
    cnt++;
  }, 1000);
};

let stop = () => {
  clearInterval(b);
};
