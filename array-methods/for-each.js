"use strict";
const values = [10, 1, 22, 23, 41, 5, 18, 7, 80, 9];
// Log all numbers in order
values.forEach((value) => console.log(value));
// log numbers in reverse order (w/o using .reverse or .toReverse)
console.log('Reverse Order');
values.forEach((val, index, arr) => {
    console.log(arr[arr.length - 1 - index]);
});
