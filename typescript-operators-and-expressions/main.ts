// ex.1
const width: number = 10;
const height: number = 10;

const area: number = width * height;
console.log('value of area:', area);
console.log('typeof area:', typeof area);

// ex.2
const bill: number = 10;
const payment: number = 20;

const change: number = payment - bill;
console.log('value of change:', change);
console.log('typeof change:', typeof change);

// ex.3
const quizzes: number = 10;
const midterm: number = 80;
const final: number = 89;

const grade: number = (quizzes + midterm + final) / 3;
console.log('value of grade:', grade);
console.log('typeof grade:', typeof grade);

// ex.4
const firstName: string = 'Jesus';
const lastName: string = 'Rodriguez-Luna';

const fullName: string = firstName + lastName;
console.log('value of fullName:', fullName);
console.log('typeof fullName:', typeof fullName);

// ex.5
const pH: number = 4;

const isAcidic: boolean = pH < 7;
console.log('value of isAcidic:', isAcidic);
console.log('typeof isAcidic:', typeof isAcidic);

// ex.6
const headCount: number = 56;

const isSpartan: boolean = headCount === 300;
console.log('value of isSpartan:', isSpartan);
console.log('typeof isSpartan:', typeof isSpartan);

// ex.7
let motto: string = fullName;

motto += ' is the GOAT!';
console.log('value of motto:', motto);
console.log('typeof motto:', typeof motto);
