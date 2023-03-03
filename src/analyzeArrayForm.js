const analyzeArray = require("../src/analyzeArray");

const analyzeForm = document.getElementById("analyze-form");

const createResponse = (arr) => {
  const obj = analyzeArray(arr);
  const average = analyzeForm.appendChild("p");
  average.innerText = obj.average
  console.log(obj)
}