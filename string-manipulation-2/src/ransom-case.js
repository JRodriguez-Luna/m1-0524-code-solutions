'use strict';
/* exported ransomCase */
function ransomCase(str) {
  let randCase = '';
  for (let i = 0; i < str.length; i++) {
    if (i % 2 === 0) randCase += str[i].toLowerCase();
    else randCase += str[i].toUpperCase();
  }
  return randCase;
}
