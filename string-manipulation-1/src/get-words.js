'use strict';
/* exported getWords */
const getWords = (string) => {
  if (string.length === 0) return [];
  return string.split(' ');
};
