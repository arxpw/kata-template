import chop from '../chop';

describe('chop', () => {
  test('can not chop missing number', () => {
    expect(chop(3, [2,4,8])).toBe(-1);
  });

  test('can not chop empty array', () => {
    expect(chop(1, [])).toBe(-1);
  });

  test('can chop arrays with a power of 2', () => {
    expect(chop(3, [5,2,1,3])).toBe(3);
  });

  test('can chop arrays with a power of 3', () => {
    expect(chop(3, [3,2,1])).toBe(0);
  });

  test('can chop BIG arrays', () => {
    const array = Array.from(Array(1000).keys())
    expect(chop(326, array)).toBe(326);
  });
});
