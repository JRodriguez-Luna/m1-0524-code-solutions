# javascript-forms-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What event is fired when a user places their cursor in a form control?

  > It fires the focus event.

- What event is fired when a user's cursor leaves a form control?

  > It fires the blur event.

- What event is fired as a user changes the value of a form control?

  > The input event is fired.

- What event is fired when a user clicks the `"submit"` button within a `<form>`?

  > The submit event is fired

- What does the `event.preventDefault()` method do?

  > It stops the default action of the event from happening.

- What does submitting a form without `event.preventDefault()` do?

  > It will submit the form normally, causing the page to reload.

- What property of a form element object contains all of the form's controls.

  > The elements property.

- What property of a form control object gets and sets its value?

  > The value property.

- What is one risk of writing a lot of code without checking to see if it works so far?

  > May end up with multiple errors that are hard to diagnose.

- What is an advantage of having your console open when writing a JavaScript program?
  > It helps catch and fix errors early by showing error messages in real-time.

## Notes

#### Accessing Form Control Elements

- Each `<form>` element has an `elements` property listing all contained form controls.
- Controls can be accessed using:
  - Index
  - `id` attribute
  - `name` attribute

Example:

```html
<form id="my-form">
  <label>
    Username:
    <input type="text" id="user-username" name="username" />
  </label>
  <label>
    Full name:
    <input type="text" id="user-full-name" name="full-name" />
  </label>
  <label>
    Password:
    <input type="password" id="user-password" name="password" />
  </label>
</form>
```

```javascript
const formElements = document.querySelector('#my-form').elements;
const inputByIndex = formElements[0];
const inputById = formElements['user-password'];
const inputByName = formElements.username;
```

#### Union Types in TypeScript

- Union types allow a variable to hold multiple types of values.
- Useful for creating flexible and expressive code.

Example:

```typescript
let myVar: string | number;
myVar = 'hello'; // Valid
myVar = 10; // Also valid
```

Using type assertion and union types:

```typescript
const eventTarget = event.target as HTMLInputElement | HTMLTextAreaElement;
```

Combining union types in interfaces:

```typescript
interface Student {
  name: string;
  age: number;
  address: string | null;
}
```

#### Focus Event

- Fired when an element receives focus.
- Commonly used for clearing validation errors or highlighting fields.

Example:

```typescript
const input = document.querySelector('input');
if (!input) throw new Error('Input does not exist');

input.addEventListener('focus', (event: Event) => {
  const eventTarget = event.target as HTMLInputElement;
  eventTarget.style.background = 'lightblue';
});
```

#### Blur Event

- Fired when an element loses focus.
- Often used for validating input values when a user moves away from a field.

Example:

```typescript
const input = document.querySelector('input');
if (!input) throw new Error('Input does not exist');

input.addEventListener('blur', (event: Event) => {
  const eventTarget = event.target as HTMLInputElement;
  if (!eventTarget.value) {
    console.log('Input is required');
  }
});
```

#### Input Event

- Fired synchronously when the value of an `<input>`, `<select>`, or `<textarea>` element changes.
- Useful for creating responsive interfaces that react as the user types.

Example:

```typescript
const input = document.querySelector('input');
if (!input) throw new Error('Input does not exist');

input.addEventListener('input', (event: Event) => {
  const eventTarget = event.target as HTMLInputElement;
  console.log('Input value changed to: ' + eventTarget.value);
});
```

#### Submit Event

- Fired when a form is submitted.
- Allows performing validation or other processing before form data is sent.
- Default form submission behavior can be prevented with `preventDefault()`.

Example:

```typescript
const form = document.querySelector('form');
if (!form) throw new Error('Form does not exist');

form.addEventListener('submit', (event: Event) => {
  event.preventDefault();
  console.log('Form submitted');
});
```

#### Extending Types in TypeScript

- The `extends` keyword allows creating new types that include properties and methods of existing types, adding more properties or methods as needed.

Example:

```typescript
interface Shape {
  color: string;
}

interface Square extends Shape {
  sideLength: number;
}

let square: Square = { color: 'blue', sideLength: 10 };
```
