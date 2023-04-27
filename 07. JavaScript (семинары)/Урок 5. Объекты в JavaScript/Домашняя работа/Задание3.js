const products = [
  { id: 3, price: 200 },
  { id: 4, price: 900 },
  { id: 1, price: 1000 }
];

const discount = 15;

products.forEach(product => {
  product.price *= (100 - discount) / 100;
});

console.log(products);