function candies(children, candy) {
    return Math.floor(candy / children) * children;
}

// This function combines the two steps of determining the number of candies each child will eat and calculating the total number of candies that will be eaten by the children into a single line of code.

/**
 * Test Suite
 */
describe("candies()", () => {
    it("returns ammount of total equal candy to be eaten", () => {
        // arrange
        const children = 3;
        const candy = 10;

        // act
        const result = candies(children, candy);

        // log
        console.log("result: ", result);

        // assert
        expect(result).toBe(9);
    });
});
