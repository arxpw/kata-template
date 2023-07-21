import sum from '../sum';

describe('sum', () => {
  test('can add two numbers', () => {
    expect(sum(1, 1)).toBe(2);
  });
});
