# array-filter-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- `Array.forEach`:
  - What does `Array.forEach` do?
    > Array.forEach executes a provided function once for each element in the array.
  - What should the callback function do?
    > perform any operation on each element, typically involving side effects like logging or modifying external variables, taking three arguments:
      1.  *currentValue* - Current element being processed in the array.
      2.  *index (optional)* - index of the current element being processed in the array.
      3.  *array(optional)* - array that forEach() is being applied to.
  - What is `Array.forEach` useful for?
    > It's useful for executing side effects, such as logging or updating external variables, for each element in an array. It does not return a new array and is not chainable.

- `Array.map`:
  - What does `Array.map` do?
    > Array.map creates a new array populated with the results of calling a provided function on every element in the original array.
  - What should the callback function return?
    > The callback function should return a new value for each element, which is added to the new array.
  - What is `Array.map` useful for?
    > It's useful for transforming each element in an array and creating a new array with the transformed elements, without mutating the original array.

- `Array.find`:
  - What does `Array.find` do?
    > Array.find returns the first element in the array that satisfies the provided testing function. If no element satisfies the condition, it returns undefined.
  - What should the callback function return?
    > The callback function should return a truthy value for the element that satisfies the condition, and a falsy value otherwise.
  - What is `Array.find` useful for?
    > It's useful for finding the first element in an array that matches a specific condition, without having to loop through the entire array manually.

- `Array.filter`:
  - What does `Array.filter` do?
    > Array.filter creates a new array with all elements that pass the test implemented by the provided function.
  - What should the callback function return?
    > The callback function should return true for elements that should be included in the new array and false for elements that should be excluded.
  - What is `Array.filter` useful for?
    > It's useful for creating a subset of an array that meets certain criteria, without mutating the original array.

## Notes

- *`Array.forEach`*:
  - Executes a function for each element in an array.
  - The function can perform actions like logging or modifying external variables.
  - Does not return a new array or modify the original array.

- *`Array.map`*:
  - Creates a new array by applying a function to each element of the original array.
  - The function should return a value, which becomes an element in the new array.
  - Useful for transforming data without changing the original array.

- *`Array.find`*:
  - Returns the first element in an array that meets a specified condition.
  - If no element meets the condition, it returns `undefined`.
  - Useful for quickly finding an element that matches a certain criteria.

- *`Array.filter`*:
  - Creates a new array with elements that pass a test provided by a function.
  - The function should return `true` for elements to include in the new array and `false` for elements to exclude.
  - Useful for extracting a subset of elements from an array based on specific criteria.
