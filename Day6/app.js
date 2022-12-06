// Review Challenge 4: Taco Tray
// - Help our chef fill a tray with tacos!

function getRandomNumberOfTacos() {
    // Generate a random number between 1 and 10
    const numTacos = Math.floor(Math.random() * 10) + 1;

    // Create an array of the appropriate length, filled with taco emojis
    const tacos = new Array(numTacos).fill("🌮");

    // Return the array of tacos
    return tacos;
}

function putTacosOnTray() {
    return getRandomNumberOfTacos()
        .map(function (taco) {
            return `<div class="taco">${taco}</div>`;
        })
        .join("");
}

document.getElementById("tray").innerHTML = putTacosOnTray();

// button to refresh page w/o f5 or cmd+r
const refreshButton = document.getElementById("refreshButton");

refreshButton.addEventListener("click", refreshPage);

function refreshPage() {
    location.reload();
}
