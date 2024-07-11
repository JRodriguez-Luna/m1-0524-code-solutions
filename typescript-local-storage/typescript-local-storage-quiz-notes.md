# typescript-local-storage-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- How do you store data in `localStorage`?

  > Using the localStorage.setItem(key, value) method.

  > key is the name under which the value is stored
  > value is the data you want to store
  > (as a string).

- How do you retrieve data from `localStorage`?

  > Using the localStorage.getItem(key) method

  > key is the name of the data you want to retrieve.
  > This returns the value as a string, or null if the key does not exist.

- What data type can `localStorage` save in the browser?

  > 'localStorage' can save strings.

  > If you need to save objects or arrays, you need to convert them to a string using 'JSON.stringify'.

- When is the safest time to store user data?
  > The safest time to store user data is as soon as it changes, to ensure that no data is lost if the application crashes or the user closes the browser.

## Notes

- `localStorage` is a web storage object that allows JavaScript sites and apps to store data persistently in a user's browser.
- Data in `localStorage` is saved across browser sessions, meaning it remains available even after closing and reopening the browser.
- Ideal for saving non-sensitive data that needs to persist over time, such as user preferences or UI states.

- **Setting Data:**

  - Use `localStorage.setItem(key, value)` to store data.
  - Both `key` and `value` must be strings.
  - Example:
    ```javascript
    localStorage.setItem('name', 'Billy');
    ```

- **Getting Data:**

  - Use `localStorage.getItem(key)` to retrieve data.
  - Returns the value as a string, or `null` if the key does not exist.
  - Example:
    ```javascript
    const name = localStorage.getItem('name');
    console.log(name); // Outputs: 'Billy'
    ```

- **Removing Data:**

  - Use `localStorage.removeItem(key)` to remove data.
  - Example:
    ```javascript
    localStorage.removeItem('name');
    ```

- **Clearing All Data:**
  - Use `localStorage.clear()` to remove all data for the current origin.
  - Example:
    ```javascript
    localStorage.clear();
    ```

### Handling Non-String Data

- `localStorage` can only store strings.
- To store objects or arrays, serialize them with `JSON.stringify` before storing.
- Deserialize them with `JSON.parse` when retrieving.
- Example:

  ```javascript
  const todos = [{ task: 'Finish Homework', completed: true }];
  localStorage.setItem('todos', JSON.stringify(todos));

  const storedTodos = JSON.parse(localStorage.getItem('todos'));
  console.log(storedTodos); // Outputs: [{ task: 'Finish Homework', completed: true }]
  ```

### Storing Data Safely

- Store user data as soon as it changes to ensure persistence.
- Update the application's interface only after the data is safely stored to give users confidence that their data is not lost.
