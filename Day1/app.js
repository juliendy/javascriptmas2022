const main = document.querySelector("main");

function PANIC(input) {
    // Convert the input string to upper case and add an exclamation point
    // at the end.
    let output = input.toUpperCase() + "!";

    // If the input string is a phrase or sentence, add a 😱 emoji in between
    // each word.
    if (input.split(" ").length > 1) {
        output = output.split(" ").join(" 😱 ");
        main.innerHTML = `<h1>${output}</h1>`;
    }

    return output;
}

// Should print "HELLO!"
console.log(PANIC("Hello"));

// Should print "I'M 😱 ALMOST 😱 OUT 😱 OF 😱 COFFEE!"
console.log(PANIC("I'm almost out of coffee"));
