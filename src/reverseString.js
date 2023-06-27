/*Write tests for the following, and then make the tests pass!
A reverseString function that takes a string and returns it reversed.*/
function reverseString(string) {
  let result = '';
  for (let i = string.length - 1; i >= 0; i--) {
    result += string[i];
  }
  return result;
}

module.exports = {
  reverseString,
};
