/* exported takeRight */
const takeRight = (array: unknown[], count: number): unknown[] => {
  if (count > array.length) return array;

  return array.slice(array.length - count);
};
