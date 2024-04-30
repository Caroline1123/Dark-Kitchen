import { menuItems } from "./menu.js";
import { addToCart } from "../script.js";

// Function to add menu item cards to the body of the HTML document
let addMenuItemsToBody = (menuItems) => {
    const menuContainer = document.querySelector('.menu-container');
    // Loop through the menu items and create a card for each one
    menuItems.forEach(menuItem => {
        // Create a card for the current menu item
        const menuItemCard = createMenuItemCard(menuItem);
        // Append the card to the body
        menuContainer.appendChild(menuItemCard);
    });
}

// Creates a menu item card
let createMenuItemCard = (menuItem) => {
    // Create a div element for the card
    const card = document.createElement('div');
    card.classList.add('menu-item');
    
    // Create a div specifically for price, origin, and the "Add to Cart" button
    const detailsContainer = document.createElement('div');
    detailsContainer.classList.add('details-container');
    
    // Create elements for price, origin, and "Add to Cart" button
    const price = document.createElement('p');
    price.textContent = `€${menuItem.price_EUR.toFixed(2)}`;
    price.classList.add('price'); // Add class to price
    
    const origin = document.createElement('p');
    origin.textContent = menuItem.origin;
    origin.classList.add('origin');
    
    // CAROLINE : shopping cart
    const addToCartButton = document.createElement('button');
    
    // Adds event listener to cart button to add one to the cart
    addToCartButton.classList.add('cart');
    addToCartButton.textContent = 'Add';
    addToCartButton.addEventListener('click', () => {
        addToCart(menuItem);
    });
    
    // Append price, origin, and "Add to Cart" button to detailsContainer
    detailsContainer.appendChild(price);
    detailsContainer.appendChild(origin);
    detailsContainer.appendChild(addToCartButton);
    
    // Create elements for image, name, and description
    const image = document.createElement('img');
    image.src = menuItem.img;
    image.alt = menuItem.name;
    
    const name = document.createElement('h3');
    name.textContent = menuItem.name;
    
    const description = document.createElement('p'); 
    description.textContent = menuItem.description; 
    description.classList.add('description'); // Add class to description
    
    // Append image, name, and description to the card
    card.appendChild(image);
    card.appendChild(name);
    card.appendChild(description);
    // Append detailsContainer to the card
    card.appendChild(detailsContainer);
    
    return card;
}

export { addMenuItemsToBody };