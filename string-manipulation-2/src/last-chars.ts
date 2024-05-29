/* exported lastChars */
function lastChars(length: number, str: string): string {
  if (length > str.length) return str;
  return str.slice(str.length - length);
}
