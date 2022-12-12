// 📏 Sort by Lenght

// to see test working with test suite jasmine: https://scrimba.com/scrim/co94c45a3a33d54f09845d5e8

const xmasList = document.getElementById("xmas-list");

function sortByLength(strs) {
    return strs.sort((a, b) =>
        a.length !== b.length
            ? a.length - b.length
            : strs.indexOf(a) - strs.indexOf(b)
    );
}

function printXmasList(arr) {
    let sortedList = sortByLength(arr);
    sortedList.forEach((item) => {
        let toy = document.createElement("li");
        toy.innerText = item;
        xmasList.appendChild(toy);
    });
}

printXmasList([
    "ball",
    "roller blades",
    "dollhouse",
    "yo-yo",
    "Rubik's cube (3x3)",
    "giant Teddy bear",
    "hoverboard",
]);

/**
 * Test Suite
 */
// describe("sortByLength()", () => {
//     it("sorts the strings from shortest to longest", () => {
//         // arrange
//         const strs = ["abc", "", "aaa", "a", "zz"];

//         // act
//         const result = sortByLength(strs);

//         // log
//         console.log("result: ", result);

//         // assert
//         expect(result).toEqual(["", "a", "zz", "abc", "aaa"]);
//     });
// });
