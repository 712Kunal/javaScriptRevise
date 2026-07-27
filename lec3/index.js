let a = 10;
let b = 10;

let c = a + b;
let d = a - b;
let e = a * b;

console.log(`Addition: ${c}`);
console.log(`Subtraction: ${d}`);
console.log(`Multiplicatio: ${e}`);

let f = "10";
console.log(`Is a === f ? ${a === f}`); // compares both value + data type

// Functions
function func(i) {
  if (i === 10) {
    return;
  }

  console.log("Hello aayush");
  func(i + 1);
}

func(0);

// conditional statements
function isEven(i) {
  if (i % 2 === 0) {
    return true;
  }

  return false;
}

console.log(isEven(2));

function num(i) {
  if (i > 0) {
    console.log(`positive number`);
  } else if (x < 0) {
    console.log(`negetive number`);
  } else {
    console.log(`its a zero`);
  }
}

num(2);

let x = prompt("Enter a name");
console.log(x);
console.log(typeof x);

let y = Number(x);
console.log(typeof y);

isEven(y);
