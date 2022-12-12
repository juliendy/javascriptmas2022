const messages = document.getElementById("messages");
// const title = ":htraE no od ot ffutS";
const xmasMessages = [
    "maerc eci yrT",
    "rewoT leffiE tisiV",
    "noom eht ot snamuh etacoleR",
    "egrahc ni stac tuP",
];

function renderAlienMsgs(arr) {
    for (let i = 0; i < arr.length; i++) {
        let alienMsg = document.createElement("li");
        alienMsg.textContent = arr[i];
        messages.appendChild(alienMsg);
    }
}

renderAlienMsgs(xmasMessages);

function reverseString(str) {
    return str.split("").reverse().join("");
}

function reverseStringsInArray(arr) {
    return arr.map(reverseString);
}

// translate messages from the aliens
const translateBtn = document.getElementById("translate-btn");
translateBtn.addEventListener("click", () => {
    let translated = reverseStringsInArray(xmasMessages)
    messages.innerHTML = ""
    renderAlienMsgs(translated)
})

// MISC SOLUTIONS

// To reverse the strings in an array, we can use the map() method to apply the reverseString() function to each element in the array.
// The map() method is a higher-order function that allows you to apply a function to each element in an array and return a new array with the results. :)

// Solution 2:
// function reverseStringsInArray(arr) {
//     return arr.map((str) => str.split("").reverse().join(""));
// }

// This version uses the map method to apply the reverse method to each element in the array,
// which reverses the order of the characters in the string. The join method is then used to concatenate the reversed characters back into a string.

// Solution 3:
// function reverseStringsInArray(arr) {
//     let reversed = [];

//     for (let i = 0; i < arr.length; i++) {
//         let str = arr[i];
//         let reversedStr = "";

//         for (let j = str.length - 1; j >= 0; j--) {
//             reversedStr += str[j];
//         }

//         reversed.push(reversedStr);
//     }

//     return reversed;
// }

// Either of these methods will return a new array with all of the strings in the input array reversed.
// Solution 3 should (?) ensure there are no potential edgecases.

// console.log(reverseString(title));
// console.log(reverseStringsInArray(messages));
