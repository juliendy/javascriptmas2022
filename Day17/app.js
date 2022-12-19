const main = document.querySelector("main");

const kittyScores = [
    [39, 99, 76],
    89,
    98,
    [87, 56, 90],
    [96, 95],
    40,
    78,
    50,
    [63],
];

const kittyPrizes = [
    ["💰", "🐟", "🐟"],
    "🏆",
    "💐",
    "💵",
    ["💵", "🏆"],
    ["🐟", "💐", "💐"],
    "💵",
    "💵",
    ["🐟"],
    "🐟",
];

function flatten(arr) {
    return arr.reduce(
        (acc, val) => acc.concat(Array.isArray(val) ? flatten(val) : val),
        []
    );
    // this version uses the reduce method to iterate through the elements in the array and build up the result. 
    // if an element is an array, it recursively calls the flatten function on that element. 
    // if it is not an array, it adds it to the result array. the concat method is used to merge the intermediate results together.

    // method 2
    // function flatten(arr) {
    //     return arr.flat(2); 
    // could also use .flat(Infinity) to flatten all the arrays nested within. arr.flat is the method to use for this in real world situation.
    // }
}

function render(arr) {
    arr.forEach((item) => {
        main.innerHTML += `<div class="gift"s>${item}</div>`;
    });
    main.innerHTML += `<img src="pumpkin.png" alt="pumpkin the cat with xmas hat on" class="pumpkin" />`;
}

console.log(flatten(kittyPrizes));
console.log(flatten(kittyScores));
render(flatten(kittyPrizes));