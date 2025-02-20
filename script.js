// Cart functionality
let cartItems = [];

function addToCart(productName, price) {
    cartItems.push({ name: productName, price: price });
    document.getElementById("cart-count").textContent = cartItems.length;
    alert(`${productName} added to your cart. Total items: ${cartItems.length}`);
}

function viewCart() {
    const cartDiv = document.getElementById("cart-items");
    if (cartItems.length === 0) {
        cartDiv.innerHTML = "<p>No items in your cart yet.</p>";
    } else {
        let cartHtml = "<ul>";
        cartItems.forEach(item => {
            cartHtml += `<li>${item.name} - $${item.price}</li>`;
        });
        cartHtml += "</ul>";
        cartDiv.innerHTML = cartHtml;
    }
}

function checkout() {
    if (cartItems.length === 0) {
        alert("Your cart is empty. Please add items to your cart.");
    } else {
        window.location.href = "#checkout";
    }
}

function handleCheckoutForm(event) {
    event.preventDefault();
    alert("Your order has been successfully placed!");
    cartItems = [];  // Empty the cart after checkout
    document.getElementById("cart-count").textContent = 0;
}

document.querySelector(".checkout-form").addEventListener("submit", handleCheckoutForm);