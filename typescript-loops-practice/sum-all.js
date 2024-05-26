'use strict';
/* exported sumAll */
const sumAll = (numbers) => {
  if (numbers.length <= 1) return numbers[0];
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
};
