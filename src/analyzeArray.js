const analyzeArray = (arr) => {
  const sum = arr.reduce((a, b) => a + b,0);
  const average = sum / arr.length;
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  const length = arr.length;
  return { average, min, max, length };
}

const obj = analyzeArray([-1,-2,-4,-5]);

console.log(obj)

module.exports = analyzeArray;
