'use strict';
// Array literal
const colors = ['red', 'white', 'blue'];
console.log('value of colors[0]:', colors[0]);
console.log('value of colors[1]:', colors[1]);
console.log('value of colors[2]:', colors[2]);
// Template literal interpolating
console.log(`America is ${colors[0]}, ${colors[1]}, and ${colors[2]}.`);
colors[2] = 'green';
// second template literal interpolating
console.log(`Mexico is ${colors[0]}, ${colors[1]}, and ${colors[2]}.`);
console.log('value of colors:', colors);
console.log('typeof colors:', typeof colors);
// student Array
// Array literal
const students = ['Leo', 'Chip', 'Ish', 'Jesus'];
const numberOfStudents = students.length;
console.log(`There are ${numberOfStudents} students in the class.`);
const lastIndex = numberOfStudents - 1;
const lastStudent = students[lastIndex];
console.log('The last student in the array is', lastStudent);
// student object
console.log('value of students:', students);
console.log('typeof students:', typeof students);
