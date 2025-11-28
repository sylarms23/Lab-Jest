const calculator = require('./calculator');

test('adds 1 + 2 to equal 3', () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test('adds -4 + 8 to equal 4', () => {
  expect(calculator.add(-4, 8)).toBe(4);
});

test('subtract 5 - 4 to equal 1', () => {
  expect(calculator.subtract(5, 4)).toBe(1);
});

test('subtract -5 - -10 to equal 5', () => {
  expect(calculator.subtract(-5, -10)).toBe(5);
});

test('division between 10 and 2 to equal 5', () => {
  expect(calculator.divide(10, 2)).toBe(5);
});

test('multiply -2 by 3 to equal -6', () => {
  expect(calculator.multiply(-2, 3)).toBe(-6);
});

test('multiply -2 by -9 to equal 18', () => {
  expect(calculator.multiply(-2, -9)).toBe(18);
});

test('division between 10 and 0 throws an error ', () => {
  expect(() => calculator.divide(10, 0)).toThrow("No se puede dividir entre 0");
});





