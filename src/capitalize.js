const capitalize = (str) => {
  if (typeof str !== 'string' || str.length === 0) {
    return '';
  }
  return str.charAt(0).toUpperCase() + str.slice(1);
}


const showCapitalize = () => {
  const input = document.getElementById('CapitalizeId');
  const resultPara = document.getElementById('CapitalizedRes');
  resultPara.value = capitalize(input.value);
}

module.exports = {
  capitalize,
  showCapitalize,
};