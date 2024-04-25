const menuItems = [
    {
        "name": "Pad Thai",
        "price_EUR": 12.50,
        "description": "A traditional Thai stir-fried rice noodle dish with tofu, bean sprouts, peanuts, and lime.",
        "ingredients": ["rice noodles", "tofu", "bean sprouts", "peanuts", "lime"],
        "img": "https://img.freepik.com/free-photo/close-up-delicious-asian-food_23-2150535859.jpg?t=st=1713959830~exp=1713963430~hmac=5aec003e13629bcff0755d1ffd49a91eab9f103722e62ecad30b7937aa7f77ed&w=1380",
        "origin": "Asian"
    },
    {
        "name": "Margherita Pizza",
        "price_EUR": 9.99,
        "description": "A classic Italian pizza topped with tomato sauce, mozzarella cheese, and fresh basil.",
        "ingredients": ["tomato sauce", "mozzarella cheese", "basil"],
        "img": "https://www.freepik.com/free-ai-image/close-up-delicious-pizza_60175657.htm#fromView=search&page=1&position=1&uuid=f07bf502-53b1-48e8-88ef-8367e4f7243f",
        "origin": "Italian"
    },
    {
        "name": "Sushi Platter",
        "price_EUR": 18.75,
        "description": "Assorted sushi rolls including tuna, salmon, California rolls, and avocado rolls.",
        "ingredients": ["rice", "fish (tuna, salmon)", "avocado", "seaweed", "soy sauce"],
        "img": "https://www.freepik.com/free-ai-image/freshness-plate-seafood-sashimi-nigiri-maki-sushi-healthy-eating-generated-by-artificial-intelligence_80047878.htm#fromView=search&page=1&position=5&uuid=2c273bb6-d84c-450c-9cb7-3017a70edd55",
        "origin": "Asian"
    },
    {
        "name": "Chicken Tikka Masala",
        "price_EUR": 14.99,
        "description": "A popular Indian dish with tender chicken pieces cooked in a creamy tomato sauce with spices.",
        "ingredients": ["chicken", "tomato sauce", "cream", "spices"],
        "img": "https://img.freepik.com/free-photo/healthy-gourmet-meal-with-chicken-meat-curry-generated-by-ai_188544-18147.jpg?t=st=1713959973~exp=1713963573~hmac=1b7138f956fe75477af6cc191ea7b871fb606a84015bca6178da451fa67cbc7f&w=1380",
        "origin": "Asian"
    },
    {
        "name": "Tacos al Pastor",
        "price_EUR": 10.50,
        "description": "Mexican tacos filled with marinated pork, pineapple, onions, and cilantro.",
        "ingredients": ["marinated pork", "pineapple", "onions", "cilantro", "tortillas"],
        "img": "https://www.freepik.com/free-ai-image/close-up-delicious-tacos_69798388.htm#fromView=search&page=1&position=2&uuid=fed284bf-2b95-495e-bea2-547678c46d03",
        "origin": "Mexico"
    },
    {
        "name": "Pasta Carbonara",
        "price_EUR": 11.75,
        "description": "Italian pasta dish made with spaghetti, eggs, Parmesan cheese, pancetta, and black pepper.",
        "ingredients": ["spaghetti", "eggs", "Parmesan cheese", "pancetta", "black pepper"],
        "img": "https://img.freepik.com/free-photo/delicious-pasta-plate_23-2150690589.jpg?t=st=1713960123~exp=1713963723~hmac=af53b18fe28eafa39dec1e9f184a2817bdf81da8304aa899f6c77ac360d3cc87&w=826",
        "origin": "Italian"
    },
    {
        "name": "Hamburger",
        "price_EUR": 8.99,
        "description": "A classic American hamburger served with lettuce, tomato, onions, pickles, and cheese.",
        "ingredients": ["beef patty", "lettuce", "tomato", "onions", "pickles", "cheese", "bun"],
        "img": "https://img.freepik.com/free-photo/grilled-beef-burger-with-cheese-tomato-onion-rustic-bread-generated-by-artificial-intelligence_25030-63164.jpg?t=st=1713960162~exp=1713963762~hmac=d28ffc848a2fef70d1d4a1b63be4a21255c7009c4c578eff64e9b9e1b65ade6e&w=1380",
        "origin": "US"
    },
    {
        "name": "Chicken Curry",
        "price_EUR": 13.50,
        "description": "A flavorful Indian curry made with tender chicken pieces, onions, tomatoes, and aromatic spices.",
        "ingredients": ["chicken", "onions", "tomatoes", "spices"],
        "img": "https://img.freepik.com/free-photo/close-up-delicious-asian-food_23-2150535861.jpg?t=st=1713960197~exp=1713963797~hmac=82d76967db007565d077562101bb0bc52b82592e009a3810453e0d10bfc17e63&w=1380",
        "origin": "Asian"
    },
    {
        "name": "Miso Soup",
        "price_EUR": 4.99,
        "description": "A traditional Japanese soup made with miso paste, tofu, seaweed, and green onions.",
        "ingredients": ["miso paste", "tofu", "seaweed", "green onions"],
        "img": "https://img.freepik.com/free-photo/gourmet-ramen-noodles-yellow-bowl-generated-by-ai_188544-22902.jpg?t=st=1713960224~exp=1713963824~hmac=42e3f0cbc4b014fe106121c27bc3203d99f4512c1545c420f6daf6f446086857&w=1380",
        "origin": "Asian"
    },
    {
        "name": "Caprese Salad",
        "price_EUR": 7.50,
        "description": "A refreshing Italian salad made with fresh tomatoes, mozzarella cheese, basil, and balsamic glaze.",
        "ingredients": ["tomatoes", "mozzarella cheese", "basil", "balsamic glaze"],
        "img": "https://img.freepik.com/free-photo/freshness-gourmet-rustic-wooden-table-generated-by-ai_188544-151869.jpg?t=st=1713960261~exp=1713963861~hmac=df9ea494736fb6f486786164498d810fb8d2274677cd1d231b058e3f85ff8c27&w=1380",
        "origin": "Italian"
    },
    {
        "name": "Beef Stir Fry",
        "price_EUR": 15.25,
        "description": "Tender strips of beef stir-fried with mixed vegetables in a savory sauce.",
        "ingredients": ["beef", "mixed vegetables", "soy sauce", "ginger", "garlic"],
        "img": "https://img.freepik.com/free-photo/close-up-delicious-asian-food_23-2150535859.jpg?t=st=1713959830~exp=1713963430~hmac=5aec003e13629bcff0755d1ffd49a91eab9f103722e62ecad30b7937aa7f77ed&w=1380",
        "origin": "US"
    },
    {
        "name": "Fettuccine Alfredo",
        "price_EUR": 12.99,
        "description": "Italian pasta dish made with fettuccine noodles tossed in a creamy Alfredo sauce.",
        "ingredients": ["fettuccine noodles", "cream", "butter", "Parmesan cheese"],
        "img": "https://img.freepik.com/free-photo/homemade-fettuccine-with-creamy-seafood-sauce-generated-by-ai_24640-82408.jpg?t=st=1713960399~exp=1713963999~hmac=99530fe0926bc6e7208b707885db3c628022bbe222f2288e0a679c2708441663&w=1380",
        "origin": "Italian"
    },
    {
        "name": "Falafel Wrap",
        "price_EUR": 9.50,
        "description": "Middle Eastern wrap filled with crispy falafel balls, hummus, lettuce, tomatoes, and tahini sauce.",
        "ingredients": ["falafel", "hummus", "lettuce", "tomatoes", "tahini sauce", "wrap"],
        "img": "https://img.freepik.com/free-photo/grilled-beef-sandwich-rustic-homemade-bread-generated-by-ai_188544-53712.jpg?t=st=1713960439~exp=1713964039~hmac=1f266c36473d6b9fca9e03eb71cc27109d84e1ee7f49dff7f7b610203909a236&w=1380",
        "origin": "Mexican"
    },
    {
        "name": "Shrimp Pad Thai",
        "price_EUR": 14.50,
        "description": "A delicious variation of the traditional Pad Thai with shrimp instead of tofu.",
        "ingredients": ["rice noodles", "shrimp", "bean sprouts", "peanuts", "lime"],
        "img": "https://img.freepik.com/free-photo/stir-fried-prawn-vegetable-lunch-bowl-generated-by-ai_188544-24698.jpg?t=st=1713960469~exp=1713964069~hmac=8bea13ff884c036abceb47ecb93f4c560645c5214a929e39b126f9df0c23b216&w=1380",
        "origin": "Asian"
    },
    {
        "name": "Chicken Quesadilla",
        "price_EUR": 10.99,
        "description": "Mexican dish made with grilled chicken, melted cheese, and vegetables folded in a flour tortilla.",
        "ingredients": ["grilled chicken", "cheese", "vegetables", "flour tortilla"],
        "img": "https://img.freepik.com/free-photo/grilled-beef-taco-with-fresh-guacamole-cilantro-generated-by-ai_188544-43106.jpg?t=st=1713960506~exp=1713964106~hmac=8417155689adae73f819b961e6c6669385c686cbed9dc75780ef03e35429753f&w=1380",
        "origin": "US"
    },
    {
        "name": "Vegan Pesto Pasta",
        "price_EUR": 10.99,
        "description": "A vegan version of the classic pesto pasta, made with fresh basil pesto, pine nuts, and sun-dried tomatoes.",
        "ingredients": ["Pasta", "Fresh basil", "Pine nuts", "Garlic", "Olive oil", "Sun-dried tomatoes"],
        "img": "https://img.freepik.com/free-photo/delicious-pasta-plate_23-2150690779.jpg?t=st=1713960529~exp=1713964129~hmac=2fb5177db404a8c04fea971e883ab3d353523fc5d0026b12a83a5ddfea3e4e41&w=826",
        "origin": "Veggie"
    },
    {
        "name": "Curry Rice with Vegetables",
        "price_EUR": 11.50,
        "description": "An aromatic and spicy dish of curry rice with mixed vegetables, such as cauliflower, carrots, and peas.",
        "ingredients": ["Rice", "Curry powder", "Coconut milk", "Cauliflower", "Carrots", "Peas"],
        "img": "https://img.freepik.com/free-photo/fresh-healthy-vegetarian-meal-with-cooked-vegetables-wooden-table-generated-by-artificial-intelligence_188544-124577.jpg?t=st=1713960554~exp=1713964154~hmac=6b4c68273f540b4addc1da143c34d4650143ad43c538e0f61b65cd1796cbaa2e&w=1380",
        "origin": "Veggie"
    },
    {
        "name": "Vegan Tofu Stir-Fry",
        "price_EUR": 12.75,
        "description": "A flavorful stir-fry dish made with tofu, bell peppers, broccoli, and a savory sauce.",
        "ingredients": ["Tofu", "Bell peppers", "Broccoli", "Soy sauce", "Garlic", "Ginger"],
        "img": "https://img.freepik.com/free-photo/close-up-delicious-asian-food_23-2150535859.jpg?t=st=1713959830~exp=1713963430~hmac=5aec003e13629bcff0755d1ffd49a91eab9f103722e62ecad30b7937aa7f77ed&w=1380",
        "origin": "Veggie"
    },
    {
        "name": "Hummus and Falafel Plate",
        "price_EUR": 9.25,
        "description": "A Middle Eastern-inspired plate with creamy hummus, crispy falafel balls, and fresh salad.",
        "ingredients": ["Hummus", "Falafel", "Tomatoes", "Cucumbers", "Lettuce", "Tahini sauce"],
        "img": "https://img.freepik.com/free-photo/fresh-vegetables-plate-perfect-salad-generated-by-ai_188544-18116.jpg?t=st=1713960614~exp=1713964214~hmac=368589c760ffbda1bcef0fee9bc672ad593ebdbd4f463a0bdf9c3aa43f6614ec&w=1380",
        "origin": "Veggie"
    },
    {
        "name": "Vegan Mushroom Risotto",
        "price_EUR": 13.99,
        "description": "A creamy and rich risotto made with Arborio rice, mushrooms, vegetable broth, and nutritional yeast.",
        "ingredients": ["Arborio rice", "Mushrooms", "Vegetable broth", "Onions", "Garlic", "Nutritional yeast"],
        "img": "https://img.freepik.com/free-photo/edible-mushroom-risotto-with-parsley-parmesan-cheese-generated-by-ai_188544-38463.jpg?t=st=1713960637~exp=1713964237~hmac=513632fec05df96340a94d47b70ac77d3729c0c5fd501ea214a9e4d36626ef30&w=1380",
        "origin": "Veggie"
    },
    {
        "name": "Belgian Waffles",
        "price_EUR": 9.99,
        "description": "A classic Belgian breakfast treat, these waffles are light, fluffy, and served with powdered sugar, whipped cream, and fresh berries.",
        "ingredients": ["flour", "eggs", "milk", "butter", "sugar", "baking powder"],
        "img": "https://img.freepik.com/free-photo/rustic-waffle-stack-with-sweet-homemade-berry-sauce-generated-by-ai_188544-27350.jpg?t=st=1713960675~exp=1713964275~hmac=fe4eafd6192b16629adcbdebc65c4bb9224bd3a7956be558702205d765303c52&w=1380",
        "origin": "Local"
    },
    {
            "name": "Mussels with Frites",
            "price_EUR": 14.99,
            "description": "A beloved Belgian dish featuring fresh mussels steamed in a flavorful broth of white wine, garlic, and herbs, served with crispy fries.",
            "ingredients": ["mussels", "white wine", "garlic", "shallots", "butter", "parsley", "potatoes"],
            "img": "https://img.freepik.com/free-photo/high-angle-delicious-oysters-arrangement_23-2150301976.jpg?t=st=1713960708~exp=1713964308~hmac=09b21c7b2c205786c51c42aafa31cb7ec95e18159ee097e787e06a543ca9f2c5&w=1380",
            "origin": "Local"
    },
    {
        "name": "Stoofvlees (Flemish Beef Stew)",
        "price_EUR": 16.50,
        "description": "A hearty and comforting stew made with tender beef simmered in beer and flavored with onions, carrots, and spices.",
        "ingredients": ["beef", "beer", "onions", "carrots", "brown sugar", "bay leaves"],
        "img": "https://img.freepik.com/free-photo/braised-beef-stew-with-fresh-vegetables-herbs-generated-by-ai_24640-80879.jpg?t=st=1713960733~exp=1713964333~hmac=b32b728038813b2af95a2f940c3d760687396b01b00c5affe62328ffae3db5ef&w=1380",
        "origin": "Local"
    },
        
    {
        "name": "Speculoos",
        "price_EUR": 8.25,
        "description": "A traditional Belgian spiced biscuit, crunchy and fragrant, made with a blend of cinnamon, nutmeg, cloves, and other spices.",
        "ingredients": ["flour", "butter", "brown sugar", "cinnamon", "nutmeg", "cloves"],
        "img": "https://img.freepik.com/free-photo/delicious-cookies-arrangement_23-2150688145.jpg?t=st=1713960913~exp=1713964513~hmac=7bc9b850a585bea9c7339cef1456efe48a7e2047e4fa80f45c5f3f3aaf0e0e65&w=826",
        "origin": "Local"
    },
    {
        "name": "Hummus",
        "price_EUR": 5.99,
        "description": "A creamy and flavorful dip made from mashed chickpeas, tahini, lemon juice, garlic, and olive oil, often served as an appetizer.",
        "ingredients": ["chickpeas", "tahini", "lemon juice", "garlic", "olive oil"],
        "img": "https://img.freepik.com/free-photo/fresh-hummus-spread-pita-bread-appetizer-generated-by-ai_188544-53692.jpg?t=st=1713960943~exp=1713964543~hmac=811a777d156db01e124d42a6c15b44efec8bbae060c52374d29510357d87cb58&w=1380",
        "origin": "Arab"
    },
    {
        "name": "Shawarma",
        "price_EUR": 12.50,
        "description": "A popular Middle Eastern street food, shawarma features thinly sliced marinated meat (usually chicken, beef, or lamb) wrapped in pita bread with tahini sauce, vegetables, and pickles.",
        "ingredients": ["marinated meat (chicken, beef, lamb)", "pita bread", "tahini sauce", "vegetables", "pickles"],
        "img": "https://img.freepik.com/free-photo/burrito-with-meat-vegetables-it_188544-16138.jpg?t=st=1713960967~exp=1713964567~hmac=2c2af6bea85628b22c7f90046ff3ca224503eab2ba6b471ad9b74a672efdb606&w=1380",
        "origin": "Arab"
    },
    {
        "name": "Baklava",
        "price_EUR": 8.99,
        "description": "A sweet and indulgent pastry made of layers of thin phyllo dough filled with chopped nuts (often pistachios or walnuts), sweetened with syrup or honey, and flavored with spices like cinnamon and cloves.",
        "ingredients": ["phyllo dough", "nuts (pistachios, walnuts)", "syrup or honey", "spices (cinnamon, cloves)"],
        "img": "https://img.freepik.com/free-photo/baked-baklava-slice-with-honey-walnuts-generated-by-ai_188544-53866.jpg?t=st=1713960997~exp=1713964597~hmac=f9e1391d89113af27f9322b08ddf248932d04a90d57528143f85bbb2b5b2c50d&w=1380",
        "origin": "Arab"
    },
    {
        "name": "Mojito",
        "price_EUR": 13.99,
        "description": "A refreshing cocktail originating from Cuba, made with white rum, lime juice, sugar, soda water, and mint.",
        "ingredients": ["white rum", "lime juice", "sugar", "soda water", "mint leaves"],
        "img": "https://img.freepik.com/free-photo/cocktail-ice-mint-leaf-culinary-drink-mojito-lime-alcohol-freshness-generated-by-artificial-intelligence_188544-110589.jpg?t=st=1713961018~exp=1713964618~hmac=d009f55a0c430dc0df66f0a72a906ea6028db1e9f9a6c15498c7ed67541a424f&w=1380",
        "origin":"Drinks",
    },
    {
        "name": "Margarita",
        "price_EUR": 13.99,
        "description": "A classic Mexican cocktail made with tequila, lime juice, and orange liqueur, often served with salt on the rim of the glass.",
        "ingredients": ["tequila", "lime juice", "orange liqueur"],
        "img": "https://img.freepik.com/free-photo/refreshing-cocktail-with-lime-lemon-citrus-fruit-garnish-generated-by-artificial-intelligence_188544-109917.jpg?t=st=1713965002~exp=1713968602~hmac=529a0c4dbdb0539e9ae10aef4551a566790f95ea92a13bd4d12ebc1c67c2a4ba&w=1800",
        "origin":"Drinks"
    },
    {
        "name": "Piña Colada",
        "price_EUR": 13.99,
        "description": "A tropical cocktail made with rum, coconut cream, and pineapple juice, typically served blended or shaken with ice.",
        "ingredients": ["rum", "coconut cream", "pineapple juice"],
        "img": "https://img.freepik.com/free-photo/fresh-pineapple-cocktail-with-mint-leaf-wooden-table-generated-by-artificial-intelligence_188544-129027.jpg?t=st=1713965039~exp=1713968639~hmac=c3601830faaa3d02caff7da78a47905ecfec979094a01ccdf5561e3d03bc5540&w=1800",
        "origin":"Drinks"
    },
    {
        "name": "Tiramisù",
        "price_EUR": 13.99,
        "description": "An Italian dessert made with layers of coffee-soaked ladyfingers, mascarpone cheese, cocoa powder, and sometimes liqueur.",
        "ingredients": ["ladyfingers", "mascarpone cheese", "coffee", "cocoa powder", "liqueur"],
        "img": "https://img.freepik.com/free-photo/layered-chocolate-tiramisu-cake-with-mascarpone-cream-generated-by-ai_188544-18033.jpg?t=st=1713964757~exp=1713968357~hmac=2459f4d979272382fbf0eca524356ec001e346a9b7f57c347cc38990828124f8&w=1800",
        "origin":"Desserts"
    },
    {
        "name": "Crème Brûlée",
        "price_EUR": 13.99,
        "description": "A French dessert consisting of a rich custard base topped with a layer of caramelized sugar.",
        "ingredients": ["cream", "egg yolks", "sugar", "vanilla bean"],
        "img": "https://img.freepik.com/free-photo/sweet-tart-with-fresh-fruit-cream-generated-by-ai_188544-18152.jpg?t=st=1713964873~exp=1713968473~hmac=182cbdd9d2d307a4a68f4c6a847951727db1ecfe6373ef249cb310cd3a64cf82&w=1800",
        "origin": "Desserts"
    },
    {
        "name": "Baklava",
        "price_EUR": 13.99,
        "description": "A sweet and indulgent pastry made of layers of thin phyllo dough filled with chopped nuts (often pistachios or walnuts), sweetened with syrup or honey, and flavored with spices like cinnamon and cloves.",
        "ingredients": ["phyllo dough", "nuts (pistachios, walnuts)", "syrup or honey", "spices (cinnamon, cloves)"],
        "img": "https://img.freepik.com/free-photo/baklava-dessert-with-pistachio-delicious-cuisine_1268-27884.jpg?t=st=1713964910~exp=1713968510~hmac=a4c34d4721badc69ab78b531796474b71abdd0e05903cf9ccd1d945a03f9b66e&w=1480",
        "origin": "Desserts"
    }
];

