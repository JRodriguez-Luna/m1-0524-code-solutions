/* exported compact */
const compact = (array: unknown[]): unknown[] => {
  const compactArray = [];

  for (let i = 0; i < array.length; i++) {
    if (Boolean(array[i]) !== false) {
      compactArray.push(array[i]);
    }
  }

  return compactArray;
};
