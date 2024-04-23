const menuItems = [
    {
        "name": "Pad Thai",
        "price_EUR": 12.50,
        "description": "A traditional Thai stir-fried rice noodle dish with tofu, bean sprouts, peanuts, and lime.",
        "ingredients": ["rice noodles", "tofu", "bean sprouts", "peanuts", "lime"],
        "img": "https://www.noracooks.com/wp-content/uploads/2023/01/30MinuteVeganPadThai-5-2.jpg",
        "origin": "Asian"
    },
    {
        "name": "Margherita Pizza",
        "price_EUR": 9.99,
        "description": "A classic Italian pizza topped with tomato sauce, mozzarella cheese, and fresh basil.",
        "ingredients": ["tomato sauce", "mozzarella cheese", "basil"],
        "img": "https://images.prismic.io/eataly-us/ed3fcec7-7994-426d-a5e4-a24be5a95afd_pizza-recipe-main.jpg?auto=compress,format",
        "origin": "Italy"
    },
    {
        "name": "Sushi Platter",
        "price_EUR": 18.75,
        "description": "Assorted sushi rolls including tuna, salmon, California rolls, and avocado rolls.",
        "ingredients": ["rice", "fish (tuna, salmon)", "avocado", "seaweed", "soy sauce"],
        "img": "https://az727718.vo.msecnd.net/e5184b75632349358c9031c2ef988e6b/images/0ac13014da6f4fd1adee7eb7fc2f70eb_1080w.jpg",
        "origin": "Asian"
    },
    {
        "name": "Chicken Tikka Masala",
        "price_EUR": 14.99,
        "description": "A popular Indian dish with tender chicken pieces cooked in a creamy tomato sauce with spices.",
        "ingredients": ["chicken", "tomato sauce", "cream", "spices"],
        "img": "https://www.seriouseats.com/thmb/DbQHUK2yNCALBnZE-H1M2AKLkok=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/chicken-tikka-masala-for-the-grill-recipe-hero-2_1-cb493f49e30140efbffec162d5f2d1d7.JPG",
        "origin": "Asian"
    },
    {
        "name": "Tacos al Pastor",
        "price_EUR": 10.50,
        "description": "Mexican tacos filled with marinated pork, pineapple, onions, and cilantro.",
        "ingredients": ["marinated pork", "pineapple", "onions", "cilantro", "tortillas"],
        "img": "https://www.thespruceeats.com/thmb/wQd2RvxH1Lh9536W5LY1T_VSyT8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/tacos-al-pastor-recipe-4172074-hero-01-7fb1a4455397486b8485ac8ec2ca3c5a.jpg",
        "origin": "Mexico"
    },
    {
        "name": "Pasta Carbonara",
        "price_EUR": 11.75,
        "description": "Italian pasta dish made with spaghetti, eggs, Parmesan cheese, pancetta, and black pepper.",
        "ingredients": ["spaghetti", "eggs", "Parmesan cheese", "pancetta", "black pepper"],
        "img": "https://lh3.googleusercontent.com/proxy/SA9GbVH7_owZku9WpqQt3Xqw_9AVBGnidOnlvUmS81ZgN9VTQCRvXZREL0CygOYq6T4Kos89WPaSP2OgDARvWEocOihK8lJZ8c4SUTwR5KKeWeC_Dxjp_RDKN29YIvyHKnti",
        "origin": "Italy"
    },
    {
        "name": "Hamburger",
        "price_EUR": 8.99,
        "description": "A classic American hamburger served with lettuce, tomato, onions, pickles, and cheese.",
        "ingredients": ["beef patty", "lettuce", "tomato", "onions", "pickles", "cheese", "bun"],
        "img": "https://www.recettesetcabas.com/data/recettes/3330-1-fiche@65B234F0-hamburger-savoyard-a-la-raclette-salade.webp",
        "origin": "American"
    },
    {
        "name": "Chicken Curry",
        "price_EUR": 13.50,
        "description": "A flavorful Indian curry made with tender chicken pieces, onions, tomatoes, and aromatic spices.",
        "ingredients": ["chicken", "onions", "tomatoes", "spices"],
        "img": "https://img.hellofresh.com/f_auto,fl_lossy,q_auto,w_1200/hellofresh_s3/image/indian-style-chicken-curry-4dcbcad3.jpg",
        "origin": "Asian"
    },
    {
        "name": "Miso Soup",
        "price_EUR": 4.99,
        "description": "A traditional Japanese soup made with miso paste, tofu, seaweed, and green onions.",
        "ingredients": ["miso paste", "tofu", "seaweed", "green onions"],
        "img": "https://www.japanesecooking101.com/wp-content/uploads/2012/03/IMG_3950.jpeg",
        "origin": "Asian"
    },
    {
        "name": "Caprese Salad",
        "price_EUR": 7.50,
        "description": "A refreshing Italian salad made with fresh tomatoes, mozzarella cheese, basil, and balsamic glaze.",
        "ingredients": ["tomatoes", "mozzarella cheese", "basil", "balsamic glaze"],
        "img": "https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2019/07/Caprese-Salad-main-1.jpg",
        "origin": "Italy"
    },
    {
        "name": "Beef Stir Fry",
        "price_EUR": 15.25,
        "description": "Tender strips of beef stir-fried with mixed vegetables in a savory sauce.",
        "ingredients": ["beef", "mixed vegetables", "soy sauce", "ginger", "garlic"],
        "img": "https://cdn.momsdish.com/wp-content/uploads/2021/07/Steak-Stir-Fry-Recipe-015.jpg",
        "origin": "American"
    },
    {
        "name": "Fettuccine Alfredo",
        "price_EUR": 12.99,
        "description": "Italian pasta dish made with fettuccine noodles tossed in a creamy Alfredo sauce.",
        "ingredients": ["fettuccine noodles", "cream", "butter", "Parmesan cheese"],
        "img": "https://plantbasedonabudget.com/wp-content/uploads/2020/10/Fettuccine-Alfredo-Plant-Based-on-a-Budget-1-2.jpg",
        "origin": "Italy"
    },
    {
        "name": "Falafel Wrap",
        "price_EUR": 9.50,
        "description": "Middle Eastern wrap filled with crispy falafel balls, hummus, lettuce, tomatoes, and tahini sauce.",
        "ingredients": ["falafel", "hummus", "lettuce", "tomatoes", "tahini sauce", "wrap"],
        "img": "https://fooddoodz.tv/assets/images/2020-05-19-Falafel-Wraps/2020-05-19-Falafel-Wraps--Hero-Image-900.jpg",
        "origin": "Mexican"
    },
    {
        "name": "Shrimp Pad Thai",
        "price_EUR": 14.50,
        "description": "A delicious variation of the traditional Pad Thai with shrimp instead of tofu.",
        "ingredients": ["rice noodles", "shrimp", "bean sprouts", "peanuts", "lime"],
        "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjIgp_sj5crLgRBywyf3QWQ7b8w23KBtLFJ7n6pHdnOw&s",
        "origin": "Asian"
    },
    {
        "name": "Chicken Quesadilla",
        "price_EUR": 10.99,
        "description": "Mexican dish made with grilled chicken, melted cheese, and vegetables folded in a flour tortilla.",
        "ingredients": ["grilled chicken", "cheese", "vegetables", "flour tortilla"],
        "img": "https://gimmedelicious.com/wp-content/uploads/2020/06/Chicken-Quesadilla-sq-1-1.jpg",
        "origin": "American"
    }
]
// GIOVANNI  : Generate cards - OK


