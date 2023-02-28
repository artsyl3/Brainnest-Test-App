const caesarCipher = (key) => {
  const letters = [...Array(26)].map((_, i) => String.fromCharCode(i + 97));

  const enchiper = (string) => {
    console.log(string);
    console.log(key);
    console.log(letters);
  }
  const dechiper = (string) => {
    console.log(string);
    console.log(key);
  }
  return {enchiper, dechiper}
}

caesarCipher(1).enchiper("abc");