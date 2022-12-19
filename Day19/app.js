function centuryFromYear(num) {
    return Math.floor((num - 1) / 100) + 1;
}

// The + 1 at the end of the function is added to account for the fact that the first century starts at the year 1, rather than at year 0 i.e. 201, 301 etc.,

/**
 * Test Suite
 */
describe("centuryFromYear()", () => {
    it("returns current century", () => {
        // arrange
        const year = 1905;

        // act
        const result = centuryFromYear(year);

        // log
        console.log("result 1: ", result);

        // assert
        expect(result).toBe(20);
    });

    it("returns current century for edge case of start of century", () => {
        // arrange
        const year = 1700;

        // act
        const result = centuryFromYear(year);

        // log
        console.log("result 2: ", result);

        // assert
        expect(result).toBe(17);
    });
});
