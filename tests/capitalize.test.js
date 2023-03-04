/**
 * @jest-environment jsdom
 */

const { capitalize, showCapitalize } = require("../src/capitalize");

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
