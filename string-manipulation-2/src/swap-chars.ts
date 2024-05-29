/* exported swapChars */
function swapChars(
  firstIndex: number,
  secondIndex: number,
  str: string
): string {
  const charArr = str.split('');
  const temp = str[firstIndex];
  charArr[firstIndex] = charArr[secondIndex];
  charArr[secondIndex] = temp;

  return charArr.join('');
}
