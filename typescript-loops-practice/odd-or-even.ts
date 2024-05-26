/* exported oddOrEven */
const oddOrEven = (numbers: number[]): string[] => {
  const oddEven = [];

  for (let i = 0; i < numbers.length; i++) {
    oddEven.push(numbers[i] % 2 === 0 ? 'even' : 'odd');
  }

  return oddEven;
};
