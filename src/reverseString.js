function reverseString(str) {
    if (typeof str !== 'string') {
      return '';
    }
    return str.split('').reverse().join('');
  }

  function Rv(inputText) {
    return reverseString(inputText);
  }
  
  


module.exports = reverseString;