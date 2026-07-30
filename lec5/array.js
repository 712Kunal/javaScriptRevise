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

let arr1 = [100, 20, 30, 50, 200];

let usingMap = arr1.map((item) => {
  if (item < 50) {
    return item;
  }

  // return item < 50; [ false, true, true, false, false ]
});
console.log(usingMap); // [ undefined, 20, 30, undefined, undefined ]

let filterArr = arr1.filter((item) => item < 50);
console.log(filterArr); // [ 20, 30 ]

for (let i = 0; i < arr1.length; i++) {
  if (arr1[i] < 50) {
    console.log(arr1[i]); // 20
    break;
  }
}

let first = arr1.find((item) => item < 50);
console.log(first); // 20

let greaterThan3 = products.filter((product) => product.length > 3);
console.log(greaterThan3); // [ 'FRIDGE', 'MOBILE', 'LAPTOP' ]

let greaterThan3Find = products.find((product) => product.length > 3);
console.log(greaterThan3Find); // FRIDGE

let startingWithM = products.filter((product) => product.startsWith("M"));
console.log(startingWithM); // [ 'MOBILE' ]

let lessThan30MoreThan50 = arr1.filter((item) => item <= 30 && item >= 50);
console.log(lessThan30MoreThan50); // []

let arr2 = [10, 20, 100, 200, 300];
console.log(arr2.includes(20)); // true

arr2.reverse();
console.log(arr2); // [ 300, 200, 100, 20, 10 ]
// reverse method is not present in the string, its only present in an array

let str = "JAVASCRIPT";
let arrStr = str.split("");
console.log(arrStr);
// [
//   'J', 'A', 'V', 'A',
//   'S', 'C', 'R', 'I',
//   'P', 'T'
// ]
// reversing the array elements
arrStr.reverse();
// JOIN -> Adds all the elements of an array into a string, separated by the specified
// separator string.
console.log(arrStr.join("")); // TPIRCSAVAJ

let str1 = "Hello Java Script";
let arrStr1 = str1.split(" ");
arrStr1.reverse();
console.log(arrStr1.join(" ")); // Script Java Hello

let result = str1
  .split(" ")
  .map((word) => word.split("").reverse().join(""))
  .join(" ");

console.log(result); // olleH avaJ tpircS

let str2 = str1
  .split(" ")
  .map((item) => {
    return item.split("").reverse().join("");
  }) // [ 'olleH', 'avaJ', 'tpircS' ]
  .join(" ") // 'olleH avaJ tpircS'
  .split(" ") // [ 'olleH', 'avaJ', 'tpircS' ]
  .reverse() // [ 'tpircS', 'avaJ', 'olleH' ]
  .join(" ");
console.log(str2); // tpircS avaJ olleH

console.log(products.sort()); // [ 'AC', 'FRIDGE', 'LAPTOP', 'MOBILE', 'PS5', 'TV' ]

let arr4 = [10, 20, 30, 40, 50, 1, 2, 9, 10];
arr4.sort();
console.log(arr4); // [
//    1, 10, 10, 2, 20,
//   30, 40, 50, 9
// ]

arr4.sort((a, b) => {
  return a - b; // if positive then swap (negetive and 0 => no swap)
});
console.log(arr4); // [ 1, 2, 9, 10, 10, 20, 30, 40, 50 ] => ASCENDING ORDER

arr4.sort((a, b) => {
  return b - a; // if negative then swap
});
console.log(arr4); // [ 50, 40, 30, 20, 10, 10, 9, 2, 1 ] => DESCENDING ORDER

products.sort((a, b) => {
  return b.length - a.length;
});

console.log(products); // [ 'FRIDGE', 'LAPTOP', 'MOBILE', 'PS5', 'AC', 'TV' ]
