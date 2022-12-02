const main = document.querySelector("main");

function panic(worry) {
    let bigWorry = worry.toUpperCase();
    let screamyWorry = bigWorry.split(" ").join(" 😱 ") + "!";
    main.innerHTML = `<h1>${screamyWorry}</h1>`;
}

// Test your function

panic("oh my god there is no more tea")
// panic("hello??");

// Test your function
console.log(panic);
console.log(panic("winter is coming"))