//Creates a menu item card
function createMenuItemCard(menuItem) {
    //Create a div element for the card
    const card = document.createElement('div');
    card.classList.add('menu-item');
    
    //create elements for the name, price, description ect.
    const name = document.createElement('h3');
    name.textContent = menuItem.name;
    
    const description = document.createElement('p'); 
    description.textContent = menuItem.description; 
    
    const price = document.createElement('p');
    price.textContent = `Price: €${menuItem.price_EUR.toFixed(2)}`;
    
    const image = document.createElement('img');
    image.src = menuItem.img;
    image.alt = menuItem.name;
    
    const origin = document.createElement('p');
    origin.textContent = menuItem.origin;
    origin.classList.add('origin');
    
    const addToCartButton = document.createElement('button');
    // Adds event listener to cart button to add one to the cart
    addToCartButton.classList.add('cart');
    addToCartButton.textContent = 'Add to Cart';
    addToCartButton.addEventListener('click',() => {
        addToCart(menuItem);
    })
    
    //append elements to the card
    card.appendChild(image);
    card.appendChild(name);
    card.appendChild(description);
    card.appendChild(addToCartButton);
    card.appendChild(origin);
    card.appendChild(price);
    
    return card;
}
    
// Function to add menu item cards to the body of the HTML document
function addMenuItemsToBody(menuItems) {
    const menuContainer = document.querySelector('.menu-container');
    // Loop through the menu items and create a card for each one
    menuItems.forEach(menuItem => {
        // Create a card for the current menu item
        const menuItemCard = createMenuItemCard(menuItem);
        // Append the card to the body
        menuContainer.appendChild(menuItemCard);
    });
}

