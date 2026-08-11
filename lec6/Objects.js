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

console.log(laptop["brand"]); // 'hp'

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

let movies = [
  {
    name: "Toxic",
    genre: ["Action", "Thriller"],
    language: ["Hindi", "English", "Kannada"],
    rating: 4.5,
    cast: {
      hero: "Yash",
      heroine: ["Kiara", "Tara"],
      villain: "Yash",
    },
    isReleased: false,
  },

  {
    name: "Pushpa 2",
    genre: ["Action", "Drama"],
    language: ["Telugu", "Hindi"],
    rating: 4.7,
    cast: {
      hero: "Allu Arjun",
      heroine: ["Rashmika Mandanna"],
      villain: "Fahadh Faasil",
    },
    isReleased: true,
  },

  {
    name: "Chhaava",
    genre: ["Historical", "Drama"],
    language: ["Hindi", "Marathi"],
    rating: 4.8,
    cast: {
      hero: "Vicky Kaushal",
      heroine: ["Rashmika Mandanna"],
      villain: "Akshaye Khanna",
    },
    isReleased: true,
  },

  {
    name: "Sairat",
    genre: ["Romance", "Drama"],
    language: ["Marathi"],
    rating: 4.9,
    cast: {
      hero: "Akash Thosar",
      heroine: ["Rinku Rajguru"],
      villain: "Tanaji Galgunde",
    },
    isReleased: true,
  },

  {
    name: "RRR",
    genre: ["Action", "Drama"],
    language: ["Telugu", "Hindi", "English"],
    rating: 4.8,
    cast: {
      hero: ["Ram Charan", "Jr NTR"],
      heroine: ["Alia Bhatt", "Olivia Morris"],
      villain: "Ray Stevenson",
    },
    isReleased: true,
  },

  {
    name: "Zapatlela",
    genre: ["Comedy", "Horror"],
    language: ["Marathi"],
    rating: 4.6,
    cast: {
      hero: "Dilip Prabhavalkar",
      heroine: ["Mahesh Kothare"],
      villain: "Tatya Vinchu",
    },
    isReleased: true,
  },

  {
    name: "Dangal",
    genre: ["Sports", "Drama"],
    language: ["Hindi"],
    rating: 4.7,
    cast: {
      hero: "Aamir Khan",
      heroine: ["Fatima Sana Shaikh", "Sanya Malhotra"],
      villain: "Girish Kulkarni",
    },
    isReleased: true,
  },

  {
    name: "Kantara",
    genre: ["Action", "Drama", "Thriller"],
    language: ["Kannada", "Hindi"],
    rating: 4.9,
    cast: {
      hero: "Rishab Shetty",
      heroine: ["Sapthami Gowda"],
      villain: "Kishore",
    },
    isReleased: true,
  },

  {
    name: "Drishyam",
    genre: ["Crime", "Thriller"],
    language: ["Hindi"],
    rating: 4.6,
    cast: {
      hero: "Ajay Devgn",
      heroine: ["Shriya Saran"],
      villain: "Tabu",
    },
    isReleased: true,
  },

  {
    name: "Ved",
    genre: ["Romance", "Drama"],
    language: ["Marathi"],
    rating: 4.5,
    cast: {
      hero: "Riteish Deshmukh",
      heroine: ["Genelia D'Souza"],
      villain: "Jiya Shankar",
    },
    isReleased: true,
  },
];

movies.forEach((movie) => {
  console.log(movie.name, " : ", movie.cast.hero);
});

let releasedMovies = movies.filter((movie) => movie.isReleased);
console.log(releasedMovies);

let moviesRatingLessThan4 = movies.filter((movie) => movie.rating < 4);
console.log(moviesRatingLessThan4);

let moviesWithEnglishLanguage = movies.filter((movie) =>
  movie.language.includes("English"),
);
console.log(moviesWithEnglishLanguage);

let actionMovies = movies.filter((movie) => movie.genre.includes("Action"));
console.log(actionMovies);

let heroineGreaterThan1 = movies.filter(
  (movie) => movie.cast.heroine.length > 1,
);
console.log(heroineGreaterThan1);

let movie4plusRatingActionMarathi = movies.filter((movie) => {
  return (
    movie.rating >= 4 &&
    movie.language.includes("Marathi") &&
    movie.genre.includes("Action")
  );
});

movie4plusRatingActionMarathi.forEach((movie) => {
  console.log(movie.name);
});

let mobile1 = {
  name: "Samsung",
  price: 90000,
};

let mobile2 = {
  color: ["red", "yellow"],
};

Object.assign(mobile1, mobile2);
console.log(mobile1); // { name: 'Samsung', price: 90000, color: [ 'red', 'yellow' ] }




