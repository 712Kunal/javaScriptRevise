// GLOBAL SCOPE
var a = 100; // global scope
let b = 200;
const c = 300;

console.log(a, b, c);

let demo = () => {
  // FUNCTION SCOPE
  var x = 10; // function variable
  let y = 20;
  const z = 30;

  console.log(a, b, c);
  console.log(x, y, z);
};

demo();

if (true) {
  // BLOCK SCOPE
  var d = 10;
  let e = 20;
  const f = 30;

  console.log(d, e, f);
}

console.log(d); // 10
// console.log(e); let is not accessed outside the block scope
// console.log(f); const is not accessed outside the block scope

let parent = () => {
  let g = 10000;
  // LEXICAL SCOPE
  let child = () => {
    console.log(g);
  };

  child();
};

parent();
