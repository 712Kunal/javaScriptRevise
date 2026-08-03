// WAYS OF CREATING OBJECTS =>

// 1. USING LITERALS (OBJECT LITERAL)
let obj = {
  key: "value",
};

console.log(obj); // { key: 'value' }

let laptop = {
  brand: "hp",
  price: 50000,
};

console.log(laptop); // { brand: 'hp', price: 50000 }
console.log(typeof laptop); // object

console.log(laptop.brand); // hp

// adding new property
laptop.color = "red";
console.log(laptop); // { brand: 'hp', price: 50000, color: 'red' }

// updating existing property
laptop.price = 100000;
console.log(laptop); // { brand: 'hp', price: 100000, color: 'red' }

// deleting existing property
delete laptop.color;
console.log(laptop); // { brand: 'hp', price: 100000 }
console.log(laptop.color); // undefined

let car = {
  name: "BMW",
  model: "M5",
  price: 250000000,
  color: ["red", "white", "blue"],
  engine: {
    type: "v8",
    cylinders: 8,
    displacement: 300,
    power: 250,
    torque: 300,
    fuel: "gasoline",
    mileage: 1000000,
  },
  electric: false,
};

console.log(car.name); // BMW
console.log(car.price); // 250000000
car.color.forEach((color) => console.log(color));
// red
// white
// blue

console.log(car.engine.type); // v8

// My object
const myObj = {
  name: "John",
  age: 30,
  city: "New York",
  hobbies: ["reading", "playing games", "coding"],
  job: {
    company: "Google",
    position: "Software Engineer",
    salary: 50000,
    experience: 5,
    education: ["BE", "MSc"],
    skills: ["Java", "Python", "C++"],
  },
  friends: ["Alice", "Bob", "Charlie"],
  family: {
    parents: ["John", "Mary"],
    children: ["David", "Emily", "Olivia"],
    siblings: ["Sarah", "Rachel"],
  },
  martialsStatus: false,
};

console.log(myObj);

console.log(Object.keys(myObj)); // [ 'name', 'age', 'city', 'hobbies', 'job', 'friends', 'family', 'martialsStatus' ]
console.log(Object.values(myObj));
// [
//   'John',
//   30,
//   'New York',
//   [ 'reading', 'playing games', 'coding' ],
//   {
//     company: 'Google',
//     position: 'Software Engineer',
//     salary: 50000,
//     experience: 5,
//     education: [ 'BE', 'MSc' ],
//     skills: [ 'Java', 'Python', 'C++' ]
//   },
//   [ 'Alice', 'Bob', 'Charlie' ],
//   {
//     parents: [ 'John', 'Mary' ],
//     children: [ 'David', 'Emily', 'Olivia' ],
//     siblings: [ 'Sarah', 'Rachel' ]
//   },
//   false
// ]

console.log(Object.entries(myObj));
// [
//   [ 'name', 'John' ],
//   [ 'age', 30 ],
//   [ 'city', 'New York' ],
//   [ 'hobbies', [ 'reading', 'playing games', 'coding' ] ],
//   [
//     'job',
//     {
//       company: 'Google',
//       position: 'Software Engineer',
//       salary: 50000,
//       experience: 5,
//       education: [Array],
//       skills: [Array]
//     }
//   ],
//   [ 'friends', [ 'Alice', 'Bob', 'Charlie' ] ],
//   [
//     'family',
//     { parents: [Array], children: [Array], siblings: [Array] }
//   ],
//   [ 'martialsStatus', false ]
// ]
console.log(Object.entries(myObj).flat(1));

Object.freeze(myObj);
myObj.name = "Peter";
console.log(myObj);
// {
//   name: 'John',
//   age: 30,
//   city: 'New York',
//   hobbies: [ 'reading', 'playing games', 'coding' ],
//   job: {
//     company: 'Google',
//     position: 'Software Engineer',
//     salary: 50000,
//     experience: 5,
//     education: [ 'BE', 'MSc' ],
//     skills: [ 'Java', 'Python', 'C++' ]
//   },
//   friends: [ 'Alice', 'Bob', 'Charlie' ],
//   family: {
//     parents: [ 'John', 'Mary' ],
//     children: [ 'David', 'Emily', 'Olivia' ],
//     siblings: [ 'Sarah', 'Rachel' ]
//   },
//   martialsStatus: false
// }

myObj.nickName = "Peter";
console.log(myObj);
// {
//   name: 'John',
//   age: 30,
//   city: 'New York',
//   hobbies: [ 'reading', 'playing games', 'coding' ],
//   job: {
//     company: 'Google',
//     position: 'Software Engineer',
//     salary: 50000,
//     experience: 5,
//     education: [ 'BE', 'MSc' ],
//     skills: [ 'Java', 'Python', 'C++' ]
//   },
//   friends: [ 'Alice', 'Bob', 'Charlie' ],
//   family: {
//     parents: [ 'John', 'Mary' ],
//     children: [ 'David', 'Emily', 'Olivia' ],
//     siblings: [ 'Sarah', 'Rachel' ]
//   },
//   martialsStatus: false
// }

delete myObj.name;
console.log(myObj);
// {
//   name: 'John',
//   age: 30,
//   city: 'New York',
//   hobbies: [ 'reading', 'playing games', 'coding' ],
//   job: {
//     company: 'Google',
//     position: 'Software Engineer',
//     salary: 50000,
//     experience: 5,
//     education: [ 'BE', 'MSc' ],
//     skills: [ 'Java', 'Python', 'C++' ]
//   },
//   friends: [ 'Alice', 'Bob', 'Charlie' ],
//   family: {
//     parents: [ 'John', 'Mary' ],
//     children: [ 'David', 'Emily', 'Olivia' ],
//     siblings: [ 'Sarah', 'Rachel' ]
//   },
//   martialsStatus: false
// }

// check weater object is frozen or not
console.log(Object.isFrozen(myObj)); // true

Object.seal(myObj); // only update will happen
myObj.name = "Peter";
console.log(Object.isSealed(myObj)); // true
