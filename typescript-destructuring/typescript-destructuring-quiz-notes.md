# typescript-destructuring-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is destructuring, conceptually?

  > Destructuring is a way to unpack values from objects or arrays into separate variables. It makes it easier to work with complex data structures by allowing you to extract specific parts directly.

- What is the syntax for `Object` destructuring?

  > Use curly braces {} to specify which properties to extract from an object.

  ```typescript
  const { prop1, prop2 } = object;
  ```

- What is the syntax for `Array` destructuring?

  > Use square brackets [] to specify which elements to extract from an array.

  ```typescript
  const [elem1, elem2] = array;
  ```

- How can you tell the difference between destructuring and creating `Object`/`Array` literals?

  > Destructuring extracts values from an existing object or array.
  > Example: const { title } = book;

  > Creating Literals involves defining a new object or array.
  > Example: const book = { title: '1984' };

## Notes

### Destructuring in TypeScript

**Destructuring** is a feature that allows you to extract values from objects or arrays and assign them to variables in a more concise way.

#### Object Destructuring

- **Concept**: Unpacks properties from objects into individual variables.

- **Syntax**:

  ```typescript
  const { property1, property2 } = object;
  ```

- **Example**:

  ```typescript
  interface Person {
    firstName: string;
    lastName: string;
  }

  const person: Person = { firstName: 'John', lastName: 'Doe' };
  const { firstName, lastName } = person;
  console.log(firstName, lastName); // Outputs: John Doe
  ```

- **Aliasing**: Renaming variables during destructuring.

  ```typescript
  const { firstName: fName, lastName: lName } = person;
  console.log(fName, lName); // Outputs: John Doe
  ```

- **Default Values**: Providing default values for missing properties.

  ```typescript
  interface Person {
    firstName: string;
    lastName: string;
    middleName?: string;
  }

  const person: Person = { firstName: 'John', lastName: 'Doe' };
  const { firstName, middleName = 'N/A', lastName } = person;
  console.log(firstName, middleName, lastName); // Outputs: John N/A Doe
  ```

#### Array Destructuring

- **Concept**: Unpacks elements from arrays into individual variables.

- **Syntax**:

  ```typescript
  const [element1, element2] = array;
  ```

- **Example**:

  ```typescript
  const numbers: number[] = [70, 80, 90];
  const [x, y, z] = numbers;
  console.log(x, y, z); // Outputs: 70, 80, 90
  ```

- **Default Values**: Providing default values for missing elements.
  ```typescript
  const [a, b, c, d = 100] = numbers;
  console.log(a, b, c, d); // Outputs: 70, 80, 90, 100
  ```

#### Differentiating Destructuring from Literals

- **Destructuring**: Extracting values from existing objects or arrays.

  - Example: `const { title } = book;`

- **Creating Literals**: Defining new objects or arrays.
  - Example: `const book = { title: '1984' };`

Destructuring simplifies accessing data from complex structures, while creating literals involves defining those structures.
