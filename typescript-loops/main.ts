/* exported getNumbersToTen,
            getEvenNumbersToTwenty,
            repeatWord,
            logEachCharacter,
            doubleAll,
            getKeys,
            getValues
 */

function getNumbersToTen(): number[] {
  const numbers = [];
  let currentNumber = 1;

  while (currentNumber <= 10) {
    numbers.push(currentNumber);
    currentNumber++;
  }

  return numbers;
}

const getEvenNumbersToTwenty = (): number[] => {
  const evenNumbers = [];
  let currentNumber = 2;

  while (currentNumber < 20) {
    evenNumbers.push(currentNumber);
    currentNumber += 2;
  }

  return evenNumbers;
};

function repeatWord(word: string, times: number): string {
  let count = 1;
  let repeated = '';

  while (count <= times) {
    repeated += word;
    count++;
  }

  return repeated;
}

const logEachCharacter = (str: string): void => {
  for (let i = 0; i < str.length; i++) console.log(str[i]);
};

function doubleAll(numbers: number[]): number[] {
  const doubled = [];

  for (let i = 0; i < numbers.length; i++) {
    doubled.push(numbers[i] * 2);
  }

  return doubled;
}

// Record Utility Type - Comeback to this!
const getKeys = (obj: Record<string, unknown>): string[] => {
  const keys = [];

  for (const key in obj) {
    keys.push(key);
  }

  return keys;
};

// - Comeback to this!
function getValues(obj: Record<string, unknown>): unknown[] {
  const values = [];

  for (const key in obj) {
    values.push(obj[key]);
  }

  return values;
}
