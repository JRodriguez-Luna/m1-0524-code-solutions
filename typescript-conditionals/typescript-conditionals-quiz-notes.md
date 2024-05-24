# typescript-conditionals-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- Give 6 examples of comparison operators.

  - == (equal to)
  - != (not equal to)
  - === (strict equal to)
  - !== (strict not equal to)
  - > (greater than)
  - < (less than)
  - > = (greater than or equal to)
  - <= (less than or equal to)

- What data type do comparison expressions evaluate to?

  > Comparison expressions evaluate to a boolean data type (true or false).

- What is the purpose of an `if` statement?

  > The purpose of an if statement is to execute a block of code only if a specified condition evaluates to true.

- Is `else` required in order to use an `if` statement?

  > No, else is not required to use an if statement.
  > The else statement is optional and provides an alternative block of code to execute if the if condition evaluates to false.

- Describe the syntax (structure) of an `if` statement.

```ts
if (condition) {
  // code block to be executed if the condition is true
} else if (anotherCondition) {
  // code block to be executed if the anotherCondition is true
} else {
  // code block to be executed if all conditions are false
}
```

- What are the three logical operators?

  > && (logical AND)
  > || (logical OR)
  > ! (logical NOT)

- How do you compare two different expressions in the same condition?

  > You can compare two different expressions in the same condition using logical operators (&&, ||).
  > Example:

  ```ts
  if (expression1 && expression2) {
    // code block if both expressions are true
  }
  if (expression1 || expression2) {
    // code block if at least one of the expressions is true
  }
  ```

- What is the purpose of a `switch` statement?

  > The purpose of a switch statement is to evaluate an expression and execute a block of code corresponding to
  > the first case clause that matches the value of the expression.
  > It is used for checking multiple conditions against the same variable.

- Is a `default` clause required in order to use a `switch` statement?
  > No, a default clause is not required to use a switch statement.
  > However, it is recommended to include a default clause to handle any cases that are not explicitly matched.

## Notes
