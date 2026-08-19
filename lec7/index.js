let user = {
  name: "John",
  age: 30,
  city: "New York",
  hobbies: ["reading", "playing games", "coding"],
};

console.log(user);
// {
//   name: 'John',
//   age: 30,
//   city: 'New York',
//   hobbies: [ 'reading', 'playing games', 'coding' ]
// }

let jsonObj = JSON.stringify(user);
console.log(jsonObj);
// {"name":"John","age":30,"city":"New York","hobbies":["reading","playing games","coding"]}

console.log(user.name); // John
console.log(jsonObj.name); // undefined
console.log(typeof jsonObj); // string

// In stringify object we can store the undefined values and also functions aswell
let user1 = {
  name: "John",
  age: 30,
  city: "New York",
  hobbies: ["reading", "playing games", "coding"],
  job: undefined,
  printUser: function () {
    console.log(this);
  },
};

let jsonObj1 = JSON.stringify(user1);
console.log(jsonObj1);
// {"name":"John","age":30,"city":"New York","hobbies":["reading","playing games","coding"]}

let convertedObj = JSON.parse(jsonObj1);
console.log(convertedObj);
// {
//   name: 'John',
//   age: 30,
//   city: 'New York',
//   hobbies: [ 'reading', 'playing games', 'coding' ]
// }

// SHALLOW COPY
let car = {
  name: "BMW",
  price: 10000000,
  color: ["red", "white", "blue"],
};

let car1 = Object.assign({}, car);
car.color.push("black");

console.log(car1);
// {
//   name: 'BMW',
//   price: 10000000,
//   color: [ 'red', 'white', 'blue', 'black' ]
// }
console.log(car1);
// {
//   name: 'BMW',
//   price: 10000000,
//   color: [ 'red', 'white', 'blue', 'black' ]
// }

// DEEP COPY BY USING JSON
let carJSON = JSON.stringify(car);
console.log(carJSON);
// {"name":"BMW","price":10000000,"color":["red","white","blue","black"]}

let normalCar = JSON.parse(carJSON);
console.log(normalCar);
// {
//   name: 'BMW',
//   price: 10000000,
//   color: [ 'red', 'white', 'blue', 'black' ]
// }

car.color.push("yellow");
console.log(normalCar);
// {
//   name: 'BMW',
//   price: 10000000,
//   color: [ 'red', 'white', 'blue', 'black' ]
// }

console.log(carJSON);
// {"name":"BMW","price":10000000,"color":["red","white","blue","black"]}

// ARRAY DISTRUCTURING
let arr = [10, 20, 30, 40, 50];
// let [a, b, c, d, e] = arr;
// console.log(a); // 10
// console.log(b); // 20
// console.log(c); // 30
// console.log(d); // 40
// console.log(e); // 50

let [, , , , e] = arr; // sequencial order should be followed
console.log(e); // 50

let bag = ["waterbottle", "clothes", "food", "powerbank", "camera"];
let [bottle] = bag;
console.log(bottle); // waterbottle

let [, , , power, cam] = bag;
console.log(power, cam); // powerbank camera

// OBJECT DISTRUCTURING
let car2 = {
  name: "BMW",
  price: 10000000,
  color: "red",
  model: "X3",
  year: 2020,
};

let { name, price, color } = car2;
console.log(name); // BMW
console.log(price); // 10000000
console.log(color); // red

let { model } = car2;
console.log(model); // X3

// REST AND SPREAD OPERATOR

let arr1 = [1, 2, 3, 4, 5, 6];
let [a, b, c, ...d] = arr1; // rest operator -> store the remaining elements in any single variable
console.log(a, b, c); // 1 2 3
console.log(d); // [ 4, 5, 6 ]

let { year, ...others } = car2;
console.log(year); // 2020
console.log(others); // { name: 'BMW', price: 10000000, color: 'red', model: 'X3' }

let mobile = {
  mobileName: "iPhone",
  mobilePrice: 1000,
  mobileColor: "black",
  mobileModel: "12",
  year: 2020,
  ram: 64,
  storage: 128,
  processor: "Apple A14",
};

let { mobileName, mobileModel, mobilePrice, ...obj } = mobile;
console.log(mobileName, mobileModel, mobilePrice); // iPhone 12 1000
console.log(obj);
// {
//   mobileColor: 'black',
//   year: 2020,
//   ram: 64,
//   storage: 128,
//   processor: 'Apple A14'
// }

let arr2 = [1, 2, 3, 4, 5, 6];
console.log(arr2);
console.log(...arr2); // 1 2 3 4 5 6 (spread operator -> extracting all the elements at a same time)

let arr3 = [...arr2];
console.log(arr3); // [ 1, 2, 3, 4, 5, 6 ]

let arr4 = [7, 8, 9, 10];
let arr5 = [...arr3, ...arr4];
console.log(arr5);
// [
//   1, 2, 3, 4,  5,
//   6, 7, 8, 9, 10
// ]

let laptop1 = {
  laptopName1: "MacBook Pro",
  laptopPrice1: 10000,
};

let laptop2 = {
  laptopName1: "MacBook Pro Max",
  laptopColor2: ["black", "white"],
};

laptop2.laptopColor2.push("red");

let laptop3 = { ...laptop1, ...laptop2 };
console.log(laptop3); // this is a shallow copy
// {
//   laptopName1: 'MacBook Pro Max',
//   laptopPrice1: 10000,
//   laptopColor2: [ 'black', 'white', 'red' ]
// }

// LOCAL STORAGE
let x = 100;
localStorage.setItem("data", x);
let y = localStorage.getItem("data");
console.log(y); // 100
let str = "Tiger";
localStorage.setItem("animal", str);
