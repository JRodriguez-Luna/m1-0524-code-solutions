'use strict';
// The Math Object
const heroes = ['Spider-Man', 'Batman', 'Superman', 'Captain America'];
let randomNumber = Math.random();
randomNumber *= heroes.length;
const randomIndex = Math.floor(randomNumber);
console.log('randomIndex:', randomIndex);
const randomHero = heroes[randomIndex];
console.log('randomHero:', randomHero);
// Array Methods
const library = [
  {
    title: 'Atomic Habits',
    author: 'James Clear',
  },
  {
    title: 'Think and Grow Rich',
    author: 'Napoleon Hill',
  },
  {
    title: 'The 5 AM Club',
    author: 'Robin Sharma',
  },
];
// last book
const lastBook = library.pop();
console.log('lastBook:', lastBook);
// first book
const firstBook = library.shift();
console.log('firstBook:', firstBook);
const js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer',
};
const css = {
  title: 'CSS Secrets',
  author: 'Lea Verou',
};
library.push(js);
library.unshift(css);
library.splice((library.length - 1) / 2, 1); // -> remove's think and grow rich
console.log('library:', library);
// String Methods
const fullName = 'Jesus Rodriguez-Luna';
// takes a pattern and divides this string into an ordered
// list of substrings by searching for the pattern,
// put these substrings into an array, and return the array.
const firstAndLastName = fullName.split(' ');
console.log('firstAndLastName:', firstAndLastName);
const firstName = firstAndLastName[0];
// returns this string converted to uppercase
const sayMyName = firstName.toUpperCase();
console.log('sayMyName:', sayMyName);
// Object Methods
const employee = {
  name: 'Jesus',
  age: 24,
  position: 'Care Coordinator I',
};
//  returns an array of a given object's own enumerable
//  string-keyed property name
const employeeKeys = Object.keys(employee);
console.log('employeeKeys:', employeeKeys);
//  static method returns an array of given object's own
//  enumerable string-keyed property values
const employeeValues = Object.values(employee);
console.log('employeeValues:', employeeValues);
//  returns an array of string-keyed property key-value pairs.
const employeePairs = Object.entries(employee);
console.log('employeePairs:', employeePairs);
