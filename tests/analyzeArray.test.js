/**
 * @jest-environment jsdom
 */

const { analyzeArray, showResult } = require("../src/analyzeArray.js");


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

describe("Testing if analyzeArray showResult can manipulate the dom", () => {
  test("Check add if it can get inputs and display results", () => {
    document.body.innerHTML = `
    <input name="numbers" type="text" id="input-array" placeholder="List of numbers ex. 1,2,3,4" required>
        <button id="analyzebtn" >Analyze</button>
        <h3>Array result:</h3>
        <div class="result">
          <p>Average: <span id="average"></span></p>
          <p>Min: <span id="min"></span></p>
          <p>Max: <span id="max"></span></p>
          <p>Length: <span id="lenght"></span></p>
        </div>
    `;

    const button = document.getElementById("analyzebtn")
    const input = document.getElementById("input-array");
    const average = document.getElementById("average");
    const min = document.getElementById("min");
    const max = document.getElementById("max");
    const length = document.getElementById("lenght");

    input.value = "1,2,3,5";
    button.addEventListener('click', showResult)
    button.click();

    expect(min.innerHTML).toBe("1");
    expect(max.innerHTML).toBe("5");
    expect(length.innerHTML).toBe("4");
    expect(average.innerHTML).toBe("2.75");
  });
});