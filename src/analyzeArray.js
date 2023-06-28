/*Write an analyzeArray function that takes 
an array of numbers and returns an object 
with the following properties: average, min, max, and length.*/

function analyzeArray(array) {
  return {
    average: average(array),
    min: min(array),
    max: max(array),
    length: length(array),
  };
}

function average(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum / array.length;
}

function min(array) {
  return Math.min.apply(Math, array);
}

function max(array) {
  return Math.max.apply(Math, array);
}

function length(array) {
  return array.length;
}

module.exports = {
  analyzeArray,
};
