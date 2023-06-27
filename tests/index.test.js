const { capitalize } = require('../src/capitalize');
const { reverseString } = require('../src/reverseString');

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