// CAROLINE :  shopping cart
let cart = {};
const main = document.querySelector("main");
const cartContainer = document.querySelector(".shopping_cart");

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

function showCart() {
    // resets contents of shopping cart container
    cartContainer.innerHTML = "";
    let total = 0;
    for (let itemName in cart) {
        const itemObj = menuItems.find(item => item.name === itemName);
        if (itemObj) {
            const itemLine = document.createElement("div");
            itemLine.classList.add("dish");
            let lineTotal = itemObj["price_EUR"] * cart[itemName].quantity;
            itemLine.innerHTML = `
            <span><img class="dish_thumbnail" src=${itemObj["img"]} alt=${itemObj["name"]}></span>
            <span class="dish_name">${itemObj["name"]}</span>
            <span class="dish_quantity"><button class="remove">-</button>${cart[itemName].quantity}<button class="add">+</button></span>
            <span class="line_total">€ ${lineTotal.toFixed(2)}</span>
            `;
            cartContainer.appendChild(itemLine);
            total += lineTotal;
            // Add event listeners to + and - buttons to increase/decrease quantity of item
            const addButton = itemLine.querySelector(".add");
            const removeButton = itemLine.querySelector(".remove");
            addButton.addEventListener("click", () => {
                addToCart(itemObj);
            });
            removeButton.addEventListener("click", () => {
                removeFromCart(itemObj);
            });
        }
        else {
            cartContainer.innerHTML = "Your basket is currently empty";
        }
    }
    const totalDiv = document.createElement("div");
    totalDiv.classList.add("total");
    totalDiv.innerHTML = `<button class="checkout">Checkout</button><span>€ ${total.toFixed(2)}</span>`
    const checkoutButton = totalDiv.querySelector("button");
    checkoutButton.addEventListener("click", (event) => {
        clearCart();
        alert("Thanks for your order!");
    })
    cartContainer.appendChild(totalDiv);
    main.appendChild(cartContainer);
}

addToCart(menuItems[0]);
addToCart(menuItems[0]);
addToCart(menuItems[3]);
addToCart(menuItems[3]);
addToCart(menuItems[2]);

// Filters

// TOGGLE DARK MODE
