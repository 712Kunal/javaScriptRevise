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
