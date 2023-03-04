function reverseString(str) {
  if (typeof str !== 'string') {
    return '';
  }
  return str.split('').reverse().join('');
}
const showReverse = () => {
  const input = document.getElementById('ReverseId').value;
  const result = reverseString(input);
  document.getElementById('ReverseRes').innerText = result;
}

module.exports = reverseString;