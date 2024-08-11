# typescript-operators-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What are the `&&` (logical AND) and `||` (logical OR) operators and how can they be used outside of `if` statements?

  > `&&` and `||` Operators

  - `&&` (AND): Checks if both sides are true. If the first part is false, it stops and returns that. Used for conditions or actions based on truthy values.
  - `||` (OR): Checks if either side is true. If the first part is true, it stops and returns that. Used to set default values when something is falsy.

- What is "short-circuit evaluation" and how does it apply to `&&` and `||`?

  > Short-Circuit Evaluation

  - Stops evaluating as soon as the result is clear:
    - `&&` stops if the first part is false.
    - `||` stops if the first part is true.

- What is the `??` (nullish coalescing) operator and how does it differ from `||`?

  > `??` Operator

  - `??` (Nullish Coalescing): Returns the second value only if the first is `null` or `undefined`.
  - Unlike `||`, it doesn’t treat `0` or `""` as false.

- What is the `?:` (ternary) operator? How does it differ from `if/else`?

  > `?:` (Ternary) Operator

  - Short way to write `if/else` in one line:
    - condition ? result if true : result if false
  - Use it for simple, single decisions.

- What is the `?.` (optional chaining) operator? When would you use it?

  > `?.` (Optional Chaining) Operator

  - Safely access properties on objects that might not exist, without causing errors.
  - Use it when you’re not sure if an object or property exists.

- What is `...` (spread) syntax? How do you use it with arrays and objects?

  > `...` (Spread) Syntax

  - Arrays: Combine or add to arrays.
  - Objects: Copy or add properties to objects.

- What data types can be spread into an array? Into an object?

  > Data Types for Spread

  - Arrays: Can spread arrays, strings, or sets.
  - Objects: Can only spread objects.

- How does spread syntax differ from rest syntax?
  > Spread vs. Rest Syntax
  - Spread (`...`): Expands items into individual elements.
  - Rest (`...`): Gathers remaining items into an array or object.

## Notes

### Logical AND (&&)

- **Syntax**: `expr1 && expr2`
- **Description**: Evaluates `expr2` only if `expr1` is truthy.
- **Example**:
  ```javascript
  const a = true;
  const b = 'Logged in';
  console.log(a && b); // Output: 'Logged in'
  ```

### Logical OR (||)

- **Syntax**: `expr1 || expr2`
- **Description**: Evaluates `expr2` only if `expr1` is falsy.
- **Example**:
  ```javascript
  const a = false;
  const b = 'Guest';
  console.log(a || b); // Output: 'Guest'
  ```

### Nullish Coalescing Operator (??)

- **Syntax**: `expr1 ?? expr2`
- **Description**: Returns `expr2` if `expr1` is null or undefined, otherwise returns `expr1`.
- **Example**:
  ```javascript
  const a = null;
  const b = 'Default';
  console.log(a ?? b); // Output: 'Default'
  ```

### Conditional (Ternary) Operator (?:)

- **Syntax**: `condition ? expr1 : expr2`
- **Description**: Evaluates `expr1` if the condition is true; otherwise, evaluates `expr2`.
- **Example**:
  ```javascript
  const a = 10;
  const b = 5;
  console.log(a > b ? 'a is greater' : 'b is greater'); // Output: 'a is greater'
  ```

### Optional Chaining (?.)

- **Syntax**: `obj?.prop`
- **Description**: Returns `undefined` if `obj` is null or undefined; otherwise, returns `obj.prop`.
- **Example**:
  ```javascript
  const user = { name: 'Alice', address: { zipcode: 12345 } };
  console.log(user?.address?.zipcode); // Output: 12345
  console.log(user?.profile?.age); // Output: undefined
  ```

### Spread Syntax (...)

- **Syntax**:
  - For arrays: `[...iterableObj, newElement]`
  - For objects: `{...obj, newProp: value}`
- **Description**: Allows an iterable (like an array) or an object to be expanded in places where zero or more arguments or elements are expected.
- **Example**:
  - **Arrays**:
    ```javascript
    const arr = [1, 2, 3];
    const newArr = [...arr, 4];
    console.log(newArr); // Output: [1, 2, 3, 4]
    ```
  - **Objects**:
    ```javascript
    const obj = { id: 1, name: 'Alice' };
    const newObj = { ...obj, age: 25 };
    console.log(newObj); // Output: { id: 1, name: 'Alice', age: 25 }
    ```
