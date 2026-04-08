const products = [
  { id: 1, name: "Wireless Mouse", category: "electronics", price: 25 },
  { id: 2, name: "Running Shoes", category: "apparel", price: 80 },
  { id: 3, name: "Mechanical Keyboard", category: "electronics", price: 120 },
  { id: 4, name: "Coffee Maker", category: "home", price: 45 },
  { id: 5, name: "USB-C Monitor", category: "electronics", price: 300 },
];
const electronics = products.filter((item) => item.category === "electronics");
const html = electronics.map(
  ({ name, price }) => `name: ${name}, price: ${price}`,
);
document.getElementById("productList").innerHTML = html.join("<br>");
const totalprice = electronics.reduce((x, y) => y.price + x, 0);
document.getElementById("totalPrice").innerHTML = totalprice;
console.log(totalprice);
