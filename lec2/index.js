console.log("DIFFERENCE BETWEEN VAR, LET AND CONST --------->");

console.log("VAR KEYWORD --------------------------->");
// DECLRATION
var a;
console.log("a: ", a); // undefined

// INITIALIZATION
a = 100;
console.log("a: ", a); // 100

// DECLARATION + INITIALIZATION
var b = 200;
console.log("b: ", b); //200

// UPDATION
b = 500;
console.log("b: ", b); // 500

// REDECLARE + REINITIALIZATION
var b = 1000;
console.log("b: ", b); //1000

console.log("\nLET KEYWORD --------------------------->");
let c;
console.log("c: ", c); // undefied

//INITIALIZATION
c = 100;
console.log("c: ", c);

//DECLERATION + INITIALIZATION
let d = 1000;
console.log("d: ", d);

//UPDATION
d = 10000;
console.log("d: ", d);

//REDECLARATION + REINITILIZATION  x
// let d = 900;
// console.log("d: ",d);

console.log("\nCONST KEYWORD --------------------------->");
// DECLARATION
// const e;
// console.log("e: ",e); // declaration is not possible

// INITIALIZATION
// e = 100;
// console.log("e: ", e); // initialization not possible

//DECLERATION + INITIALIZATION
const e = 1000;
console.log("e: ", e); // 1000

// UPDATION
// e = 2000;
// console.log("e: ", e); // updation is not possible

// REDECLARATION + REINITILIZATION
// const e = 100000;
// console.log("e: ", e); // redeclation + reinitialization not possible

console.log("\nTYPEOF DATA IN THE CONTAINER -------------->");
let f = 100.24;
console.log(typeof f); // number

let g = true;
console.log(typeof g); //boolean

let h = 12;
console.log(typeof h); // number

let i = "kunal";
console.log(typeof i); // string

let j = "kunal";
console.log(typeof j); // string

let k = `kunal`;
console.log(typeof k); // string

let l = null;
console.log(l); // null
console.log(typeof l); // object

let m;
console.log(m); // undefined
console.log(typeof m);

let n = 1234567890123456789123456789012345678901234567;
console.log(n); // 1.2345678901234568e+45
console.log(typeof n);

n = 1234567890123456789123456789012345678901234567n;
console.log(n); // 1234567890123456789123456789012345678901234567n
console.log(typeof n); // bigint

console.log(Number.MAX_SAFE_INTEGER);

let o = Symbol("hello");
let y = Symbol("hello");

console.log(o == y); // false