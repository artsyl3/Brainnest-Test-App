/**
 * @jest-environment jsdom
 */

const { reverseString,  showReverse} = require("../src/reverseString");
describe('reverseString', () => {
    test('reverses a string', () => {
      expect(reverseString('hello')).toBe('olleh');
      expect(reverseString('12345')).toBe('54321');
      expect(reverseString('racecar')).toBe('racecar');
      expect(reverseString('')).toBe('');
      expect(reverseString(null)).toBe('');
      expect(reverseString(undefined)).toBe('');
      expect(reverseString(123)).toBe('');
    });
  });

  describe ("Testing reverse string dom manipulation", () => {
    test("Check if the paragraf will receive the text", () => {
      document.body.innerHTML = `
      <input id="ReverseId" type="text" pattern="[A-Za-z]+" require>
      <button id="revButton">Click me</button>
      <p id="ReverseRes"></p>
      `;

        const input = document.getElementById('ReverseId');
        const button = document.getElementById("revButton");
        const result = document.getElementById('ReverseRes');

        input.value = 'hello';
        button.addEventListener('click', showReverse)
        button.click();

        expect(result.innerText).toBe('olleh');
      });
    });