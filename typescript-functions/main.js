'use strict';
// Ex. 1
function convertMinutesToSeconds(minutes) {
  return minutes * 60;
}
const seconds = convertMinutesToSeconds(5);
console.log('convertMinutesToSeconds:', seconds);
// Ex. 2
function greet(name) {
  return 'Hey ' + name + '!';
}
const greeting = greet('Jesus');
console.log('greet:', greeting);
// Ex. 3
const getArea = (width, height) => width * height;
const area = getArea(17, 42);
console.log('getArea:', area);
const person = {
  firstName: 'Lelouche',
  lastName: 'Lamperouge',
};
const getFirstName = (person) => {
  return person.firstName;
};
const firstName = getFirstName(person);
console.log('getFirstName:', firstName);
// Ex.5
const getLastElement = (array) => {
  const lastIndex = array.length - 1;
  return array[lastIndex];
};
const lastElem = getLastElement(['propane', 'and', 'propane', 'accessories']);
console.log('getLastElement:', lastElem);
// Ex. 6
function callOtherFunction(otherFunction, params) {
  return otherFunction(params);
}
const sec = callOtherFunction(convertMinutesToSeconds, 10); // -> 600
const accost = callOtherFunction(getLastElement, ['hello', 'Goodbye', 'Aloha']); // -> "Aloha"
console.log('callOtherFunction (number):', sec);
console.log('callOtherFunction (string):', accost);
