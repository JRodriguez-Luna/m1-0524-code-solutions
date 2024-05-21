# javascript-functions-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is a function in JavaScript?

  > A function in JavaScript is a block of code designed to perform a specific task.
  > In TS, functions are specified types for input and output.
  > It can take inputs, process them, and return a result. Functions help in reusing code.

- Describe the parts of a function **definition**.

  > Function keyword: 'function'
  > Function Name: Name given
  > Parameters: Inputs to the function and listed in parentheses.
  > Function Body: The code inside curly braces that runs when the function is called.

- Describe the parts of a function **call**.

  > Call the function name you want to run.
  > The values you pass to the function, listed in parentheses.

- When comparing them side-by-side, what are the differences between a function **call** and a function **definition**?

  > Call: Runs the function using its name and arguments..
  > Definition: Describes what the function does and includes the function keyword, name, parameters, and body.

- What is the difference between a **parameter** and an **argument**?

  > Parameter: variable in function definition
  > Argument: the actual value being passed to the function

- Why are function **parameters** useful?

  > Parameters allow functions to work with different value types like boolean, number, string, etc.This makes the functions flexible and reusable.

- What two effects does a `return` statement have on the behavior of a function?

  > Returns a value and stops the function mid way, skipping the rest of code.

- What is the syntax for defining an arrow function?

  >

  ```ts
  const functionName = (parameter1: unknown, parameter2: unknown): unknown => {
    return expression;
  };
  ```

- When an arrow function's body is not surrounded in curly braces (_concise body syntax_), what changes in its functionality?
  > The return is implicit, so you don't need to use the return keyword or curly braces.

## Notes

Implicit - something that is understood or implied without being directly stated.

> Happens automatically without needing explicit instructions.
