const dinnerFoods = ["🍝", "🍔", "🌮"];

const menu = document.querySelector("#menu");

menu.innerHTML = dinnerFoods
    .map((food) => `<div class="food">${food}</div>`)
    .join("");
