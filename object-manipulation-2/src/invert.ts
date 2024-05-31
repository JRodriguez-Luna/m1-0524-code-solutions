/* exported invert */
function invert(source: any): object {
  const newObj: any = {};

  for (const key in source) {
    const value = source[key];
    newObj[value] = key;
  }

  return newObj;
}
