const reverseString = require("../src/reverseString");

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