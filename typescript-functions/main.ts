// Ex. 1
function convertMinutesToSeconds(minutes: number): number {
  return minutes * 60;
}

const seconds: number = convertMinutesToSeconds(5);
console.log('convertMinutesToSeconds:', seconds);

// Ex. 2
function greet(name: string): string {
  return 'Hey ' + name + '!';
}

const greeting: string = greet('Jesus');
console.log('greet:', greeting);

// Ex. 3
const getArea = (width: number, height: number): number => width * height;

const area: number = getArea(17, 42);
console.log('getArea:', area);

// Ex. 4
interface Person {
  firstName: string;
  lastName: string;
}

const person: Person = {
  firstName: 'Lelouche',
  lastName: 'Lamperouge',
};

const getFirstName = (person: Person): string => {
  return person.firstName;
};

const firstName: string = getFirstName(person);
console.log('getFirstName:', firstName);

// Ex.5
const getLastElement = (array: Array<unknown>): any => {
  const lastIndex: number = array.length - 1;
  return array[lastIndex];
};

const lastElem: unknown = getLastElement([
  'propane',
  'and',
  'propane',
  'accessories',
]);
console.log('getLastElement:', lastElem);

// Ex. 6
function callOtherFunction(otherFunction: Function, params: unknown): any {
  return otherFunction(params);
}

const sec: number = callOtherFunction(convertMinutesToSeconds, 10); // -> 600
const accost: string = callOtherFunction(getLastElement, [
  'hello',
  'Goodbye',
  'Aloha',
]); // -> "Aloha"

console.log('callOtherFunction (number):', sec);
console.log('callOtherFunction (string):', accost);
