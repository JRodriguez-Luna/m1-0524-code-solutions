# typescript-async-await-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What are the `async` and `await` keywords used for?
  > They are used to write asynchronous code in a synchronous style. async declares a function that returns a Promise, and await pauses the execution until the Promise is resolved or rejected.

- How do `async` and `await` differ from `Promise.then` and `Promise.catch`?
  > async/await provides a more readable, sequential approach to handling Promises, while Promise.then and Promise.catch require chaining and can lead to less readable code.

- When do you use `async`?
  > When defining a function that contains asynchronous operations.

- When do you use `await`? When do you _not_ use `await`? (What happens if you `await` a synchronous function?)
  > Use await when you need to pause execution until a Promise is resolved. Do not use await with synchronous functions, as it will unnecessarily delay execution.

- How do you handle errors with `await`?
  > Use try/catch blocks around the await statement to handle errors.

- What do `try`, `catch` and `throw` do? When do you use them?
  > try contains code that might throw an error. catch handles errors from the try block. throw is used to manually trigger an error.

- What happens if you forget to use `await` on a Promise? In that case, what happens to the Promise rejection?
  > The function continues execution without waiting for the Promise. The Promise rejection may go unhandled or be caught later, potentially causing issues.

- Which style of asynchronous programming do you prefer — callbacks, `Promise.then`, or `async/await`? Why?
  > Async/await is generally preferred for its readability, simplicity, and closer resemblance to synchronous code.

## Notes

#### **`async` and `await` Basics:**
- **`async` keyword:**
  - Used to declare a function that returns a Promise.
  - Makes the function automatically return a Promise, even if the code inside it doesn't explicitly return one.

- **`await` keyword:**
  - Pauses the execution of the `async` function until the Promise is resolved or rejected.
  - Only works inside `async` functions.
  - Allows you to write asynchronous code that looks and behaves like synchronous code.

#### **Difference from `Promise.then` and `Promise.catch`:**
- **`Promise.then` and `Promise.catch`:**
  - These methods are used to handle resolved or rejected Promises in a chain-like manner.
  - Can make the code less readable when chaining multiple asynchronous tasks.

- **`async/await`:**
  - Offers a more readable, linear structure for handling asynchronous tasks.
  - Error handling can be done using `try/catch` blocks, similar to synchronous code.

#### **When to Use `async` and `await`:**
- **Use `async`** when defining a function that contains asynchronous operations.
- **Use `await`** when you want to pause the execution of the function until a Promise is settled.
- **Don't use `await`** with synchronous functions or operations, as it would create unnecessary pauses.

#### **Error Handling with `await`:**
- Use `try/catch` blocks to handle errors when using `await`.
- **`try`:** Contains code that might throw an error.
- **`catch`:** Executes code if an error occurs in the `try` block.
- **`throw`:** Manually trigger an error.

#### **Consequences of Forgetting `await`:**
- If you forget to use `await`, the function continues execution without waiting for the Promise to resolve.
- Unhandled Promise rejections can cause issues, and the error may not be caught where you expect it.

#### **Asynchronous Programming Preferences:**
- **Callbacks:** Often lead to "callback hell" with nested functions.
- **Promises:** Offer better readability and error handling but can still become complex.
- **Async/await:** Preferred for its simplicity, readability, and closer resemblance to synchronous code.
