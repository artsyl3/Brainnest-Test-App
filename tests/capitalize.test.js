/**
 * @jest-environment jsdom
 */

const { capitalize, showCapitalize } = require("../src/capitalize.js");

describe('capitalize', () => {
    test('capitalizes the first character of a string', () => {
      expect(capitalize('hello')).toBe('Hello');
      expect(capitalize('HELLO')).toBe('HELLO');
      expect(capitalize('123')).toBe('123');
      expect(capitalize('')).toBe('');
      expect(capitalize(null)).toBe('');
      expect(capitalize(undefined)).toBe('');
      expect(capitalize(123)).toBe('');
    });
  });

describe ("Testing Capitalize dom manipulation", () => {
  test("Check if the paragraf will receive the text", () => {
    document.body.innerHTML = `
    <input id="CapitalizeId" type="text" require>
    <button id="capButton">Click me</button>
    <p id="CapitalizedRes"></p>
      `;

      const input = document.getElementById('CapitalizeId');
      const button = document.getElementById("capButton");
      const resultPara = document.getElementById('CapitalizedRes');

      input.value = 'hello';
      button.addEventListener('click', showCapitalize)
      button.click();

      expect(resultPara.value).toBe('Hello');
    });
  });