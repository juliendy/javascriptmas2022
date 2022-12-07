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

// Get a reference to the form element
const form = document.querySelector("form");

// Add an event listener to the form that listens for the submit event
form.addEventListener("submit", (event) => {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Get the value of the input field
    const sentence = document.querySelector("#sentence").value;

    // Call the altCaps() function with the sentence as the argument
    const result = altCaps(sentence);

    // Log the result to the console
    console.log(result);

    // Create a new paragraph element
    const paragraph = document.createElement("p");

    // Set the text content of the paragraph to the result
    paragraph.textContent = result;

    // Append the paragraph to the page
    document.body.appendChild(paragraph);

    // Reset form
    form.reset();
});
