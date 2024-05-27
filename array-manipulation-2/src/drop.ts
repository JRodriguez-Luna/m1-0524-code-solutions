/* exported drop */
const drop = (array: unknown[], count: number): unknown[] => {
  return array.slice(count, array.length);
};
