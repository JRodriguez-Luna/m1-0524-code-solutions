// Ex. 1
// A function convertMinutesToSeconds is being defined with a parameters:
// minutes of type number and a return type of number
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
//  An arrow function is being defined with two parameters, width of type number, height of type number,
//  and a return type of number
// and is being assigned to variable getArea
const getArea = (width: number, height: number): number => width * height;

const area: number = getArea(17, 42);
console.log('getArea:', area);

// Ex. 4
// A new interface Person is being declared
interface Person {
  //  The firstName property & lastName property will have a value of string
  firstName: string;
  lastName: string;
}

// A new Object is being assigned to the variable person of type Person.
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
