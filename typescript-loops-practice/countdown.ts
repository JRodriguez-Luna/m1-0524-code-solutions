/* exported countdown */
function countdown(num: number): number[] {
  // Base Case
  if (num <= 0) return [0];

  const count = [];
  for (let i = num; i >= 0; i--) {
    count.push(i);
  }

  return count;
}
