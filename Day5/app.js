//    It's the day after Halloween 🎃 and all the candy is on sale!

//    To buy up all the candy, use map() and filter() to put all the
//    candy into a `shoppingCart` array.

//    The new array should contain only the item and the price, like
//    this:

//    Expected output:
//    [
//        {item: "🍭", price: 2.99},
//        {item: "🍫", price: 1.99},
//        {item: "🍬", price: 0.89}
//     ]

import products from "./data.js";

const main = document.body.querySelector("main");

function getSaleItems(data) {
    return data
        .filter((item) => item.type === "sweet")
        .map(({ item, price }) => {
            main.innerHTML += `
            <div class="candy">
                <p>${item}</p>
                <p>${price}</p>
            </div>
        `;
            return { item, price };
        });
}

const shoppingCart = getSaleItems(products);

console.log(shoppingCart);
