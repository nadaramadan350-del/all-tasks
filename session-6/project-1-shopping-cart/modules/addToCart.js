const products = require('../data/products');
const cart = require('../data/cart');

function addToCart(productId) {
  const product = products.find((item) => item.id === productId);

  if (!product) {
    console.log(`Product with ID ${productId} was not found.`);
    return false;
  }

  cart.push(product);
  console.log(`${product.name} was added to the cart.`);
  return true;
}

module.exports = addToCart;
