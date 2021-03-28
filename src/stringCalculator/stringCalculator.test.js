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
  test("shoud be able return a sum for new line between numbers", () => {
    const result = stringCalculator("2\n1");
    expect(result).toEqual(3);
  });
  test("shoud be able return a sum for new line and comma between numbers", () => {
    const result = stringCalculator("1\n2,3\n4");
    expect(result).toEqual(10);
  });
  test("shoud be able return error message for negative value", () => {
    const result = stringCalculator("-1,2, -3");
    expect(result).toEqual("negativos não permitidos: -1, -3");
  });
});
