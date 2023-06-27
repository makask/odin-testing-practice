const { capitalize } = require('../src/capitalize');

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
  test('Does not modify already capitalized string', () => {
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
