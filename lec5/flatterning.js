console.log("ARRAY FLATTERNING -->");

let arr2 = [1, 2, [3, 4], 5, [6, 7, [8, 9]]];

let flatternFun = (arr) => {
  let flatarr = [];
  arr.forEach((item) => {
    if (Array.isArray(item)) {
      flatarr = flatarr.concat(flatternFun(item));
    } else {
      flatarr.push(item);
    }
  });

  return flatarr;
};

console.log(flatternFun(arr2));

console.log("OBJECT FLATTERNING -->");

let ob = {
  Company: "GeeksforGeeks",
  Address: "Noida",
  contact: "+91-999999999",
  mentor: {
    HTML: "GFG",
    CSS: "GFG",
    JavaScript: "GFG",
  },
};

let flatternObj = (obj) => {
  let currResult = {};

  for (let key in obj) {
    if (typeof obj[key] === "object" && !Array.isArray(obj[key])) {
      let temp = flatternObj(obj[key]);

      for (let key2 in temp) {
        currResult[key + "." + key2] = temp[key2];
      }
    } else {
      currResult[key] = obj[key];
    }
  }

  return currResult;
};

console.log(flatternObj(ob));
