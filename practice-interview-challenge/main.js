"use strict";
function getRangeReport(start, end) {
    let total = 0; // the sum of all integers from start to end.
    const odds = []; // an array containing all of the odd integers from start to end.
    const evens = []; // an array containing all of the even integers from start to end.
    const range = []; // an array containing all integers from start to end.
    let avg = 0; // the average of all integers from start to end.
    for (let i = start; i <= end; i++) {
        total += i; // total
        // if even, else odd
        if (i % 2 === 0) {
            evens.push(i);
        }
        else {
            odds.push(i);
        }
        // range
        range.push(i);
    }
    // average
    avg = total / range.length;
    const obj = {
        average: avg,
        evens: evens,
        odds: odds,
        range: range,
        total: total,
    };
    return obj;
}
