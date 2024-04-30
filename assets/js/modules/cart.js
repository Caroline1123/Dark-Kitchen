import { menuItems } from "./menu.js";

const cartModal = document.querySelector(".cart_modal");
const cartContainer = document.querySelector(".shopping_cart");

let showQuantity = () => {
    let itemsNr = 0;
    let cart = JSON.parse(localStorage.getItem("cart"));
    for (let key in cart) {
        if (cart.hasOwnProperty(key)) {
            itemsNr += cart[key].quantity;
        }
    }
    const count = document.querySelector("#count");
    count.innerHTML =`${itemsNr}`;
}

let addToCart = (item) => {
    let cart = JSON.parse(localStorage.getItem("cart"));
    if (cart[item["name"]]) {
        cart[item["name"]].quantity++;
    }
    else {
        cart[item["name"]] = { name: item["name"], quantity: 1 };
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    showCart();
    showQuantity();
}

let removeFromCart = (item) => {
    let cart = JSON.parse(localStorage.getItem("cart"));
    if (cart[item["name"]].quantity == 1) {
        delete cart[item["name"]];
    }
    else {
        cart[item["name"]].quantity--;
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    showCart();
    showQuantity();
}

let clearCart = () => {
    let cart = JSON.parse(localStorage.getItem("cart"));
    cart = {};
    localStorage.setItem("cart", JSON.stringify(cart));
    showCart();
    showQuantity();
}

let showCart = () => {
    // resets contents of shopping cart container
    cartContainer.innerHTML = `<img id="closeModal" src="./assets/images/close_btn.svg" alt="close cart">`;
    let total = 0;
    let cart = JSON.parse(localStorage.getItem("cart"));
    cartContainer.innerHTML += 
    `<div class="title">
        <span>Product</span>
        <span>Quantity</span>
        <span>Total</span>
    </div>
    `;
    if (cart === "null" || Object.keys(cart).length === 0) {
        cartContainer.innerHTML += "Your basket is currently empty";
        cartContainer.classList.add("empty");
    } 
    else {
        for (let itemName in cart) {
            const itemObj = menuItems.find(item => item.name === itemName);
            if (itemObj) {
                const itemLine = document.createElement("div");
                itemLine.classList.add("dish");
                let lineTotal = itemObj["price_EUR"] * cart[itemName].quantity;
                itemLine.innerHTML = 
                `
                    <span class="dish_name">${itemObj["name"]}</span>
                    <span class="dish_quantity"><img class="remove" src="./assets/images/minus.svg">${cart[itemName].quantity}<img class="add" src="./assets/images/plus.svg"></span>
                    <span class="line_total">${lineTotal.toFixed(2)} €</span>
                `;
                cartContainer.appendChild(itemLine);
                total += lineTotal;
                // Add event listeners to + and - buttons to increase/decrease quantity of item
                const addIcon = itemLine.querySelector(".add");
                const removeIcon = itemLine.querySelector(".remove");
                addIcon.addEventListener("click", () => {
                    addToCart(itemObj);
                });
                removeIcon.addEventListener("click", () => {
                    removeFromCart(itemObj);
                });
            }
        }
    }
    // Close modal
    const closeModal = document.querySelector("#closeModal");
    closeModal.addEventListener("click", (event) => {
        cartModal.style.display = "none";
    })
    const totalDiv = document.createElement("div");
    totalDiv.classList.add("total");
    totalDiv.innerHTML += 
    `   <span><img id="clear" title="Clear Cart" src="./assets/images/icons/trashcan.svg" alt="Clear cart"></span>
        <span>${total.toFixed(2)} €</span>
    `;
    const clearBtn = totalDiv.querySelector("#clear");
    clearBtn.addEventListener("click", (event) => {
        clearCart();
    })
    const checkoutButton = document.createElement("div");
    checkoutButton.innerHTML = `<button class="checkout">Checkout</button>`
    checkoutButton.addEventListener("click", (event) => {
        if (Object.keys(cart).length === 0) {
            alert("Add items to your basket first.");
        }
        else {
            clearCart();
            alert("Thanks for your order!");
        }
    })
    cartContainer.appendChild(totalDiv);
    cartContainer.appendChild(checkoutButton);
    cartModal.appendChild(cartContainer);
}

export { showQuantity, clearCart, removeFromCart, addToCart, showCart };