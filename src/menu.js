import imageDish1 from './images/dish1.jpg';
import imageDish2 from "./images/dish2.jpg";
import imageDish3 from "./images/dish3.jpg";
import imageDish4 from "./images/dish4.jpg";
import imageDish5 from "./images/dish5.jpg";

class Dish
{
    dish = document.createElement('div');
    #name = document.createElement('h2');
    #image = document.createElement('img');
    #description = document.createElement('div');

    static dishNumber = 1;

    constructor(name, imageSource, description)
    {
        this.#name.textContent = name;

        this.#image.src = imageSource;
        this.#image.alt = name;

        this.#description.textContent = description;

        this.dish.appendChild(this.#name);
        this.dish.appendChild(this.#image);
        this.dish.appendChild(this.#description);
        this.dish.classList.add(`d${this.constructor.dishNumber++}`);
    };

    get preparedDish()
    {
        return this.dish;
    };
};

export default function content()
{
    const dishList = document.createElement('div');
    dishList.classList.add('dish-list');

    const dish1 = new Dish(
        "Vegetable Tempura",
        imageDish1,
        `Lightly battered and deep-fried seasonal vegetables, served with a 
        dipping sauce. This dish is a crispy and delicious way to enjoy a 
        variety of fresh vegetables.`
    );
    dishList.appendChild(dish1.preparedDish);

    const dish2 = new Dish(
        "Yasai Itame",
        imageDish2,
        `Stir-fried mixed vegetables with tofu in a savory soy-based sauce.
        This dish is flavorful and packed with nutritious veggies like bell 
        peppers, broccoli, and carrots.`
    );
    dishList.appendChild(dish2.preparedDish);

    const dish3 = new Dish(
        "Inari Sushi",
        imageDish3,
        `Sushi rice wrapped in sweet and savory tofu pockets. This dish is a 
        delightful and slightly sweet option that offers a unique twist on 
        traditional sushi.`
    );
    dishList.appendChild(dish3.preparedDish);

    const dish4 = new Dish(
        "Agedashi Tofu",
        imageDish4,
        `Deep-fried tofu served in a savory dashi broth, topped with grated 
        daikon radish, green onions, and bonito flakes. This dish has a crispy 
        exterior and a soft, creamy interior, making it a favorite among tofu 
        lovers.`
    );
    dishList.appendChild(dish4.preparedDish);

    const dish5 = new Dish(
        "Miso Soup with Vegetables",
        imageDish5,
        `A comforting and nutritious soup made with miso paste, seaweed, tofu, 
        and an assortment of vegetables. This classic Japanese soup is both 
        flavorful and soothing, perfect for starting any meal.`
    );
    dishList.appendChild(dish5.preparedDish);

    return dishList;
};