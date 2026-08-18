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
