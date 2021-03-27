const stringCalculator = require("./stringCalculator");

describe("stringCalculator", () => {
  beforeEach(() => {});
  test("shoud be able return zero for empty string", () => {
    const result = stringCalculator("");
    expect(result).toEqual(0);
  });
  test("shoud be able return a number for number in string", () => {
    const result = stringCalculator("2");
    expect(result).toEqual(2);
  });
});
