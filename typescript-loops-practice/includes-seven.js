'use strict';
/* exported includesSeven */
const includesSeven = (array) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 7) return true;
  }
  return false;
};
