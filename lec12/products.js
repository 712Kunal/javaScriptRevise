let allProducts = [];
let container = document.getElementById("products-container");

let printProducts = (products) => {
  products.map(() => {});
};

let fetchingProducts = async () => {
  try {
    let api = await fetch("https://dummyjson.com/products");
    let data = await api.json();

    console.log(data.products);
    allProducts = data.products;
    printProducts(allProducts);
  } catch (error) {
    console.log("Something went wroung please try again");
  }
};

fetchingProducts();
