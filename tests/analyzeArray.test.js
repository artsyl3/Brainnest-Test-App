const analyzeArray = require("../src/analyzeArray");

test("analyzeArray function analyzes an array of numbers", () => {
  expect(analyzeArray([1, 2, 3, 4, 5])).toEqual({
    average: 3,
    min: 1,
    max: 5,
    length: 5,
  });
  expect(analyzeArray([2, 2, 2, 2])).toEqual({
    average: 2,
    min: 2,
    max: 2,
    length: 4,
  });
  expect(analyzeArray([1, 2, 3, -4, 5])).toEqual({
    average: 1.4,
    min: -4,
    max: 5,
    length: 5,
  });
  expect(analyzeArray([])).toEqual({
    average: NaN,
    min: Infinity,
    max: -Infinity,
    length: 0,
  });
});
