/**
 * @jest-environment jsdom
 */

const calculator = require("../src/calculator").default;

// Create fake DOM environment for Jest
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const dom = new JSDOM("<!DOCTYPE html><html><body></body></html>");
global.document = dom.window.document;
global.window = dom.window;

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

/* describe("Testing if calculator function can manipulate the dom", () => {
  test("Check add if it can get inputs and display results", () => {
    document.body.innerText = `
    <input id="num1" />
    <input id="num2" />
    <button id="add">Add</button>
    <div id="result"></div>
    `;
    expect(calculator.add(2, 3)).toBe(5);
  });
});

describe("Testing if calculator function can manipulate the dom", () => {
  test("Check subtract if it can get inputs and display results", () => {
    document.body.innerText = `
    <input id="num1" />
    <input id="num2" />
    <button id="subtract">Subtract</button>
    <div id="result"></div>
    `;
    expect(calculator.subtract(5, 3)).toBe(2);
  });
});
describe("Testing if calculator function can manipulate the dom", () => {
  test("Check multiply if it can get inputs and display results", () => {
    document.body.innerText = `
    <input id="num1" />
    <input id="num2" />
    <button id="multiply">Multiply</button>
    <div id="result"></div>
    `;
    expect(calculator.multiply(2, 3)).toBe(6);
  });
});
describe("Testing if calculator function can manipulate the dom", () => {
  test("Check divide if it can get inputs and display results", () => {
    document.body.innerText = `
    <input id="num1" />
    <input id="num2" />
    <button id="divide">Divide</button>
    <div id="result"></div>
    `;
    expect(calculator.divide(6, 3)).toBe(2);
  });
});
 */
