const calculator = {
  add: function(num1, num2) {
    return num1 + num2;
  },
  subtract: function(num1, num2) {
    return num1 - num2;
  },
  multiply: function(num1, num2) {
    return num1 * num2;
  },
  divide: function(num1, num2) {
    if (num2 === 0) {
      throw new Error("Cannot divide by zero!");
    }
    return num1 / num2;
  }
};

const addBtn = document.getElementById('add');
const subtractBtn = document.getElementById('subtract');
const multiplyBtn = document.getElementById('multiply');
const divideBtn = document.getElementById('divide');
const num1Input = document.getElementById('num1');
const num2Input = document.getElementById('num2');
const resultDiv = document.getElementById('result');

addBtn.addEventListener('click', () => {
  const num1 = Number(num1Input.value);
  const num2 = Number(num2Input.value);
  const result = calculator.add(num1, num2);
  resultDiv.textContent = result;
});

subtractBtn.addEventListener('click', () => {
  const num1 = Number(num1Input.value);
  const num2 = Number(num2Input.value);
  const result = calculator.subtract(num1, num2);
  resultDiv.textContent = result;
});

multiplyBtn.addEventListener('click', () => {
  const num1 = Number(num1Input.value);
  const num2 = Number(num2Input.value);
  const result = calculator.multiply(num1, num2);
  resultDiv.textContent = result;
});

divideBtn.addEventListener('click', () => {
  const num1 = Number(num1Input.value);
  const num2 = Number(num2Input.value);
  try {
    const result = calculator.divide(num1, num2);
    resultDiv.textContent = result;
  } catch (error) {
    resultDiv.textContent = error.message;
  }
});

module.exports = calculator;