'use strict';
/* exported capitalize */
const capitalize = (string) => {
  if (string.length === 0) return string;
  string = string.toLowerCase();
  return string[0].toUpperCase() + string.slice(1);
};
