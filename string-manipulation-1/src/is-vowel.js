'use strict';
/* exported isVowel */
function isVowel(char) {
  const vowels = 'aeiou';
  return vowels.includes(char.toLowerCase());
}
