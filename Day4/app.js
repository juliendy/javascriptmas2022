const shushButton = document.querySelector(".whisper");
shushButton.addEventListener("click", renderPhrase);

const phraseArray = [
    "PLEASE STOP SHOUTING.",
    "MA'AM, this is a Wendy's!",
    "HEY GET OVER HERE",
    "Will you EVER Shut UP?",
    "STOP. RIgHT. NoW!",
    "GIVE ME ALL YOUR CooKIES!",
    "oMlEtTE dU FroMmage",
];

function whisper(notSoLoud) {
    if (!notSoLoud || notSoLoud.trim().length === 0) {
        return "This string is empty.";
    } else if (notSoLoud.includes("!")) {
        let quieter = notSoLoud.replaceAll("!", ".");
        return `sshhh... ${quieter.toLowerCase()}`;
    } else {
        return `sshhh... ${notSoLoud.toLowerCase()}`;
    }
}

function renderPhrase() {
    let random = Math.floor(Math.random() * phraseArray.length);
    shushButton.textContent = `${whisper(phraseArray[random])}`;
}

console.log(whisper("PLEASE STOP SHOUTING."));
console.log(whisper("MA'AM, this is a Wendy's!"));
console.log(whisper("that's MY purse! I don't Know YOu!"));
console.log(whisper("!!!"));
console.log(whisper("    "));
console.log(whisper(""));
