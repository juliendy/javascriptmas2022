// Alternating Caps 
// Write a function that takes in a string of letters
// and returns a sentence in which every other letter is capitalized.

// Example input: "I'm so happy it's Monday"
// Example output: "I'M So hApPy iT'S MoNdAy"


function altCaps(str) {
    // Create an empty result string
    let newStr = "";

    // Loop through the characters in the sentence
    for (let i = 0; i < str.length; i++) {
        // If the current index is even, convert the character to uppercase, otherwise convert it to lowercase
        newStr += i % 2 === 0 ? str[i].toUpperCase() : str[i].toLowerCase();
    }

    // Return the result string
    return newStr;
}

console.log(altCaps("When you visit Portland you have to go to VooDoo Donuts"));
