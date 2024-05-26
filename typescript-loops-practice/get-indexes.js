'use strict';
/* exported getIndexes */
function getIndexes(array) {
  if (array.length === 0) return [];
  const index = [];
  for (let i = 0; i < array.length; i++) {
    index.push(i);
  }
  return index;
}
