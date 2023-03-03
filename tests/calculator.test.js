/**
 * @jest-environment jsdom
 */
const calculator = require("../src/calculator");

describe("calculator object", () => {
  test("add function adds two numbers", () => {
    expect(calculator.add(2, 3)).toBe(5);
    expect(calculator.add(-2, 3)).toBe(1);
    expect(calculator.add(0, 0)).toBe(0);
  });
  test("subtract function subtracts two numbers", () => {
    expect(calculator.subtract(2, 3)).toBe(-1);
    expect(calculator.subtract(-2, 3)).toBe(-5);
    expect(calculator.subtract(0, 0)).toBe(0);
  });
  test("divide function divides two numbers", () => {
    expect(calculator.divide(6, 3)).toBe(2);
    expect(calculator.divide(-6, 3)).toBe(-2);
    expect(calculator.divide(3, 0)).toBe(Infinity);
  });
  test("multiply function multiplies two numbers", () => {
    expect(calculator.multiply(2, 3)).toBe(6);
    expect(calculator.multiply(-2, 3)).toBe(-6);
    expect(calculator.multiply(0, 0)).toBe(0);
  });
});
