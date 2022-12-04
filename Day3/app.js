const faveFoods = {
    breakfast: "german breakfast",
    lunch: "yellow curry and vegetables",
    dinner: "salmon and ginger on rice",
};

const { breakfast, lunch, dinner } = faveFoods;

const meals = document.getElementById("meals");

meals.innerHTML = `
        <h1>My favorite foods</h1>
        <div class="meal-container">
            <p>For breakfast, I like a good ${breakfast}.</p> 
            <img src="images/fruehstueck.png" alt="a german breakfast table with things germans eat" >
        </div>
        <div class="meal-container">
            <p>For lunch, something light like a delicious ${lunch}!</p>
            <img src="images/curry.png" alt="yellow curry with vegetables and tofu" >
        </div>
        <div class="meal-container">
            <p>And lastly for dinner, an easy digestible dinner like ${dinner}.</p>
            <img src="images/salmon.png" alt="a bowl of yellow rice with a juicy piece of salmon on top">
        </div>
`;
