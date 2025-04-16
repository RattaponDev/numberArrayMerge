
const a = require('./main')
describe('merge', () => {
  it('should merge and sort correctly', () => {
    expect(a([1, 3, 5], [6, 4, 2], [0, 7, 8])).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8]);
  });

  it('should handle empty arrays', () => {
    expect(a([], [], [])).toEqual([]);
    expect(a([], [3, 2, 1], [])).toEqual([1, 2, 3]);
  });

  it('should handle duplicates', () => {
    expect(a([1, 2], [2, 1], [1, 2])).toEqual([1, 1, 1, 2, 2, 2]);
  });

  it('should work with negative numbers', () => {
    expect(a([-3, -1], [0, -2], [-5, -4])).toEqual([-5, -4, -3, -2, -1, 0]);
  });
});
