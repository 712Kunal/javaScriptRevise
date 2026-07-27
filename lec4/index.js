function demo() {
  console.log("Helow javascript");
}

// FUNCTION DECLARATION ->
function demo1(a, b) {
  //   console.log(a + b); // 300
  console.log(a, b); //100 200
  console.log(a); // no any error
  console.log(a + b);
}

demo1(100, 200);
demo1(10);

// DEFAULT PARAMETER FUNCTION ->
function totalSalary(basic = 0, bonus = 0) {
  console.log(basic + bonus);
}

totalSalary(10000, 5000);
totalSalary(10000);
totalSalary();

// FUNCTION EXPRESSION ->
let c = function demo2(a, b) {
  console.log(a + b);
  console.log("From function expression");
};

c(100, 200);

// ANONYMOUS FUNCTION -> It is mostly used as a callback functions
let a = function (a, b) {
  console.log(a + b);
  console.log("From anonymous function");
};
a(10, 20);

// IMMEDIATE INVOKE FUNCTION
(function demo() {
  console.log("From Immediate invoke function");
})();

// alert("Alert method");

let e = function (num) {
  num = Number(num);
  if (Math.floor(num / 2) * 2 === num) {
    console.log(`Is a even number`);
  } else {
    alert(`its an odd number`);
  }
};

let f = prompt("Enter the number");
e(f);

let i = function (user, pass) {
  if (user === "scott" && pass === "tiger") {
    console.log(`Login successfull`);
  } else {
    alert(`Invalid credentials`);
  }
};

let g = prompt("Enter the username: ");
let h = prompt("Enter the password: ");
i(g, h);

function display(str) {
  return str;
}

console.log(display("Peter Parker"));
let abc = display("Peter Parker");
console.log(abc);

function add(a, b) {
  return a + b;
}

console.log(add(10, 20));

// ARROW FUNCTION
let maddjsk = () => {
  console.log(`wooooooohhhhhhh`);
};

maddjsk(1, 3);

let square = (num) => {
  return Math.pow(num, 2);
};

console.log(square(2));

let x = (a) => Math.pow(a, 2);

console.log(x(10));

function demoArg() {
  console.log(arguments);
  console.log(arguments[0]);
}

demoArg(1, 2, 4, 34, 5, 5, 6, 5, 56, 6, 5, 4, 4);

// const demoArgs = () => {
//   console.log(arguments); // Error - arguments not defined
// };

// demoArgs(1, 2, 3, 2, 4, 3, 2);

let demoArgss = (...a) => {
  console.log(a);
};

demoArgss(1, 2, 3, 2, 2, 3, 2, 2, 3, 2, 3, 2);

// HIGHER ORDER FUNCTION AND CALL BACK FUNCTION

// function which accepts another function is a HIGHER ORDER FUNCTION eg - aayush
function aayush(a, b, c) {
  console.log(a);
  console.log(b);
  c();
}

// a function which act as parameter is called as CALLBACK FUNCTION
aayush(10, 20, function () {
  console.log(`Funtion called`);
});

aayush(4, 5, () => {
  console.log();
});

let aayushi = (a, c) => {
  c(a);
};

aayushi("aayush", (name) => {
  console.log(name);
});

const sumOfTwoNumber = (a, b, sum) => {
  sum(a, b);
};

sumOfTwoNumber(10, 5, (a, b) => {
  console.log(a + b);
});

const isEven = (a, even) => {
  if (a % 2 === 0) {
    console.log(even(true));
  } else {
    console.log(even(false));
  }
};

isEven(10, (a) => {
  return a;
});

// NESTED FUNCTION -->
let parent = () => {
  console.log(`Parent Function`);

  let child = () => {
    console.log(`Child Function`);
  };

  child();
};

parent();
