
const analyzeArray = (arr) => {
  const sum = arr.reduce((a, b) => a + b,0);
  const average = sum / arr.length;
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  const length = arr.length;
  return { average, min, max, length };
}


const showResult = (event) => {
  if(event != undefined) {
  event.preventDefault();
  }
  const input = document.getElementById("input-array");
  const average = document.getElementById("average");
  const min = document.getElementById("min");
  const max = document.getElementById("max");
  const length = document.getElementById("lenght");
  const array = input.value.split(",")
  const arrayFinal = array.map(function (x) {
    return parseInt(x);
  })
  const result = analyzeArray(arrayFinal);
  average.textContent = result.average
  min.textContent = result.min;
  max.textContent = result.max;
  length.textContent = result.length;
};





module.exports = { 
  analyzeArray, 
  showResult 
};

