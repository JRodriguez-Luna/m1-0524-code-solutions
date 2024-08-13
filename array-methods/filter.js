"use strict";
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const names = [
    'Ada',
    'Hedy',
    'Jean',
    'Grace',
    'Evelyn',
    'Joan',
    'Elizabeth',
    'Janese',
    'Donna',
];
//  create an array that contains only the even numbers
const evenNum = numbers.filter((num) => num % 2 === 0);
console.log('evenNum:', evenNum);
//  create an array that contains all names that do not include a 'D' or 'd'
function noDValidation(name) {
    for (let i = 0; i < name.length; i++) {
        if (name[i] === 'd' || name[i] === 'D')
            return false;
    }
    return name;
}
const noD = names.filter(noDValidation);
console.log('noD:', noD);
