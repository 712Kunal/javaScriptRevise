let allProducts = [];
let container = document.getElementById("products-container");

let printProducts = (products) => {
  container.innerHTML = products
    .map(
      (product) => `
    <div id="product-card">
        <img src="${product.thumbnail}" alt="${product.title}" id="product-img">
        <h1>${product.title}</h1>
        <h2>Price: ${Math.round(product.price * 95)}</h2>
        <p>Ratings: ${product.rating}</p>
        <button>Add to cart</button>
    </div>
  `,
    )
    .join("");
};

let below500 = () => {
  let filteredProducts = allProducts.filter(
    (product) => Math.round(product.price * 95) < 500,
  );
  printProducts(filteredProducts);
};

let above500 = () => {
  let filteredProducts = allProducts.filter(
    (product) => Math.round(product.price * 95) > 500,
  );
  printProducts(filteredProducts);
};

let lowToHigh = () => {};

let highToLow = () => {};

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
