var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var itemObj = {itemName: item, itemPrice: Math.ceil(Math.random() * 100)};
 cart.push(itemObj);
 return `${item} has been added to your cart.`;
}

function viewCart() {
  if (cart.length === 0) {
    return `Your shopping cart is empty.`;
  }
  var yourCart = 
  for (var i = 0; i < cart.length; i++) {
    var item = cart[i];
    var name = item.itemName;
  }
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
