'use strict';
/* exported swapChars */
function swapChars(firstIndex, secondIndex, str) {
  const charArr = str.split('');
  const temp = str[firstIndex];
  charArr[firstIndex] = charArr[secondIndex];
  charArr[secondIndex] = temp;
  return charArr.join('');
}
