//this function I don't need, it is just for the visual effect
const caesarCipher = (key) => {
  //this function will encipher the string using the key
  const encipher = (string) => caesar("encipher", string, key);
  //this function will decipher the string using the key
  const decipher = (string) => caesar("decipher", string, key);
  // returnig the functions
  return {encipher, decipher}
}

const caesar = (type, string, key) => {
  //array for all letter in lowercase
  const letters = [...Array(26)].map((_, i) => String.fromCharCode(i + 97));
  //mapping through the string so I can change the elements to new ones
  const result = [...string].map(element => {
    //making the element lowercase so I can use it to compare it
    const letter = element.toLowerCase();
    let changedLetterIndex;
    //getting the index of the letter I need to replace with depending on the type encipher/decipher
    if (type === "encipher") {
      changedLetterIndex = (letters.indexOf(letter) + key) % 26;
    } else if (type === "decipher"){
      changedLetterIndex = (letters.indexOf(letter) - key) % 26;
    }
    if (letters.includes(letter)){
      //verifing if element is in lower or uppercase so I can keep it
      if (element === letter){
      // +26 is so I can wrap from a to z even if the key is negative or over 25
        element = letters[changedLetterIndex < 0 ? changedLetterIndex + 26 : changedLetterIndex];
      } else {
        element = letters[changedLetterIndex < 0 ? changedLetterIndex + 26 : changedLetterIndex].toUpperCase();
      }
    }
    return element;
  })
  return result.join("");
}

module.exports = caesarCipher;
