'use strict';
/* exported tail */
const tail = (array) => {
  if (array.length === 0) return [];
  const tailArray = [];
  for (let i = 1; i < array.length; i++) {
    tailArray.push(array[i]);
  }
  return tailArray;
};
