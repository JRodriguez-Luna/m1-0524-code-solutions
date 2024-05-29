'use strict';
/* exported lastChars */
function lastChars(length, str) {
  if (length > str.length) return str;
  return str.slice(str.length - length);
}
