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

let mini = document.getElementById("minutes");
let sec = document.getElementById("seconds");

let c;
let secCnt = 0;
let minCnt = 0;

let startCntr = () => {
  c = setInterval(() => {
    secCnt++;
    if (secCnt == 60) {
      minCnt++;
      secCnt = 0;
      mini.innerText = minCnt;
    }
    sec.innerText = secCnt;
  }, 1000);
};

let stopCntr = () => {
  clearInterval(c);
};

function first() {
  second();
  console.log("First function executed");
}

function second() {
  third();
  console.log("Second function executed");
}

function third() {
  console.log("Third function executed");
}

first();

console.log("Start");
setTimeout(() => {
  console.log("Hello");
}, 1000);
setTimeout(() => {
  console.log("World");
}, 0);

function func() {
  console.log("Function called");
}

func();
console.log("end");

// BrowserApi will store all the asynchronous operations(api calls,setTimeout,setInterval,fetch)
// setTimeout and setInterval are stored in the macro task queue
// api calls and fetch are stored in the micro task queue
// synchronous operations will stored in the callstack
// Event loop checks weather the callstack is empty or not, if empty it goes to the queues
// Event loop always gives first preference to the micro task queue and then macro task queue
