// First Try:
/*
let product = {
  name: "Headphone",
  price: "2500",
  discount: 10,
};

const disCalci = (product.price * product.discount) / 100;

console.log(disCalci);
*/

// Discount Calculator

/*
function disCalci(pruduct, price, discount) {
  return (price * discount) / 100;
}
console.log(disCalci("Headphone", 2500, 12));
*/

// Complex version

//Products
var product = {
  name: ["Headphone", "earphone", "Earbuds", "Neckband"],
  price: [3500, 999, 2500, 1500],
  discount: [10, 20, 15, 25, 5],
};
// Very Poor Logic 😁
const disCalci = `Product Name: ${product.name[0]} its Price:${product.price[2]} Discount on it:${product.discount[2]}%`;
const finalDis = `Final Discount: ${(product.price[0] * product.discount[2]) / 100}`;

const finalPrice = product.price[0] - finalDis;
// Output
console.log("|| !! PRODUCT ON YOUR CART !! ||");
console.log(disCalci);
console.log(finalDis);
console.log(finalPrice);
console.log("|| BUY NOW ||");
