const { capitalize } = require('../src/capitalize');
const { reverseString } = require('../src/reverseString');
const { calculator } = require('../src/calculator');
const { caesarCipher } = require('../src/caesarCipher');

describe('capitalize', () => {
  test('capitalizes the first character of a string', () => {
    expect(capitalize('hello world')).toBe('Hello world');
  });
  test('capitalizes a single character', () => {
    expect(capitalize('a')).toBe('A');
  });
  test('works with empty string', () => {
    expect(capitalize('')).toBe('');
  });
  test('does not modify already capitalized string', () => {
    expect(capitalize('Hello')).toBe('Hello');
  });
  test('all letters capitalized dont modify string', () => {
    expect(capitalize('HELLO')).toBe('HELLO');
  });
  test('longer string returns only first letter capitalized', () => {
    expect(capitalize('this is a very long awesome string')).toBe(
      'This is a very long awesome string'
    );
  });
  test('when first character is a number dont modify string', () => {
    expect(capitalize('123#fds2kdsKoP')).toBe('123#fds2kdsKoP');
  });
  test('entering numbers throws error', () => {
    expect(() => capitalize(1234)).toThrow(Error);
  });
  test('no arguments throws error', () => {
    expect(() => capitalize()).toThrow(Error);
  });
});

describe('reverseString', () => {
  test('takes a string and returns it reversed', () => {
    expect(reverseString('hello')).toBe('olleh');
  });
  test('works with all letters capitalized', () => {
    expect(reverseString('HELLO')).toBe('OLLEH');
  });
  test('works with some letter capitalized', () => {
    expect(reverseString('hEllO')).toBe('OllEh');
  });
  test('works with longer string', () => {
    expect(reverseString('this is a longer string')).toBe(
      'gnirts regnol a si siht'
    );
  });
  test('works with random characters', () => {
    expect(reverseString('4j%3ij_#6m7o@ik')).toBe('ki@o7m6#_ji3%j4');
  });
  test('numbers return empty string', () => {
    expect(reverseString(1234)).toBe('');
  });
  test('no arguments throws error', () => {
    expect(() => reverseString()).toThrow(Error);
  });
});

describe('calculator', () => {
  // Test addition
  test('addition works with legal arguments', () => {
    expect(calculator.add(1, 2)).toBe(3);
  });
  test('addition works with floating numbers', () => {
    expect(calculator.add(0.2, 0.3)).toBe(0.5);
  });
  test('addition works with negative numbers', () => {
    expect(calculator.add(-1, -2)).toBe(-3);
  });
  test('addition works with one negative number', () => {
    expect(calculator.add(-1, 2)).toBe(1);
  });
  test('addition with invalid arguments throws error', () => {
    expect(() => calculator.add(1, a)).toThrow(Error);
  });
  test('addition with number and string argument returns undefined', () => {
    expect(calculator.add(1, 'a')).toBe(undefined);
  });
  test('addition with no arguments returns undefined', () => {
    expect(calculator.add()).toBe(undefined);
  });
  // Test subtract
  test('subtract works with legal arguments', () => {
    expect(calculator.subtract(6, 2)).toBe(4);
  });
  test('subtract works with floating numbers', () => {
    expect(calculator.subtract(0.5, 0.2)).toBe(0.3);
  });
  test('subtract works with negative numbers', () => {
    expect(calculator.subtract(-5, -2)).toBe(-3);
  });
  test('subtract works with one negative number', () => {
    expect(calculator.subtract(-1, 2)).toBe(-3);
  });
  test('subtract with invalid arguments throws error', () => {
    expect(() => calculator.subtract(1, a)).toThrow(Error);
  });
  test('subtract with number and string argument returns undefined', () => {
    expect(calculator.subtract(1, 'a')).toBe(undefined);
  });
  test('subtract with no arguments returns undefined', () => {
    expect(calculator.subtract()).toBe(undefined);
  });
  // Test divide
  test('divide works with legal arguments', () => {
    expect(calculator.divide(6, 2)).toBe(3);
  });
  test('divide works with floating numbers', () => {
    expect(calculator.divide(0.8, 0.2)).toBe(4);
  });
  test('divide works with negative numbers', () => {
    expect(calculator.divide(-8, -2)).toBe(4);
  });
  test('divide works with one negative number', () => {
    expect(calculator.divide(-6, 3)).toBe(-2);
  });
  test('divide with invalid arguments throws error', () => {
    expect(() => calculator.divide(1, a)).toThrow(Error);
  });
  test('divide with number and string argument returns undefined', () => {
    expect(calculator.divide(1, 'a')).toBe(undefined);
  });
  test('divide with no arguments returns undefined', () => {
    expect(calculator.divide()).toBe(undefined);
  });
  test('dividing by zero return infinity', () => {
    expect(calculator.divide(8, 0)).toBe(Infinity);
  });
  // Test multiply
  test('multiply works with legal arguments', () => {
    expect(calculator.multiply(3, 5)).toBe(15);
  });
  test('multiply works with floating numbers', () => {
    expect(calculator.multiply(2.5, 1.3)).toBe(3.25);
  });
  test('multiply works with negative numbers', () => {
    expect(calculator.multiply(-8, -2)).toBe(16);
  });
  test('multiply works with one negative number', () => {
    expect(calculator.multiply(-6, 3)).toBe(-18);
  });
  test('multiply with invalid arguments throws error', () => {
    expect(() => calculator.multiply(2, a)).toThrow(Error);
  });
  test('multiply with number and string argument returns undefined', () => {
    expect(calculator.multiply(3, 'a')).toBe(undefined);
  });
  test('multiply with no arguments returns undefined', () => {
    expect(calculator.multiply()).toBe(undefined);
  });
  test('multiply by zero returns 0', () => {
    expect(calculator.multiply(8, 0)).toBe(0);
  });
});

describe('caesarCipher', () => {
  test('shifts each character byh the shift factor', () => {
    expect(caesarCipher('hello world', 3)).toBe('khoor zruog');
  });
  test('wraps from z to a', () => {
    expect(caesarCipher('z', 1)).toBe('a');
  });
  test('keeps the same case', () => {
    expect(caesarCipher('Hello world', 3)).toBe('Khoor zruog');
  });
  test('handles punctuation', () => {
    expect(caesarCipher('Hello world!', 3)).toBe('Khoor zruog!');
  });
});
