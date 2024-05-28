/* exported sumAll */
const sumAll = (numbers: number[]): number => {
  if (numbers.length <= 1) return numbers[0];

  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }

  return sum;
};
