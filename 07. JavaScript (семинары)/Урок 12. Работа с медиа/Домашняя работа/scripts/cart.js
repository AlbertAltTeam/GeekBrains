let cart = [];

export function addToCart(product) {
  cart = getCartItems();
  const itemIndex = cart.findIndex(item => item.id === product.id);

  if (itemIndex !== -1) {
    cart[itemIndex].quantity++;
  } else {
    product.quantity = 1;
    cart.push(product);
  }

  saveCartToLocalStorage();
}

export function removeById(id) {
  cart = getCartItems();
  const index = cart.findIndex(item => item.id == id);
  if (index !== -1) {
    cart.splice(index, 1);
  }
  saveCartToLocalStorage();
}

export function removeAllFromCart() {
  sessionStorage.removeItem('cart');
  cart = [];
}

function saveCartToLocalStorage() {
  sessionStorage.setItem('cart', JSON.stringify(cart));
}

export function getCartItems() {
  let cartItems = JSON.parse(sessionStorage.getItem('cart')) || [];
  return cartItems;
}