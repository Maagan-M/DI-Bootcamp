const products = require('./products');

function findProductByName(productName) {
  const product = products.find(prod => prod.name.toLowerCase() === productName.toLowerCase());
  return product;
}

console.log(findProductByName('Laptop')); 
console.log(findProductByName('Sneakers')); 
console.log(findProductByName('Watch'));
