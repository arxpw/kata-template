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

  test('can chop BIG arrays benchmark', () => {
    const maximumOperationTime = 50; // 50ms to go through 10,000,000 > 11,000,000 items and find the index

    const min = Math.ceil(10000000);
    const max = Math.floor(11000000);

    // cached array indexes can skew this result, random between 10 million and 11 million ^
    const randomNumber = Math.floor(Math.random() * (max - min) + min);
    const array = Array.from(Array(randomNumber).keys())

    // we don't test the time of the generation of the 10 million records, just the performance of the function
    var start = new Date()

    const doChop = chop(6628020, array);
    expect(doChop).toBe(6628020);

    var end = new Date();

    const benchmarkTime = (end.getTime() - start.getTime());
    expect(benchmarkTime).toBeLessThanOrEqual(maximumOperationTime);
  });
});
