console.log("Code starting");

function apiCalling() {
  console.log("Entered inside the function");
  let recepies = fetch("https://dummyjson.com/recipes");
  console.log(recepies);

  recepies
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      console.log("Fetching data from api");
      console.log(res.recipes);
    });

  console.log("Data fetching from the api is completed");
}

apiCalling();

// let demo = async () => {
//   return "hello";
// };

// console.log(demo()); // returns promise

// ASYNCT AWAIT =>
let apiCallingAsync = async () => {
  console.log("Entered inside the function");
  let recepies = await fetch("https://dummyjson.com/recipes"); // returns whole response
  console.log(recepies);

  let data = await recepies.json(); // converting in the json
  console.log(data);

  console.log("Recepies ->", data.recipes);

  console.log("Data fetching from the api is completed");
};

apiCallingAsync();
