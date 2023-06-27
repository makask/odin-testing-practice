function argumentsValid(a, b) {
  if (isNaN(a) || isNaN(b)) {
    return false;
  } else {
    return true;
  }
}

function add(a, b) {
  if (argumentsValid(a, b)) {
    return a + b;
  }
}

function subtract(a, b) {
  if (argumentsValid(a, b)) {
    return a - b;
  }
}

function divide(a, b) {
  if (argumentsValid(a, b)) {
    return a / b;
  }
}

function multiply(a, b) {
  if (argumentsValid(a, b)) {
    return a * b;
  }
}
// A calculator object that contains functions for the
// basic operations: add, subtract, divide, and multiply.
//Each of these functions should take two numbers and
//return the correct calculation.

const calculator = {
  add,
  subtract,
  divide,
  multiply,
};

module.exports = {
  calculator,
};
