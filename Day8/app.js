// Valid time: Testing

// this indexjs file is only for pushing to github. 
// to see test working with test suite jasmine: https://scrimba.com/scrim/cof42479784434956b6b8815e
// will not be working on githubpages!

function validTime(str) {
    const [hours, minutes] = str.split(":");
    return hours >= 0 && hours < 24 && minutes >= 0 && minutes < 60;
}

/**
 * Test Suite
 */
describe("validTime()", () => {
    it("returns true for valid time", () => {
        // arrange
        const str = "13:58";

        // act
        const result = validTime(str);

        // log
        console.log("result 1: ", result);

        // assert
        expect(result).toBe(true);
    });

    it("returns false when invalid hours", () => {
        // arrange
        const str = "25:51";

        // act
        const result = validTime(str);

        // log
        console.log("result 1: ", result);

        // assert
        expect(result).toBe(false);
    });

    it("returns false when invalid minutes", () => {
        // arrange
        const str = "02:76";

        // act
        const result = validTime(str);

        // log
        console.log("result 1: ", result);

        // assert
        expect(result).toBe(false);
    });
});