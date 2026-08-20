let p = new Promise((resolve, reject) => {
  let x = true;

  if (x) {
    resolve(100);
  } else {
    reject("Data not found");
  }
});

console.log(p);

p.then((res) => {
  console.log(res);
});
