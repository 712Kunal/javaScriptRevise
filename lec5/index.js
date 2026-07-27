console.log(Boolean(true)); // true
console.log(Boolean(false)); //false
console.log(Boolean(0)); // false
console.log(Boolean(-0)); //false
console.log(Boolean(1)); // true
console.log(Boolean(-1)); // true
console.log(Boolean(null)); //false
console.log(Boolean(undefined)); //false
console.log(Boolean([])); // true
console.log(Boolean(" ")); // true

if (1) {
  console.log("faaah");
} else {
  console.log("arree baapre");
}

if (" ") {
  console.log("empty string");
} else {
  console.log("false");
}
