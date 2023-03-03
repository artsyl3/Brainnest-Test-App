/**
 * @jest-environment jsdom
 */

const analyzeArray = require("../src/analyzeArray");


test("analyzeArray function sorst the numbers in theb array correctly", () => {
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
  expect(analyzeArray([-1,-2,-4,-5])).toEqual({
    average: -3,
    min: -5,
    max: -1,
    length: 4,
  });
  expect(analyzeArray([0,0,0,0])).toEqual({
    average: 0,
    min: 0,
    max: 0,
    length: 4,
  })
});
