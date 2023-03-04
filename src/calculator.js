const calculator = {
  add: function (num1, num2) {
    return num1 + num2;
  },
  subtract: function (num1, num2) {
    return num1 - num2;
  },
  multiply: function (num1, num2) {
    return num1 * num2;
  },
  divide: function (num1, num2) {
    if (num2 === 0) {
      throw new Error("Cannot divide by zero!");
    }
    return num1 / num2;
  },
};

function additionAddToDOM() {
  const num1Input = document.getElementById("num1");
  const num2Input = document.getElementById("num2");
  const resultDiv = document.getElementById("result");
  resultDiv.textContent = calculator.add(
    Number(num1Input.value),
    Number(num2Input.value)
  );
}
function subtractAddToDOM() {
  const num1Input = document.getElementById("num1");
  const num2Input = document.getElementById("num2");
  const resultDiv = document.getElementById("result");
  resultDiv.textContent = calculator.subtract(
    Number(num1Input.value),
    Number(num2Input.value)
  );
}
function multiplyAddToDOM() {
  const num1Input = document.getElementById("num1");
  const num2Input = document.getElementById("num2");
  const resultDiv = document.getElementById("result");
  resultDiv.textContent = calculator.multiply(
    Number(num1Input.value),
    Number(num2Input.value)
  );
}
function divideAddToDOM() {
  const num1Input = document.getElementById("num1");
  const num2Input = document.getElementById("num2");
  const resultDiv = document.getElementById("result");
  try {
    resultDiv.textContent = calculator.divide(
      Number(num1Input.value),
      Number(num2Input.value)
    );
  } catch (error) {
    resultDiv.textContent = error.message;
  }
}

module.exports = {
  calculator,
  additionAddToDOM,
  subtractAddToDOM,
  multiplyAddToDOM,
  divideAddToDOM,
};
