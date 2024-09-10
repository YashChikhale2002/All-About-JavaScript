let cartQuantity = parseInt(localStorage.getItem("quantity")) || 0;
function updateCartQuantity(change) {
  if (cartQuantity + change > 10) {
    alert("The Cart is full!");
    return;
  }
  if (cartQuantity + change < 0) {
    alert("Not enough Items in the cart!");
    return;
  }
  cartQuantity += change;
  showCurrentQuatity();
  localStorage.setItem("quantity", cartQuantity);
}
function showCurrentQuatity() {
  document.querySelector(
    ".js-show-quantity"
  ).innerHTML = `Cart Quantity ${cartQuantity}`;
}
function resetQuantity() {
  localStorage.removeItem("quantity");
  document.querySelector(
    ".js-show-quantity"
  ).innerHTML = `Cart Quantity ${(cartQuantity = 0)}`;
}