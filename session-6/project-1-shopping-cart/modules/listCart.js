const cart = require('../data/cart');

function listCart() {
  if (cart.length === 0) {
    console.log('The cart is empty.');
    return cart;
  }

  console.log('Cart items:');
  cart.forEach((item) => {
    console.log(`- ${item.name}: ${item.price} EGP`);
  });

  return cart;
}

module.exports = listCart;
