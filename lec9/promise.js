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
