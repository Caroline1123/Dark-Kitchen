import { menuItems } from "./modules/menu.js";
import { addMenuItemsToBody } from "./modules/cards.js"
import { toggleDarkMode } from "./modules/darkMode.js";
import { rotateIcon, resetRotation, filterMenuItems } from "./modules/filters.js";
import { showQuantity, addToCart, showCart } from "./modules/cart.js";

// Retrieves cart or initializes it.
let cart = JSON.parse(localStorage.getItem("cart")) || {};

const cartModal = document.querySelector(".cart_modal");
const cartContainer = document.querySelector(".shopping_cart");
const cartToggle = document.querySelector(".fa-cart-shopping")
const filterButtons = document.querySelectorAll('.filter-btn');

if (Object.keys(cart).length === 0) {
    localStorage.setItem("cart", JSON.stringify(cart));
}

// Call the function to add menu item cards to the body
addMenuItemsToBody(menuItems) ;

// Read DM preferences in local storage and adapt page accordingly 
let isDark = localStorage.getItem("darkMode");
if (isDark === null) {
    localStorage.setItem('darkMode', JSON.stringify(false));
}
else if (isDark) {
    toggleDarkMode();
}
showQuantity();

// Toggle shopping cart
cartToggle.addEventListener("click", () => {
    if (cartModal.style.display === "block") {
        cartModal.style.display = "none";
    }
    else {
        cartModal.style.display = "block";
    }
});

showCart();

// Add event listeners to filter buttons
filterButtons.forEach(button => {
    button.addEventListener('click', function() {
        const category = this.id;
        filterMenuItems(category);
    });
});

//Animation icons
const filterButtons1 = document.querySelectorAll('.filter-btn');

// Add events to trigger rotations
filterButtons1.forEach(button => {
    button.addEventListener('mouseenter', rotateIcon);
    button.addEventListener('mouseleave', resetRotation);
});

const icon = document.getElementById("icon");
icon.addEventListener("click", (event) => {
    let isDark = localStorage.getItem("darkMode");
    //converts value to boolean
    isDark = isDark === "true";
    isDark = !isDark;
    localStorage.setItem("darkMode", isDark.toString());
    toggleDarkMode(isDark);
});

export { cartContainer, addToCart }