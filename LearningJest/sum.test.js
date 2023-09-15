const sum = require('./sum');

// Name of test and function that will actually run the test
test('add two numbers', () => {
    expect(sum(1, 2)).toBe(3);
})