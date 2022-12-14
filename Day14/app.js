function countVowelConsonant(s) {
    // create an array of characters from the string
    const chars = s.split("");

    // use a regular expression to check if a character is a vowel
    const isVowel = /[aeiou]/i; // i flag means the regex is case-insensitive

    // use reduce to sum the values of the vowels and non-vowels in the string
    const sum = chars.reduce((acc, char) => {
        if (isVowel.test(char)) {
            return acc + 1; // vowels are worth 1
        } else {
            return acc + 2; // non-vowels are worth 2
        }
    }, 0); // start the sum at 0

    return sum;
}

const s = "abcde";
const sum = countVowelConsonant(s);
console.log(sum); // should output 8
