/*Write a caesarCipher function that 
takes a string and a shift factor and 
returns it with each character “shifted”.*/

function caesarCipher(str, shift) {
  const charCodes = [];
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    const code = str.charCodeAt(i);
    if (char.match(/[a-z]/i)) {
      if (code >= 65 && code <= 90) {
        charCodes.push(((code - 65 + shift) % 26) + 65);
      } else if (code >= 97 && code <= 122) {
        charCodes.push(((code - 97 + shift) % 26) + 97);
      }
    } else {
      charCodes.push(code);
    }
  }
  return String.fromCharCode(...charCodes);
}

module.exports = {
  caesarCipher,
};
