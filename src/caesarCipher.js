const caesarCipher = (key) => {
  const letters = [...Array(26)].map((_, i) => String.fromCharCode(i + 97));

  const encipher = (string) => {
    console.log(string);
    console.log(key);
    return string;
  }
  const decipher = (string) => {
    console.log(string);
    console.log(key);
    return string;
  }
  return {encipher, decipher}
}

caesarCipher(1).encipher("abc")

module.exports = caesarCipher;