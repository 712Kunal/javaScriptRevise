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

let anotherway = [];
for (let i = 0; i < products.length; i++) {
  anotherway.push(products[i][0] + products[i].slice(1).toLowerCase());
}
console.log(anotherway); // [ 'Tv', 'Ac', 'Fridge', 'Mobile', 'Laptop', 'Ps5' ]

let greaterthan3 = [];
for (let i = 0; i < products.length; i++) {
  if (products[i].length > 3) {
    greaterthan3.push(products[i]);
  }
}
console.log(greaterthan3); // [ 'FRIDGE', 'MOBILE', 'LAPTOP' ]

let evenIndicesProducts = [];
for (let i = 0; i < products.length; i++) {
  if (i % 2 === 0) {
    evenIndicesProducts.push(products[i]);
  }
}
console.log(evenIndicesProducts); // [ 'TV', 'FRIDGE', 'LAPTOP' ]

let first3chars = [];
for (let i = 0; i < products.length; i++) {
  if (products[i].length < 3) {
    continue;
  } else {
    first3chars.push(products[i].slice(0, 3));
  }
}
console.log(first3chars); // [ 'FRI', 'MOB', 'LAP', 'PS5' ]

let evenLength = [];
for (let i = 0; i < products.length; i++) {
  if (products[i].length % 2 === 0) {
    evenLength.push(products[i]);
  }
}
console.log(evenLength); // [ 'TV', 'AC', 'FRIDGE', 'MOBILE', 'LAPTOP' ]

let utils = ["charger", "Clothes", "bottle", "Bottle"];
let startsWithc = [];
for (let i = 0; i < utils.length; i++) {
  if (utils[i].charAt(0) === "C" || utils[i].charAt(0) === "c") {
    startsWithc.push(utils[i]);
  }
}
console.log(startsWithc); // [ 'charger', 'Clothes' ]

let randarr = [10, 20, 30, 40];

const display = (num, index) => {
  console.log(num, index);
};

for (let i = 0; i < randarr.length; i++) {
  // console.log(randarr[i], i);
  display(arr[i], i);
}

randarr.forEach(display);

randarr.forEach((item, index) => {
  console.log(item, index);
});

randarr.forEach((item, index, arr) => {
  console.log(item, index);
  console.log(arr);
});

// 10 0
// [ 10, 20, 30, 40 ]
// 20 1
// [ 10, 20, 30, 40 ]
// 30 2
// [ 10, 20, 30, 40 ]
// 40 3
// [ 10, 20, 30, 40 ]

randarr.forEach((item) => {
  console.log(item);
});

let x = randarr.forEach((item) => {
  return item;
});

console.log(x); // undefined

let doubles = [];

console.log("using foreach ->");

randarr.forEach((item) => {
  doubles.push(item + item);
});

console.log(doubles); // [ 20, 40, 60, 80 ]

console.log("using map ->");

let double = randarr.map((item) => {
  return item + item;
});
console.log(double); // [ 20, 40, 60, 80 ]

let productMap = products.map((product) => {
  return product[0] + product.slice(1).toLowerCase();
});
console.log(productMap); // [ 'Tv', 'Ac', 'Fridge', 'Mobile', 'Laptop', 'Ps5' ]

let productMap2 = products.map((product) => {
  return product.slice(0, 3);
});
console.log(productMap2); // [ 'TV', 'AC', 'FRI', 'MOB', 'LAP', 'PS5' ]
