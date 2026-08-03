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
};

console.log(car.name); // BMW
console.log(car.price); // 250000000
car.color.forEach((color) => console.log(color));
// red
// white
// blue
