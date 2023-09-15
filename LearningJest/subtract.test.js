const subtract = require('./subtract');

// Name of test and function that will actually run the test
test('add two numbers', () => {
    expect(subtract(1, 2)).toBe(-1);
})