/*Write tests for the following, and then make the tests pass!
A capitalize function that takes a string and returns it with the first character capitalized.*/
function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

module.exports = {
  capitalize,
};
