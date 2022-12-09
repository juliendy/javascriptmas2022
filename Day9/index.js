function capitalizeWord(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}

function toTitleCase(str) {
    return str
        .split(" ")
        .map((word) => capitalizeWord(word))
        .join(" ");
}

// Test your functions
console.log(capitalizeWord("pumpkin"));
console.log(toTitleCase("pumpkin pranced purposefully across the pond"));
