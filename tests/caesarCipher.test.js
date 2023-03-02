/**
 * @jest-environment jsdom
 */

const {caesarCipher, encrypt, decrypt} = require("../src/caesarCipher.js");

describe("Testing Caesar cipher, encipher", () => {
  test("key 0", () => {
    expect(caesarCipher(0).encipher("abc")).toBe("abc");
  })
  test("key 1", () => {
    expect(caesarCipher(1).encipher("abc")).toBe("bcd");
    expect(caesarCipher(5).encipher("abc")).toBe("fgh");
  })
  test("negative key", () => {
    expect(caesarCipher(-1).encipher("abc")).toBe("zab");
    expect(caesarCipher(-2).encipher("abc")).toBe("yza");
  })
  test("key over 25", () => {
    expect(caesarCipher(26).encipher("abc")).toBe("abc");
    expect(caesarCipher(27).encipher("abc")).toBe("bcd");
  })
  test("whole alphabet", () => {
    expect(caesarCipher(1).encipher("abcdefghijklmnopqrstuvwxyz")).toBe("bcdefghijklmnopqrstuvwxyza");
    expect(caesarCipher(3).encipher("abcdefghijklmnopqrstuvwxyz")).toBe("defghijklmnopqrstuvwxyzabc");
  })
  test("whole alphabet UpperCase", () => {
    expect(caesarCipher(1).encipher("ABCDEFGHIJKLMNOPQRSTUVWXYZ")).toBe("BCDEFGHIJKLMNOPQRSTUVWXYZA");
    expect(caesarCipher(3).encipher("ABCDEFGHIJKLMNOPQRSTUVWXYZ")).toBe("DEFGHIJKLMNOPQRSTUVWXYZABC");
  })
  test("letters and symbols", () => {
    expect(caesarCipher(Math.round(Math.random()*100)).encipher("12312312 (*^^&$#*(}{}?>?<\"")).toBe("12312312 (*^^&$#*(}{}?>?<\"");
  })
  test("compination", () => {
    expect(caesarCipher(223).encipher("Hello World! My name is Branko!")).toBe("Wtaad Ldgas! Bn cpbt xh Qgpczd!");
    expect(caesarCipher(-342).encipher("Hello World! My name is Branko!")).toBe("Dahhk Sknhz! Iu jwia eo Xnwjgk!");
  })
});

describe("Testing Caesar cipher, decipher", () => {
  test("key 0", () => {
    expect(caesarCipher(0).decipher("abc")).toBe("abc");
  })
  test("key 1", () => {
    expect(caesarCipher(1).decipher("bcd")).toBe("abc");
    expect(caesarCipher(5).decipher("fgh")).toBe("abc");
  })
  test("negative key", () => {
    expect(caesarCipher(-1).decipher("zab")).toBe("abc");
    expect(caesarCipher(-2).decipher("yza")).toBe("abc");
  })
  test("key over 25", () => {
    expect(caesarCipher(26).decipher("abc")).toBe("abc");
    expect(caesarCipher(27).decipher("bcd")).toBe("abc");
  })
  test("whole alphabet", () => {
    expect(caesarCipher(1).decipher("bcdefghijklmnopqrstuvwxyza")).toBe("abcdefghijklmnopqrstuvwxyz");
    expect(caesarCipher(3).decipher("defghijklmnopqrstuvwxyzabc")).toBe("abcdefghijklmnopqrstuvwxyz");
  })
  test("whole alphabet UpperCase", () => {
    expect(caesarCipher(1).decipher("BCDEFGHIJKLMNOPQRSTUVWXYZA")).toBe("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
    expect(caesarCipher(3).decipher("DEFGHIJKLMNOPQRSTUVWXYZABC")).toBe("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
  })
  test("letters and symbols", () => {
    expect(caesarCipher(Math.round(Math.random()*100)).decipher("12312312 (*^^&$#*(}{}?>?<\"")).toBe("12312312 (*^^&$#*(}{}?>?<\"");
  })
  test("compination", () => {
    expect(caesarCipher(223).decipher("Wtaad Ldgas! Bn cpbt xh Qgpczd!")).toBe("Hello World! My name is Branko!");
    expect(caesarCipher(-342).decipher("Dahhk Sknhz! Iu jwia eo Xnwjgk!")).toBe("Hello World! My name is Branko!");
  })
});

describe ("Testing Caesar cipher encrypt and decrypt dom manipulation", () => {
  test("Check encrypt being able to display encripted text", () => {
    document.body.innerHTML = `
    <textarea class="caesarTextarea" name="encryptText" id="encryptText" cols="60" rows="10"></textarea>
    <button class="caesarButton" id="encryptButton">&#x1F4E5 Encrypt &#x1F4E5</button>
    <label for="shift-key">Shift key:</label>
    <input type="number" name="shift-key" id="shift-key" value="0">
    <button class="caesarButton" id="decryptButton">&#x1F4E4 Decrypt &#x1F4E4</button>
    <textarea class="caesarTextarea" name="decryptText" id="decryptText" cols="60" rows="10"></textarea>
    `;

    const encryptText = document.getElementById("encryptText");
    const encryptButton = document.getElementById("encryptButton");
    const decryptText = document.getElementById("decryptText");
    const shiftKey = document.getElementById("shift-key");

    encryptText.value = "Hello World! My name is Branko!";
    shiftKey.value = "223";
    encryptButton.addEventListener('click', encrypt)
    encryptButton.click();

    expect(decryptText.value).toBe("Wtaad Ldgas! Bn cpbt xh Qgpczd!");
  });

  test("Check decrypt being able to display decripted text", () => {
    document.body.innerHTML = `
    <textarea class="caesarTextarea" name="encryptText" id="encryptText" cols="60" rows="10"></textarea>
    <button class="caesarButton" id="encryptButton">&#x1F4E5 Encrypt &#x1F4E5</button>
    <label for="shift-key">Shift key:</label>
    <input type="number" name="shift-key" id="shift-key" value="0">
    <button class="caesarButton" id="decryptButton">&#x1F4E4 Decrypt &#x1F4E4</button>
    <textarea class="caesarTextarea" name="decryptText" id="decryptText" cols="60" rows="10"></textarea>
    `;

    const encryptText = document.getElementById("encryptText");
    const decryptButton = document.getElementById("decryptButton");
    const decryptText = document.getElementById("decryptText");
    const shiftKey = document.getElementById("shift-key");

    decryptText.value = "Dahhk Sknhz! Iu jwia eo Xnwjgk!";
    shiftKey.value = "-342";
    decryptButton.addEventListener('click', decrypt)
    decryptButton.click();

    expect(encryptText.value).toBe("Hello World! My name is Branko!");
  });
})
