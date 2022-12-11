const title = ":htraE no od ot ffutS";
const messages = [
    "maerc eci yrT",
    "rewoT leffiE tisiV",
    "noom eht ot snamuh etacoleR",
    "egrahc ni stac tuP",
];


function reverseString(str) {
    return str.split("").reverse().join("");
}

// Solution 1:
function reverseStringsInArray(arr) {
    return arr.map(reverseString);
}

// To reverse the strings in an array, we can use the map() method to apply the reverseString() function to each element in the array. 
// The map() method is a higher-order function that allows you to apply a function to each element in an array and return a new array with the results. :)

// Solution 2:
function reverseStringsInArray(arr) {
    return arr.map((str) => str.split("").reverse().join(""));
}

// This version uses the map method to apply the reverse method to each element in the array, 
// which reverses the order of the characters in the string. The join method is then used to concatenate the reversed characters back into a string.

// Solution 3:
function reverseStringsInArray(arr) {
    let reversed = [];

    for (let i = 0; i < arr.length; i++) {
        let str = arr[i];
        let reversedStr = "";

        for (let j = str.length - 1; j >= 0; j--) {
            reversedStr += str[j];
        }

        reversed.push(reversedStr);
    }

    return reversed;
}

// Either of these methods will return a new array with all of the strings in the input array reversed. 
// Solution 3 should (?) ensure there are no potential edgecases.

console.log(reverseString(title)); // This one will throw an error because there are 2 solutions!!!
console.log(reverseStringsInArray(messages));
