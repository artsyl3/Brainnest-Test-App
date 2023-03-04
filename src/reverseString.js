function reverseString(str) {
  if (typeof str !== 'string') {
    return '';
  }
  return str.split('').reverse().join('');
}
const showReverse = () => {
  const input = document.getElementById('ReverseId');
  const result = document.getElementById('ReverseRes');
  result.innerText = reverseString(input.value);
}

module.exports = { reverseString,  showReverse};