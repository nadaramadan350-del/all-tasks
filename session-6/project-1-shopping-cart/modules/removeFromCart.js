const cart = require('../data/cart');

function removeFromCart(productId) {
  const itemIndex = cart.findIndex((item) => item.id === productId);

  if (itemIndex === -1) {
    console.log(`Product with ID ${productId} is not in the cart.`);
    return false;
  }

  const [removedItem] = cart.splice(itemIndex, 1);
  console.log(`${removedItem.name} was removed from the cart.`);
  return true;
}

module.exports = removeFromCart;
