let arr = [10, 20, 30, 40];
console.log(arr); // [ 10, 20, 30, 40 ]
console.log(typeof arr); // object

let animals = ["cat", "lion", "tiger"];
console.log(animals); // [ 'cat', 'lion', 'tiger' ]
console.log(typeof animals); // object

let random = [1, 20, true, null, undefined, "JS"];
console.log(random); // [ 1, 20, true, null, undefined, 'JS' ]

console.log(animals[0]); // cat
console.log(animals[10]); // undefined
console.log(`length of array: ${animals.length}`); // length of array: 3

let flowers = [];
console.log(flowers); // []
flowers[0] = "Lotus";
flowers[5] = "sunflower";
console.log(flowers); // [ 'Lotus', <4 empty items>, 'sunflower' ]
console.log(flowers[2]); // undefined

let trip = [];
console.log(trip);
trip.push("charger");
trip.push("clothes");
trip.push("food");
trip.push("bottle");
console.log(trip); // [ 'charger', 'clothes', 'food', 'bottle' ]

trip.push("bluetooth", "money", "girlfriend");
console.log(trip);
// [
//   'charger',
//   'clothes',
//   'food',
//   'bottle',
//   'bluetooth',
//   'money',
//   'girlfriend'
// ]
console.log(trip.length); // 7

trip.pop();
console.log(trip); // [ 'charger', 'clothes', 'food', 'bottle', 'bluetooth', 'money' ]
trip.pop();
console.log(trip); // ["charger", "clothes", "food", "bottle", "bluetooth"];

trip.unshift("aayush", "kunal");
console.log(trip);
// [
//   'aayush',
//   'kunal',
//   'charger',
//   'clothes',
//   'food',
//   'bottle',
//   'bluetooth'
// ]

trip.shift();
console.log(trip); // [ 'kunal', 'charger', 'clothes', 'food', 'bottle', 'bluetooth' ]

// splice method
trip.splice(1, 2); // (IndexPosition, deleteCount)
console.log(trip); // [ 'kunal', 'food', 'bottle', 'bluetooth' ]
trip.splice(1, 2, "girlfriend", "bestie");
console.log(trip); // [ 'kunal', 'girlfriend', 'bestie', 'bluetooth' ]
trip.splice(1, 0, "aayush", "kumthekar", "shubham");
console.log(trip);
// [
//   'kunal',
//   'aayush',
//   'kumthekar',
//   'shubham',
//   'girlfriend',
//   'bestie',
//   'bluetooth'
// ]

// slice method
animals = ["cat", "lion", "tiger", "elephant", "horse"];
console.log(animals); // [ 'cat', 'lion', 'tiger', 'elephant', 'horse' ]
let array = animals.slice(1, 3);
console.log(array); // [ 'lion', 'tiger' ]
console.log(animals.slice(1)); // [ 'lion', 'tiger', 'elephant', 'horse' ]

// Accessing array elements
let rand = [10, 15, 9, 5, 20];
for (let i = 0; i < rand.length; i++) {
  console.log(rand[i]);
}
let sum = 0;
for (let i = 0; i < rand.length; i++) {
  if (rand[i] % 2 === 0) {
    sum += rand[i];
  }
}

console.log(sum); // 30

let evenarr = [];
let oddarr = [];
for (let i = 0; i < rand.length; i++) {
  if (rand[i] % 2 === 0) {
    evenarr.push(rand[i]);
  } else {
    oddarr.push(rand[i]);
  }
}
console.log(evenarr); // [ 10, 20 ]
console.log(oddarr); // [ 15, 5, 9 ]

let randString = ["js", true, 10, "html", false, 20];
let stringarr = [];
let boolarr = [];
let numarr = [];

for (let i = 0; i < randString.length; i++) {
  if (typeof randString[i] === "string") {
    stringarr.push(randString[i]);
  } else if (typeof randString[i] === "boolean") {
    boolarr.push(randString[i]);
  } else if (typeof randString[i] === "number") {
    numarr.push(randString[i]);
  }
}

console.log(stringarr); // [ 'js', 'html' ]
console.log(boolarr); // [ true, false ]
console.log(numarr); // [ 10, 20 ]

let products = ["TV", "AC", "FRIDGE", "MOBILE", "LAPTOP", "PS5"];
let productarr = [];
for (let i = 0; i < products.length; i++) {
  productarr.push(products[i].toLowerCase());
}
console.log(productarr); // [ 'tv', 'ac', 'fridge', 'mobile', 'laptop', 'ps5' ]

let productans = [];
for (let i = 0; i < products.length; i++) {
  let curr = products[i];
  let a = "";
  for (let j = 0; j < curr.length; j++) {
    if (j === 0) {
      a += curr[j];
    } else {
      a += curr[j].toLowerCase();
    }
  }
  productans.push(a);
}

console.log(productans); // [ 'Tv', 'Ac', 'Fridge', 'Mobile', 'Laptop', 'Ps5' ]
