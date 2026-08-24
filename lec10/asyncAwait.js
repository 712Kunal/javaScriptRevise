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
