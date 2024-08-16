# typescript-promises-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is the Event Queue model of Promises?

  > When a Promise does something that takes time (like fetching data), it waits in a line (Event Queue) until it's ready. Once it's ready, it gets processed so your program doesn't freeze while waiting.

- What are the three states a Promise can be in?

  > Pending: Still waiting; hasn’t finished yet.
  > Fulfilled: It worked! The promise finished successfully.
  > Rejected: It failed. Something went wrong.

- How do you handle the fulfillment of a Promise?

  > You handle the fulfillment of a Promise using the .then() method. This method allows you to define a callback function that will be executed when the Promise is successfully resolved.

  ```typescript
  promise.then((result) => {
    console.log('Success:', result);
  });
  ```

- How do you handle the rejection of a Promise?
  > You handle the rejection of a Promise using the .catch() method. This method allows you to define a callback function that will be executed when the Promise is rejected due to an error.
  ```typescript
  promise.catch((error) => {
    console.error('Error:', error.message);
  });
  ```

## Notes

### Promises in JavaScript & TypeScript

1. **Event Queue Model of Promises:**

   - JavaScript runtime maintains an Event Queue where asynchronous tasks are placed.
   - The Event Loop processes these tasks once the main execution thread is idle.
   - Promises are placed in this queue and executed asynchronously.

2. **Three States of a Promise:**

   - **Pending:** Initial state, neither fulfilled nor rejected.
   - **Fulfilled:** The operation was successful, triggering the `.then()` handler.
   - **Rejected:** The operation failed, triggering the `.catch()` handler.

3. **Handling Promises:**
   - **Fulfillment:** Use `.then()` to handle successful completion.
   - **Rejection:** Use `.catch()` to handle errors.

#### Example Code: Simple Promise

```typescript
function waitFor(seconds: number): Promise<string> {
  return new Promise<string>((resolve, reject) => {
    if (seconds <= 0) {
      reject(new Error('Seconds must be greater than 0'));
      return;
    }

    setTimeout(() => {
      resolve(`Waited for ${seconds} seconds`);
    }, seconds * 1000);
  });
}

waitFor(3)
  .then((message) => console.log(message))
  .catch((error) => console.error(`Error: ${error.message}`));
```

#### Breakdown

- **Creating a Promise:**

  - The function `waitFor` returns a Promise that resolves after a specified time.
  - If the time is less than or equal to 0, it rejects the Promise immediately.

- **Handling Promise Result:**
  - `then`: Logs the success message once the Promise is fulfilled.
  - `catch`: Logs the error message if the Promise is rejected.

#### Conceptual Model: Event Queue / Event Loop

- **Event Queue Model:**
  - Promises are placed in the Event Queue.
  - The Event Loop runs the queued tasks once the synchronous code finishes.
  - `then`, `catch`, and `finally` handlers are invoked based on the outcome.
