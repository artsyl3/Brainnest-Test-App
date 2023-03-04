/**
 * @jest-environment jsdom
 */

const {
  calculator,
  additionAddToDOM,
  subtractAddToDOM,
  multiplyAddToDOM,
  divideAddToDOM,
} = require("../src/calculator");

describe("Calculator", () => {
  test("add function should return the correct result", () => {
    expect(calculator.add(2, 3)).toBe(5);
  });

  test("subtract function should return the correct result", () => {
    expect(calculator.subtract(5, 3)).toBe(2);
  });

  test("multiply function should return the correct result", () => {
    expect(calculator.multiply(2, 3)).toBe(6);
  });

  test("divide function should return the correct result", () => {
    expect(calculator.divide(6, 3)).toBe(2);
  });

  test("divide function should throw an error when dividing by zero", () => {
    expect(() => {
      calculator.divide(6, 0);
    }).toThrowError("Cannot divide by zero!");
  });
});

describe("Testing if calculator function can manipulate the dom", () => {
  test("Check add if it can get inputs and display results", () => {
    document.body.innerHTML = `
    <input type="number" id="num1" placeholder="Enter first number">
    <input type="number" id="num2" placeholder="Enter second number">
    <button id="add">Add</button>
    <div id="result"></div>
    `;

    const num1Input = document.getElementById("num1");
    const num2Input = document.getElementById("num2");
    const addButton = document.getElementById("add");
    const resultDiv = document.getElementById("result");

    num1Input.value = "2";
    num2Input.value = "3";
    addButton.addEventListener("click", additionAddToDOM);
    addButton.click();

    expect(resultDiv.innerHTML).toBe("5");
  });

  test("Check subtract if it can get inputs and display results", () => {
    document.body.innerHTML = `
    <input type="number" id="num1" placeholder="Enter first number">
    <input type="number" id="num2" placeholder="Enter second number">
    <button id="subtract">Subtract</button>
    <div id="result"></div>
    `;

    const num1Input = document.getElementById("num1");
    const num2Input = document.getElementById("num2");
    const subtractButton = document.getElementById("subtract");
    const resultDiv = document.getElementById("result");

    num1Input.value = "5";
    num2Input.value = "3";
    subtractButton.addEventListener("click", subtractAddToDOM);
    subtractButton.click();

    expect(resultDiv.innerHTML).toBe("2");
  });

  test("Check multiply if it can get inputs and display results", () => {
    document.body.innerHTML = `
    <input type="number" id="num1" placeholder="Enter first number">
    <input type="number" id="num2" placeholder="Enter second number">
    <button id="multiply">multiply</button>
    <div id="result"></div>
    `;

    const num1Input = document.getElementById("num1");
    const num2Input = document.getElementById("num2");
    const multiplyButton = document.getElementById("multiply");
    const resultDiv = document.getElementById("result");

    num1Input.value = "6";
    num2Input.value = "6";
    multiplyButton.addEventListener("click", multiplyAddToDOM);
    multiplyButton.click();

    expect(resultDiv.innerHTML).toBe("36");
  });

  test("Check divide if it can get inputs and display results", () => {
    document.body.innerHTML = `
    <input type="number" id="num1" placeholder="Enter first number">
    <input type="number" id="num2" placeholder="Enter second number">
    <button id="divide">divide</button>
    <div id="result"></div>
    `;

    const num1Input = document.getElementById("num1");
    const num2Input = document.getElementById("num2");
    const divideButton = document.getElementById("divide");
    const resultDiv = document.getElementById("result");

    num1Input.value = "10";
    num2Input.value = "2";
    divideButton.addEventListener("click", divideAddToDOM);
    divideButton.click();

    expect(resultDiv.innerHTML).toBe("5");
  });
  test("Check divide if it can get inputs and display results", () => {
    document.body.innerHTML = `
    <input type="number" id="num1" placeholder="Enter first number">
    <input type="number" id="num2" placeholder="Enter second number">
    <button id="divide">divide</button>
    <div id="result"></div>
    `;

    const num1Input = document.getElementById("num1");
    const num2Input = document.getElementById("num2");
    const divideButton = document.getElementById("divide");
    const resultDiv = document.getElementById("result");

    num1Input.value = "32";
    num2Input.value = "0";
    divideButton.addEventListener("click", divideAddToDOM);
    divideButton.click();

    expect(resultDiv.innerHTML).toBe("Cannot divide by zero!");
  });
});
