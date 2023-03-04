const capitalize = (str) => {
  if (typeof str !== 'string' || str.length === 0) {
    return '';
  }
  return str.charAt(0).toUpperCase() + str.slice(1);
}


const showCapitalize = () => {
  const input = document.getElementById('CapitalizeId').value;
  let result = capitalize(input);
  console.log(input)
  document.getElementById('CapitalizedRes').innerText = result;
}

module.exports = {
  capitalize,
  showCapitalize
};