# dom-events-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- Why do we log things to the console?

  > To see what our code is doing and helps developers debug any issue found.

- What is the purpose of events and event handling?

  > Events and event handling allow developers to make web pages interactive by responding to user actions, such as clicks, hovers, and form submissions.

- Are all possible parameters required to use a JavaScript method or function?

  > No, not all parameters are required. Many methods and functions have optional parameters that can be omitted.

- What method of element objects lets you set up a function to be called when a specific type of event occurs?

  > The 'addEventListener' method.

- What is a callback function?

  > A callback function is a function passed as an argument to another function, to be executed later, often in response to an event.

- What object is passed into an event listener callback when the event fires?

  > The event object. The '$' variable is calling the event.

- What is the `event.target`? If you weren't sure, how would you check? Where could you get more information about it?

  > 'event.target' is the element that triggered the event. To check it, you can log 'event.target' to the console.

- What is the difference between these two snippets of code?

  ```js
  element.addEventListener('click', handleClick);
  ```

  The 'handleClick' function is passed by reference and will be called when the event occurs.

  ```js
  element.addEventListener('click', handleClick());
  ```

  The 'handleClick' function is immediately invoked and its return value is passed to 'addEventListener', which is incorrect.

## Notes

#### Basics of Event Handling

- **Events**: Actions or occurrences in the browser, such as clicks, hovers, form submissions, etc.
- **Event Handlers**: Functions that respond to these events, enabling interactivity on web pages.

#### Callback Functions

- **Definition**: Functions passed as arguments to other functions, executed at a later time.
- **Usage in Event Handling**: Often used as event handler functions.
- **Example**:
  ```javascript
  function greeting(name) {
    return `Hello ${name}`;
  }
  function processUserInput(callback) {
    const name = prompt('Please enter your name');
    callback(name);
  }
  processUserInput(greeting);
  ```

#### Event Listeners

- **Preferred Method**: `addEventListener`

  - Syntax: `element.addEventListener('eventType', callbackFunction);`
  - This method allows attaching multiple event handlers to an element.
  - Example:
    ```javascript
    const button = document.querySelector('button');
    button.addEventListener('click', () => {
      alert('Button clicked!');
    });
    ```
  - Example 2:

    ```javascript
    const $button = document.querySelector('button');

    function handleClick(event: Event) {
      alert('Button clicked!');
    }

    $button.addEventListener('click', handleClick);
    ```

  ```


  (These also exist but are not preferred)
  ```

- **Inline Event Handlers**
  - Specify an event handler directly into the HTML markup using an event attribute:
    - onclick
    - onload
    - onmouseover
    - etc.
  - Example (Inline):
  ```html
  <button onclick="alert('Button clicked!')">Click Me</button>
  ```
- **Element Property**
  - Assign an event handler to an element's event handler property in your JavaScript code. Similar to inline event handlers, but separates your JavaScript from your HTML.
    Example:
  ```javascript
  const $button = document.getElementById('myButton');
  $button.onclick = function (event: Event) {
    alert('Button clicked!');
  };
  ```

#### The Event Object

- **Creation**: Automatically created by the browser when an event occurs.
- **Contents**: Contains details about the event, such as the event type, the target element, and more.
- **Access in Handlers**: Passed as an argument to event handler functions.
- **Example**:
  ```javascript
  const button = document.querySelector('button');
  button.addEventListener('click', (event) => {
    console.log('event', event);
    console.log('event.target', event.target);
  });
  ```

#### Throwing Errors

- **Purpose**: To signal unexpected issues during code execution.
- **Benefit in TypeScript**: Helps catch potential issues ahead of time since TypeScript does not run in the browser.
- **Example**:
  ```javascript
  const button = document.querySelector('button');
  if (!button) throw new Error('Button not found');
  button.addEventListener('click', () => {});
  ```

#### Best Practices

- **Use `addEventListener`**: Preferred for its flexibility and separation of HTML and JavaScript.
- **Avoid Inline Event Handlers**: Inline event handlers mix HTML and JavaScript, making code harder to maintain.
- **Event Object Utilization**: Use the event object for detailed information about events, such as `event.target`.

#### Key Concepts

- **Event Handling**: The process of responding to events to create interactive web applications.
- **Event Object**: Provides context about the event, such as the element that triggered the event and additional details.
- **Callback Functions**: Enable more flexible and reusable code by passing different functions for various events.
