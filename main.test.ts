
const mergeFunction = require('./main')
describe('merge', () => {
  it('should merge and sort correctly', () => {
    expect(mergeFunction([1, 3, 5], [6, 4, 2], [0, 7, 8])).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8]);
    expect(mergeFunction([1, 3], [6,5, 4, 2], [0, 7, 8])).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8]);
  });
  it('should work with negative numbers', () => {
    expect(mergeFunction([-3, -1], [0, -2,-6], [-5, -4])).toEqual([-6, -5, -4, -3, -2, -1, 0]);
  });

  it('should handle empty arrays', () => {
    expect(mergeFunction([], [], [])).toEqual([]);
    expect(mergeFunction([], [3, 2, 1], [])).toEqual([1, 2, 3]);
    expect(mergeFunction([], [3, 2, 1], [0])).toEqual([0,1, 2, 3]);
  });
  it('should handle duplicates', () => {
    expect(mergeFunction([1,2,3], [3,2,1], [1, 2,3])).toEqual([1,1,1,2,2,2,3,3,3]);
  });
});
