function capitalize(str) {
    if (typeof str !== 'string' || str.length === 0) {
      return '';
    }
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  function Cp(inputText) {
    return capitalize(inputText);
  }
  
  
module.exports = capitalize;