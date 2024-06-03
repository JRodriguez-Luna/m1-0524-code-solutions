/* exported omit */
const omit = (source: any, keys: string[]): object => {
  const newObj: any = {};

  for (const key in source) {
    if (!keys.includes(key)) newObj[key] = source[key];
  }

  return newObj;
};
