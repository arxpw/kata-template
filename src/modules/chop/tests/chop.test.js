import chop from '../chop';

describe('chop', () => {
  test('can not chop array missing number', () => {
    expect(chop(3, [1,5,7,10])).toBe(-1);
  });

  test('can not chop empty array', () => {
    expect(chop(1, [])).toBe(-1);
  });

  test('can chop arrays with a power of 2', () => {
    expect(chop(7, [1,3,5,7])).toBe(3);
  });

  test('can chop arrays with a power of 3', () => {
    expect(chop(1, [1,2,3])).toBe(0);
  });

  test('can chop arrays with a few items', () => {
    expect(chop(10, [1,5,8,10,14])).toBe(3);
  });

  test('can chop arrays with the last item', () => {
    expect(chop(14, [1,5,8,10,14])).toBe(4);
  });

  test('can chop arrays with the first item', () => {
    expect(chop(1, [1,2,6,8,9,10])).toBe(0);
  });

  test('can chop BIG arrays', () => {
    const array = Array.from(Array(500).keys())
    expect(chop(326, array)).toBe(326);
  });
});
