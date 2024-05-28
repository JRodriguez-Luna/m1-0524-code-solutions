/* exported initial */
function initial(array: unknown[]): unknown[] {
  if (array.length === 0) return [];

  const initialArray = [];

  for (let i = 0; i < array.length - 1; i++) {
    initialArray.push(array[i]);
  }

  return initialArray;
}
