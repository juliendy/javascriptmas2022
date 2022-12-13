const emojis = {
    smile: "😊",
    angry: "😠",
    party: "🎉",
    heart: "💜",
    cat: "🐱",
    dog: "🐕",
    green_heart: "💚",
    red_heart: "❤️",
    black_heart: "🖤",
    white_heart: "🤍",
};

function emojifyWord(word) {
    // Use the replace() method to remove the colons from the beginning and end of the word
    word = word.replace(/^:|:$/g, "");
    // Check if the resulting word exists in the emojis object as a key
    if (emojis.hasOwnProperty(word)) {
        // Return the corresponding value from the emojis object
        return emojis[word];
    }
    // Return the original word
    return word;
}

function emojifyPhrase(phrase) {
    // Split the phrase into individual words
    let words = phrase.split(" ");
    // Map over each word and emojify it, then join the emojified words back together into a single string
    return words.map(emojifyWord).join(" ");
}

// console.log(emojifyWord(":heart:"));
// console.log(emojifyWord(":flower:"));
// console.log(emojifyWord("elephant"));

// console.log(emojifyPhrase("I :heart: my :cat:"));
// console.log(emojifyPhrase("I :heart: my :elephant:"));

function renderPhrase(phrase) {
    document.body.innerHTML += `<p>${phrase}</p>`;
}

renderPhrase(emojifyPhrase("Merry :red_heart: JavaScriptmas :green_heart:"));
