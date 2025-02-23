// Cart functionality
let cartItems = [];

// Function to add items to the cart
function addToCart(productName, price, imageUrl) {
    // Check if the item already exists in the cart
    const itemExists = cartItems.some(item => item.name === productName);
    
    if (itemExists) {
        alert(`${productName} is already in your cart.`);
    } else {
        cartItems.push({ name: productName, price: price, imageUrl: imageUrl });
        document.getElementById("cart-count").textContent = cartItems.length;
        alert(`${productName} added to your cart. Total items: ${cartItems.length}`);
    }
}

// Function to show cart items in the modal
function showCartInModal() {
    const modalCartDiv = document.getElementById("modal-cart-items");

    if (cartItems.length === 0) {
        modalCartDiv.innerHTML = "<p>No items in your cart yet.</p>";
    } else {
        let cartHtml = "<ul>";
        cartItems.forEach(item => {
            cartHtml += `
                <li>
                    <img src="${item.imageUrl}" alt="${item.name}" style="width: 50px; height: 50px; object-fit: cover; margin-right: 10px;">
                    ${item.name} - $${item.price}
                </li>
            `;
        });
        cartHtml += "</ul>";
        modalCartDiv.innerHTML = cartHtml;
    }

    // Show the modal
    document.getElementById("cart-modal").style.display = "flex";
}

// Function to close the modal
function closeModal() {
    document.getElementById("cart-modal").style.display = "none";
}

// Event listener for the "Cart" link to trigger the modal
document.querySelector('a[href="#cart"]').addEventListener("click", function(event) {
    event.preventDefault();
    showCartInModal();
});

// Checkout and other functions remain the same
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
