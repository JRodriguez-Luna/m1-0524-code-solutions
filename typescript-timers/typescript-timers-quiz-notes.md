# typescript-timers-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is a "callback" function?

  > A callback function is a function that is passed into another function to be executed later, usually after the first function has completed.

- Besides adding an event listener callback function to an element or the `document`, what is one way to delay the execution of a JavaScript function until some point in the future?

  > To delay a function use 'setTimeout()', which runs the function after a specified number of milliseconds.

- How can you set up a function to be called repeatedly without using a loop?

  > Use setInterval() to run a function repeatedly at set time intervals.

- What is the default time delay if you omit the `delay` parameter from `setTimeout()` or `setInterval()`?

  > If you don't set a delay, it defaults to 0 milliseconds, meaning the function runs immediately.

- What do `setTimeout()` and `setInterval()` return?
  > They return a unique ID that can be used with clearTimeout() or clearInterval() to stop the timer.

## Notes

**Callback Function**

- **Definition:** A function passed as an argument to another function, intended to be executed after the completion of the parent function.
- **Usage:** Commonly used for handling asynchronous operations, like waiting for a timer or an event to complete.
- **Common in:** Event handling, `setTimeout`, `setInterval`, and AJAX requests in JavaScript.

**setTimeout**

- **Definition:** A function that executes a specified function after a set amount of time (in milliseconds).
- **Purpose:** Delays the execution of code, useful for deferring actions like UI updates or animations.
- **Method in TypeScript:**
  ```typescript
  setTimeout(() => {
    console.log('Executed after 2 seconds');
  }, 2000);
  ```

**setInterval**

- **Definition:** A function that repeatedly executes a specified function at fixed time intervals (in milliseconds).
- **Purpose:** Used for tasks that need to be performed repeatedly, such as updating a clock or continuously polling for data.
- **Method in TypeScript:**
  ```typescript
  let count = 0;
  const intervalId = setInterval(() => {
    count++;
    console.log('Count:', count);
  }, 1000);
  ```

**clearInterval**

- **Definition:** A function that stops the execution of a function set by `setInterval`.
- **Purpose:** Prevents further execution of repeated tasks once a certain condition is met.
- **Method in TypeScript:**
  ```typescript
  clearInterval(intervalId);
  ```

**Benefits of Callback Functions, `setTimeout`, and `setInterval`**

- **Asynchronous Control:** Allows for non-blocking code execution, essential for responsive web applications.
- **Time Management:** Enables precise control over when and how frequently code is executed, important for timed events and animations.
- **Simplified Code:** Using callbacks, `setTimeout`, and `setInterval` simplifies the handling of tasks that depend on timing, improving code readability and maintainability.