// Call the function to add menu item cards to the body
addMenuItemsToBody(menuItems);


// CAROLINE : shopping cart
let cart = {};
function addToCart(item) {
    if (cart[item["name"]]) {
        cart[item["name"]].quantity++;
    }
    else {
        cart[item["name"]] = { name: item["name"], quantity: 1 };
    }
    showCart();
}

function removeFromCart(item) {
    if (cart[item["name"]].quantity == 1) {
        delete cart[item["name"]];
    }
    else {
        cart[item["name"]].quantity--;
    }
    showCart();
}

function clearCart() {
    cart = {};
    showCart();
}
const cartModal = document.querySelector(".cart_modal");

function showCart() {
    // resets contents of shopping cart container
    const cartContainer = document.querySelector(".shopping_cart")
    cartContainer.innerHTML = "";
    let total = 0;
    if (Object.keys(cart).length === 0) {
        cartContainer.innerHTML = "Your basket is currently empty";
    } 
    else {
        for (let itemName in cart) {
            const itemObj = menuItems.find(item => item.name === itemName);
            if (itemObj) {
                const itemLine = document.createElement("div");
                itemLine.classList.add("dish");
                let lineTotal = itemObj["price_EUR"] * cart[itemName].quantity;
                itemLine.innerHTML = `
                <span><img class="dish_thumbnail" src=${itemObj["img"]} alt=${itemObj["name"]}></span>
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
    const totalDiv = document.createElement("div");
    totalDiv.classList.add("total");
    totalDiv.innerHTML = `<span></span><span>${total.toFixed(2)} €</span>
                        <button class="checkout">Checkout</button>`
    const checkoutButton = totalDiv.querySelector("button");
    checkoutButton.addEventListener("click", (event) => {
        clearCart();
        alert("Thanks for your order!");
    })
    cartContainer.appendChild(totalDiv);
    cartModal.appendChild(cartContainer);
}

// Simulate a cart
addToCart(menuItems[0]);
addToCart(menuItems[0]);
addToCart(menuItems[3]);
addToCart(menuItems[3]);
addToCart(menuItems[2]);

// Toggle shopping cart 
const cartToggle = document.querySelector(".fa-cart-shopping")
cartToggle.addEventListener("click", (event) => {
    if (cartModal.style.display === "block") {
        cartModal.style.display = "none";
    }
    else {
        cartModal.style.display = "block";
    }
});

// Close modal 
const closeModal = document.querySelector("#closeModal");
closeModal.addEventListener("click", (event) => {
    cartModal.style.display = "none";
})

// Add event listeners to filter buttons
const filterButtons = document.querySelectorAll('.filter-btn');
filterButtons.forEach(button => {
    button.addEventListener('click', function() {
        const category = this.id;
        filterMenuItems(category);
    });
});

// Function to filter menu items by category
function filterMenuItems(category) {
    const menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach(item => {
        const origin = item.querySelector('p.origin').textContent; 
        
        // Show or hide the menu item based on the category
        if (category === 'all' || origin === category) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

// DARK MODE
const icon = document.getElementById("icon");
const body = document.querySelector("body");
const container = document.querySelector(".container");
// const logo = document.querySelector(".logo");
const logo = document.getElementsByClassName("logo")[0];
// console.log(typeof(logo));


icon.addEventListener("click", (event) => {
    if(body.classList.contains("dark-theme")){
        body.classList.remove("dark-theme");
        icon.src = "assets/img/moon.png";
        container.style.backgroundImage = "url('assets/images/bg-light.svg')";
        logo.src = "assets/images/logo-light.svg";
        cartModal.classList.remove("dark-theme");
    }
    else {
        body.classList.add("dark-theme");
        icon.src = "assets/img/sun.png";
        container.style.backgroundImage = "url('assets/images/bg-dark.svg')"; 
        logo.src = "assets/images/logo-dark.svg";
        cartModal.classList.add("dark-theme");
    }
})