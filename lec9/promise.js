// PROMISE IS USED TO HANDLE ASYNC OPERATIONS
let p = new Promise((resolve, reject) => {
  let x = true;

  if (x) {
    resolve(100);
  } else {
    reject("Data not found");
  }
});

console.log(p);

// if promise get resolved, "then" block will be executed
p.then((res) => {
  console.log(res);
});

// if promise get rejected, "catch" block will be executed
p.catch((err) => {
  console.log(err);
});

// "finally" block will be executed whether promise get resolved or rejectedz
p.finally(() => {
  console.log(`Promise completed`);
});

// All in single line
p.then((res) => {
  console.log(res);
})
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    console.log(`Promise completed`);
  });

// PROMISE CHAINING
let p1 = new Promise((resolve, reject) => {
  resolve("Interview mail received");
  //   reject("Interview mail not received");
});

p1.then((res) => {
  console.log(res); // Interview mail received
  return "Interview is cleared";
})
  .then((res) => {
    console.log(res); // Interview is cleared
    return "Offer letter generated";
  })
  .then((res) => {
    console.log(res); // Offer letter generated
    return "joining letter generated";
  })
  .then((res) => {
    console.log(res); // joining letter generated
    return "finally joined in the company";
  })
  .then((res) => {
    console.log(res); // finally joined in the company
  })
  .catch((err) => {
    console.log(err); // Interview mail not received
  });

let x = fetch("https://dummyjson.com/users");
console.log(x);
x.then((res) => {
  console.log(res);
  return res.json();
}).then((res) => {
  console.log(res);
  console.log(res.limit);
  console.log(res.skip);
  console.log(res.users);
});

let recipes = fetch("https://dummyjson.com/recipes");
recipes
  .then((res) => {
    console.log(res);
    return res.json();
  })
  .then((res) => {
    console.log(res);
    console.log(res.limit);
    console.log(res.skip);
    console.log(res.recipes);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    console.log("Promise completed");
  });

let products = fetch("https://dummyjson.com/products");
products
  .then((res) => {
    return res.json();
  })
  .then((res) => {
    console.log(res);
    console.log(res.limit);
    console.log(res.skip);
    console.log(res.products);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    console.log("Promise completed");
  });
