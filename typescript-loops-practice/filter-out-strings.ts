/* exported filterOutStrings */
function filterOutStrings(values: unknown[]): unknown[] {
  const filtered = [];
  let i = 0;

  while (i < values.length) {
    if (typeof values[i] !== 'string') filtered.push(values[i]);
    i++;
  }

  return filtered;
}
