/* exported pick */
function pick(source: any, keys: string[]): object {
  const newObj: any = {};

  for (let i = 0; i < keys.length; i++) {
    if (source[keys[i]] !== undefined) newObj[keys[i]] = source[keys[i]];
  }

  return newObj;
}

// Note: Can't use for...in loop as it crashed multiple times.
//  Use the for loop to iterate through the key[].
//  If the key at i in source is found, it will put it onto the
//    newObj object.
//  ELSE if not found, then it will return undefined which will
//    be ignored and continue on the loop
