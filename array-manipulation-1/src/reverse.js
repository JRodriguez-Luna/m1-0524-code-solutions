'use strict';
/* exported reverse */
function reverse(array) {
  if (array.length === 0) return [];
  const reverseArray = [];
  for (let i = array.length - 1; i >= 0; i--) {
    reverseArray.push(array[i]);
  }
  return reverseArray;
}
