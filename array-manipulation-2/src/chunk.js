'use strict';
/* exported chunk */
const chunk = (array, size) => {
  const newArray = [];
  for (let i = 0; i < array.length; i += size) {
    const subArray = [];
    for (let j = 0; j < size && i + j < array.length; j++) {
      subArray.push(array[i + j]);
    }
    newArray.push(subArray);
  }
  return newArray;
};
