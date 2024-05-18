# javascript-arrays-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What are arrays used for?

  > used to store ordered collections of values.

- Describe array literal notation.

  > A very simple and straightforward way to create an array.

- How are arrays different from "plain" objects?

  > **Arrays**:

  - Ordered collections indexed by numbers.
  - Created with `[]` and accessed by index.
  - Example: `let arr = [1, 2, 3];`

  > **Objects**:

  - Unordered collections of key-value pairs.
  - Created with `{}` and accessed by keys.
  - Example: `let obj = { name: "Alice", age: 25 };`

- What number represents the first index of an array?

  > 0

- What is the `length` property of an array?

  > number of items currently in the array

- How do you calculate the last index of an array?
  > length - 1

## Notes

Array.of() creates a new Array instance with a variable number of arguments, regardless of number or type of the arguments.

```TS
const arr = Array.of(1, 2, 3);
```

Array.from() method creates a new Array instance from an iterable object (like another array, a set or a string) or from
an array-like object (argument object or a NodeList).

Annotating Arrays

1. Array type

```ts
const arr: number[] = [1, 2, 3];
```

2. Generic Array Type -> Array<type>, equivalent to type[] syntax

```ts
const arr: Array<number> = [1, 2, 3];
```

3. Tuple Type - if array has a fixed length and known types at specific positions, you can use a tuple type.

```ts
const tuple: [number, string] = [1, 'a'];
```

4. Array of Any Type - don't know the type? use keyword 'any' type. (should be avoided if possible).

```ts
const arr: any[] = [1, 'a', true];
```

5. Array of Unknown type - Alternative to 'any' is 'unknown'. (preferred way to handle unknown data types, bc it forces you to some sort of type checking or type assertion)

```ts
const unknownArr: unknown[] = [1, 'a', true];
```
