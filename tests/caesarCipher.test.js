const caesarCipher = require("../src/caesarCipher.js");

test("test", () => {
  expect(caesarCipher(1).encipher("abc")).toBe("abc");
})