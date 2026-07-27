let str = "aayush";
console.log(str);
console.log(typeof str); // primitive string

let str2 = new String("kumthekar");
console.log(str2);
console.log(typeof str2); // object string

console.log(str2.toUpperCase());
console.log(str.toUpperCase());

// let temp = new String(str);
// console.log(temp.toUpperCase()); // done by JS engine

let str3 = "hello world";

console.log(str3.length); // length is not a method, its a property
console.log(str3[0]); // h
console.log(str3.charAt(0)); // h
console.log(str3[20]); // undefined
let x = str3.charAt(20); // empty string
console.log(typeof x); // string
console.log(str3[-10]); // undefined
console.log(str3.charAt(-10)); // empty

let y = "Hello Webtech and Java Script";
console.log(y.length); // 29

console.log(y.slice(6)); // Webtech and Java Script
console.log(y.substring(6)); // Webtech and Java Script

// Both methods doesnt affect the original string

console.log(y.slice(6, 28)); // Webtech and Java Scrip
console.log(y.slice(6, 19)); // Webtech and J

console.log(y.slice(-23, -7)); // Webtech and Java

console.log(y.substring(-23, -7)); // empty string

console.log(y.slice(-23, 22)); // Webtech and Java
console.log(y.substring(-23, 22)); // Hello Webtech and Java -> y.substring(0,22)

console.log(y.slice(22, -23)); // empty string (22 > -23)
console.log(y.substring(22, -23)); // Hello Webtech and Java -> swap the positions -> substring(-23,22)

console.log(y.slice(-1, -10)); // empty string
// when we are giving the starting parameter greater than ending parameter
// slice will wont work, it will give empty string

let b = "Hello aayush";
for (let i = 0; i < b.length; i++) {
  process.stdout.write(b[i]);
}

console.log("\n");

const obj = {
  0: ["M", 1000],
  1: ["CM", 900],
  2: ["D", 500],
  3: ["CD", 400],
  4: ["C", 100],
  5: ["XC", 90],
  6: ["L", 50],
  7: ["XL", 40],
  8: ["X", 10],
  9: ["IX", 9],
  10: ["V", 5],
  11: ["IV", 4],
  12: ["I", 1],
};

const values = Object.values(obj);
console.log(values);

let inp = 59;
let ans = "";

for (let i = 0; i < values.length; i++) {
  let symbol = values[i][0];
  let value = values[i][1];

  while (inp >= value) {
    ans += symbol;
    inp -= value;
  }
}

console.log(ans);

let str1 = "AAyush";
let str4 = "Kumthekar";

let substr = "";
for (let i = str4.length - 1; i >= 0; i--) {
  substr += str4[i];
}

console.log(str1 + substr);

// indexOf and lastIndexOf ->
let t = "It is what it is";
console.log(t.indexOf("is")); //3
console.log(t.lastIndexOf("is")); //14
console.log(t.lastIndexOf("Is")); //-1
console.log(t.indexOf("is", 4)); //14
console.log(t.lastIndexOf("is", 4)); //3
console.log(t.indexOf()); // -1

// startsWith and endsWith
console.log(t.startsWith("It")); // true
console.log(t.startsWith("it")); // false
console.log(t.endsWith("is")); // true
console.log(t.endsWith("is", t.length)); // true
console.log(t.endsWith("Is")); // false
console.log(t.startsWith("is", 3)); // true
console.log(t.endsWith("it", 13)); // true

// replace and replaceAll
console.log(t.replace("It", "And")); // And is what it is
console.log(t.replaceAll("is", "And")); // It And what it And

// split
console.log(t.split()); // [ 'It is what it is' ]
console.log(t.split(" ")); // [ 'It', 'is', 'what', 'it', 'is' ]
console.log(t.split(""));
// [
//   'I', 't', ' ', 'i',
//   's', ' ', 'w', 'h',
//   'a', 't', ' ', 'i',
//   't', ' ', 'i', 's'
// ]

console.log(t.split("i")); // [ 'It ', 's what ', 't ', 's' ]
console.log(t.split("is")); // [ 'It ', ' what it ', '' ]
console.log(t.split("is", 1)); // [ 'It ' ]

// includes
console.log(t.includes("it")); // true

// trim
let z = "                           hi";
console.log(z.length); // 29
console.log(z.trim()); // hi

// remove in between spaces
z = "h              i";
console.log(z.replaceAll(" ", "")); // hi

// repeat
console.log(t.repeat(1)); // It is what it is
console.log(t.repeat(2)); // It is what it isIt is what it is
console.log(t.repeat(4)); // It is what it isIt is what it isIt is what it isIt is what it is
console.log(t.repeat(2.9)); // It is what it isIt is what it is
// console.log(t.repeat(-1)); // error -  Invalid count value: -1

// padStart and padEnd
t = "JS";
let t2 = t.padStart(5);
console.log(t2); //    JS
console.log(t2.length); // 5
t2 = t.padStart(5, "a");
console.log(t2); // aaaJS
t2 = t.padStart(5, "ab");
console.log(t2); // abaJS
t2 = t.padEnd(5, "ab");
console.log(t2); // JSaba
