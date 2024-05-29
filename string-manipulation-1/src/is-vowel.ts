/* exported isVowel */
function isVowel(char: string): boolean {
  const vowels = 'aeiou';
  return vowels.includes(char.toLowerCase());
}
