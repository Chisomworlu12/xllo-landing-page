// Load cart from localStorage when page loads
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Update cart function - save to localStorage after changes
function updateCart() {
  cartEmpty.classList.add("hidden");
  cartEmpty.classList.remove("cart_modal");

  cartAddItemDiv.innerHTML = cart
    .map(
      (item, i) => `
      <div class="cart_added_item">
        <div class="added_cart">
          <img src=${item.image}  class="add_img"/>
          <div>${item.name}</div>
          <div class="added_price">$${item.price}</div>
        </div>
        <div class="cart_remove_add">
          <button class="remove_cart_item" data-index="${i}">x</button>
          <div class="increase_quantity" data-index="${i}">+</div>
        </div>
      </div>
    `
    )
    .join("");

  const total = cart.reduce((sum, item) => sum + item.price, 0);
  totalAmt.textContent = `Total: $${total.toFixed(2)}`;

  // Save cart to localStorage
  saveCart();

  addAndRemove();
}

// Save cart to localStorage
function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

// Add to cart - then save
function addToCart(item) {
  cart.push(item);
  updateCart();
}

// Remove from cart - then save
function removeFromCart(i) {
  cart.splice(i, 1);
  updateCart();
}

// Increase quantity - then save
function increaseQuantity(i) {
  if (cart[i]) {
    cart[i].quantity = (cart[i].quantity || 1) + 1;
    updateCart();
  }
}

// Optional: Clear cart function
function clearCart() {
  cart = [];
  localStorage.removeItem("cart");
  updateCart();
}

// Load cart on page load
document.addEventListener("DOMContentLoaded", function () {
  updateCart(); // Display saved cart items
});
