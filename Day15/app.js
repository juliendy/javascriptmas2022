// get the form and the result paragraph
const form = document.querySelector("form");
const result = document.querySelector("#result");

// function to check if a word is a palindrome
function isPalindrome(str) {
    let i = 0;
    let j = str.length - 1;

    while (i < j) {
        // check if the characters at the current positions match, ignoring case
        if (str[i].toLowerCase() !== str[j].toLowerCase()) {
            return false;
        }

        i++;
        j--;
    }

    return true;
}

// function to reverse a word
function reverseWord(word) {
    let reversed = "";
    for (let i = word.length - 1; i >= 0; i--) {
        // check if the current character is uppercase
        if (i === 0 && word[i] === word[i].toUpperCase()) {
            // if it is, don't make the corresponding character in the reversed word uppercase
            reversed += word[i].toLowerCase();
        } else if (word[i] === word[i].toUpperCase()) {
            // if it is, make the corresponding character in the reversed word uppercase too
            reversed += word[i].toUpperCase();
        } else {
            // if it's not, make the corresponding character in the reversed word lowercase
            reversed += word[i].toLowerCase();
        }
    }
    return reversed;
}


// listen for submit events on the form
form.addEventListener("submit", (event) => {
    // prevent the form from actually submitting
    event.preventDefault();

    // get the word from the input field
    const word = document.querySelector("#word").value;

    // reverse the word
    let reversed = reverseWord(word);

    // check if the first character of the original word was uppercase
    if (word[0] === word[0].toUpperCase()) {
        // If it was, make the first character of the reversed word uppercase too
        reversed = reversed[0].toUpperCase() + reversed.substring(1);
    }

    // check if the original word is a palindrome
    const isWordPalindrome = isPalindrome(word);

    // show the result
    result.textContent = `The word "${word}" backwards is "${reversed}". ${
        isWordPalindrome ? "It is a palindrome!" : "It is not a palindrome."
    }`;
});
