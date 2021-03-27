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
  test("shoud be able return a sum for comma between numbers", () => {
    const result = stringCalculator("2,1");
    expect(result).toEqual(3);
  });
});
