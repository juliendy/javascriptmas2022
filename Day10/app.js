// 📏 Sort by Lenght

// this indexjs file is only for pushing to github.
// to see test working with test suite jasmine: https://scrimba.com/scrim/co94c45a3a33d54f09845d5e8
// will not be working on githubpages!

function sortByLength(strs) {
    return strs.sort((a, b) =>
        a.length !== b.length
            ? a.length - b.length
            : strs.indexOf(a) - strs.indexOf(b)
    );
}

/**
 * Test Suite
 */
describe("sortByLength()", () => {
    it("sorts the strings from shortest to longest", () => {
        // arrange
        const strs = ["abc", "", "aaa", "a", "zz"];

        // act
        const result = sortByLength(strs);

        // log
        console.log("result: ", result);

        // assert
        expect(result).toEqual(["", "a", "zz", "abc", "aaa"]);
    });
});
