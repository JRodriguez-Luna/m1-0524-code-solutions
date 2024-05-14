# typescript-intro-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- When was TypeScript introduced?
  -> TypeScript was introduced in October 2012.

- Who created TypeScript?
  -> Microsoft created TypeScript.

- What does the TypeScript `Compiler` do?
  -> A computer program that converts one language into code the computer can run.
  -> During this, it checks for error or the structure of the code, which help with
  debugging.

- How can you compile TypeScript to JavaScript?
  -> We use the tsc compiler('TypeScript Compiler') to take and compile our TS into
  JS so that the browser can read it.

- What are some benefits of using TypeScript?
  -> Some benefits of using TS are:
  - writing more robust and easier-to-read JS
  - Helps with catching bugs and errors faster
  - Runs compile runtime for debugging.

## Notes

TS vs JS in syntax:

```JS
  const firstName = 'Jesus';
  console.log('Hello, ' + firstName);
```

```TS
  const firstName: string = 'Jesus';
  console.log('Hello, ' + firstName);
```

Adding ': string' we allow TS and the person reading the code that 'firstName' variable will only
be a string.
-> Specifying the variable firstName is a data type string.

If we try to assign a number to firstName in TS, it will result in an error.

```TS
  firstName = 5; //ERROR
```

Typing Reference Data Types

Variables which hold primitive data types allow the creation of types so that every property
of an object or array can have an explicit data type associated with it.
-> Explicitly stating the element of object and arrays is a huge advantage for code and finding data errors.

Object typing

```TS
interface Person {
  name: string,
  age: number,
  address?: string
;}

const jesus: Person = {
  name: 'Jesus',
  age: 24
;}
```

Array Typing:
The data types that the array will contain are set explicitly.

```TS
const arr: number[] = [1, 2, 3, 4, 5];
```

Our variable arr can only be assigned an array of numbers.
-> If we try to adding anything other than a number type, it will result in an error.

Object Array Type:

```TS
interface Person {
  name: string;
  age: number;
  address?: string;
}

const people: Person[] = [
  { name: 'Jesus Rodriguez-Luna', age: 99, address: '123 State Farm' },
];
```

1. A Person interface is being created with its explicit properties and data types.
2. A variable named people is being defined as an array of Person objects.
   This means the people array will be an array of objects,
   and that each object will have the same structure as the Person type.

Typing Functions

```JS
function add(x, y) {
  return x + y;
}
```

```TS
function add(x: number, y: number): number {
  return x + y;
}
```

- A function is defined named add that is receiving 2 parameters x & y.

  - : number was added after each of the parameter names to indicate that
    both of them must be passed number values when called.

- : number is added after the parameter list. This syntax indicates the
  data type the function will return.
  - number is used here because the function is returning the sum of
    two numbers, which is a number value.
