/* global getLengthOfArray, expect */

describe('getLengthOfArray(array)', function () {
  beforeEach('make sure that getLengthOfArray is defined', function () {
    expect(getLengthOfArray).to.be.a('function');
  });

  it('returns the length of ["foo", "bar", "baz"]', function () {
    const output = getLengthOfArray(['foo', 'bar', 'baz']);
    expect(output).to.equal(3);
  });

  it('returns the length of [9, 10, 19, 20]', function () {
    const output = getLengthOfArray([9, 10, 19, 20]);
    expect(output).to.equal(4);
  });

  it('returns the length of [false, true]', function () {
    const output = getLengthOfArray([false, true]);
    expect(output).to.equal(2);
  });
});
