/* exported getWords */
const getWords = (string: string): string[] => {
  if (string.length === 0) return [];
  return string.split(' ');
};
