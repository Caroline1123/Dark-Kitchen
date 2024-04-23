// GIOVANNI  : Generate cards
// CAROLINE :  shopping cart



// Filters

// TOGGLE DARK MODE

const menu = 
[
    {
        "name": "Pad Thai",
        "price_EUR": 12.50,
        "description": "A traditional Thai stir-fried rice noodle dish with tofu, bean sprouts, peanuts, and lime.",
        "ingredients": ["rice noodles", "tofu", "bean sprouts", "peanuts", "lime"],
        "img": "pad_thai.jpg"
    },
    {
        "name": "Margherita Pizza",
        "price_EUR": 9.99,
        "description": "A classic Italian pizza topped with tomato sauce, mozzarella cheese, and fresh basil.",
        "ingredients": ["tomato sauce", "mozzarella cheese", "basil"],
        "img": "margherita_pizza.jpg"
    },
    {
        "name": "Sushi Platter",
        "price_EUR": 18.75,
        "description": "Assorted sushi rolls including tuna, salmon, California rolls, and avocado rolls.",
        "ingredients": ["rice", "fish (tuna, salmon)", "avocado", "seaweed", "soy sauce"],
        "img": "sushi_platter.jpg"
    },
    {
        "name": "Chicken Tikka Masala",
        "price_EUR": 14.99,
        "description": "A popular Indian dish with tender chicken pieces cooked in a creamy tomato sauce with spices.",
        "ingredients": ["chicken", "tomato sauce", "cream", "spices"],
        "img": "chicken_tikka_masala.jpg"
    },
    {
        "name": "Tacos al Pastor",
        "price_EUR": 10.50,
        "description": "Mexican tacos filled with marinated pork, pineapple, onions, and cilantro.",
        "ingredients": ["marinated pork", "pineapple", "onions", "cilantro", "tortillas"],
        "img": "tacos_al_pastor.jpg"
    },
    {
        "name": "Pasta Carbonara",
        "price_EUR": 11.75,
        "description": "Italian pasta dish made with spaghetti, eggs, Parmesan cheese, pancetta, and black pepper.",
        "ingredients": ["spaghetti", "eggs", "Parmesan cheese", "pancetta", "black pepper"],
        "img": "pasta_carbonara.jpg"
    },
    {
        "name": "Hamburger",
        "price_EUR": 8.99,
        "description": "A classic American hamburger served with lettuce, tomato, onions, pickles, and cheese.",
        "ingredients": ["beef patty", "lettuce", "tomato", "onions", "pickles", "cheese", "bun"],
        "img": "hamburger.jpg"
    },
    {
        "name": "Chicken Curry",
        "price_EUR": 13.50,
        "description": "A flavorful Indian curry made with tender chicken pieces, onions, tomatoes, and aromatic spices.",
        "ingredients": ["chicken", "onions", "tomatoes", "spices"],
        "img": "chicken_curry.jpg"
    },
    {
        "name": "Miso Soup",
        "price_EUR": 4.99,
        "description": "A traditional Japanese soup made with miso paste, tofu, seaweed, and green onions.",
        "ingredients": ["miso paste", "tofu", "seaweed", "green onions"],
        "img": "miso_soup.jpg"
    },
    {
        "name": "Caprese Salad",
        "price_EUR": 7.50,
        "description": "A refreshing Italian salad made with fresh tomatoes, mozzarella cheese, basil, and balsamic glaze.",
        "ingredients": ["tomatoes", "mozzarella cheese", "basil", "balsamic glaze"],
        "img": "caprese_salad.jpg"
    },
    {
        "name": "Beef Stir Fry",
        "price_EUR": 15.25,
        "description": "Tender strips of beef stir-fried with mixed vegetables in a savory sauce.",
        "ingredients": ["beef", "mixed vegetables", "soy sauce", "ginger", "garlic"],
        "img": "beef_stir_fry.jpg"
    },
    {
        "name": "Fettuccine Alfredo",
        "price_EUR": 12.99,
        "description": "Italian pasta dish made with fettuccine noodles tossed in a creamy Alfredo sauce.",
        "ingredients": ["fettuccine noodles", "cream", "butter", "Parmesan cheese"],
        "img": "fettuccine_alfredo.jpg"
    },
    {
        "name": "Falafel Wrap",
        "price_EUR": 9.50,
        "description": "Middle Eastern wrap filled with crispy falafel balls, hummus, lettuce, tomatoes, and tahini sauce.",
        "ingredients": ["falafel", "hummus", "lettuce", "tomatoes", "tahini sauce", "wrap"],
        "img": "falafel_wrap.jpg"
    },
    {
        "name": "Shrimp Pad Thai",
        "price_EUR": 14.50,
        "description": "A delicious variation of the traditional Pad Thai with shrimp instead of tofu.",
        "ingredients": ["rice noodles", "shrimp", "bean sprouts", "peanuts", "lime"],
        "img": "shrimp_pad_thai.jpg"
    },
    {
        "name": "Chicken Quesadilla",
        "price_EUR": 10.99,
        "description": "Mexican dish made with grilled chicken, melted cheese, and vegetables folded in a flour tortilla.",
        "ingredients": ["grilled chicken", "cheese", "vegetables", "flour tortilla"],
        "img": "chicken_quesadilla.jpg"
        }
]


// Dark mode

const icon = document.getElementById("icon");
const body = document.querySelector("body");


icon.addEventListener("click", (event) => {
    if(body.classList.contains("dark-theme")){
        body.classList.remove("dark-theme");
        icon.src = "assets/img/moon.png";
    }
    else{
        body.classList.add("dark-theme");
        icon.src = "assets/img/sun.png";

    }
})








