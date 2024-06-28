# dom-creation-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- Does the `document.createElement()` method insert a new element into the page?

  > No, it creates the element but doesn't add it to the page.

- How do you add an element as a child to another element?

  > Use the 'appendChild()', 'append()', or 'prepend()' method

- What do you pass as the arguments to the `element.setAttribute()` method?

  > The attribute name and the attribute value.

- What steps do you need to take in order to insert a new element into the page?

  > Create the element, set its attributes (if any), and append it to an existing element.

- What is the `textContent` property of an element object for?

  > It sets or gets the text inside an element.

- Name two ways to set the `class` attribute of a DOM element.

  > Use 'element.className' or 'element.setAttribute('class', 'className')'.

- What are two advantages of defining a function to do create something (like the work of creating a DOM tree)?
  > Reusability and readability.

## Notes

#### Creating Elements

- **`document.createElement(tagName)`**
  - Creates a new element with the specified tag name.
  - Example:
    ```javascript
    const button = document.createElement('button');
    ```

#### Setting Attributes and Properties

- **`setAttribute(name, value)`**

  - Sets the value of an attribute on the specified element.
  - Example:
    ```javascript
    button.setAttribute('id', 'submit-button');
    button.setAttribute('type', 'submit');
    ```

- **Setting Properties Directly**
  - Example:
    ```javascript
    button.className = 'submit-button';
    button.textContent = 'Submit';
    ```

#### Appending Elements to the DOM

- **`appendChild(newChild)`**

  - Adds a new child node to an element as the last child.
  - Example:
    ```javascript
    document.body.appendChild(button);
    ```

- **`append()`**

  - Inserts a set of Node objects or DOMString objects after the last child of the parent node.
  - Example:
    ```javascript
    document.body.append(divElement, spanElement);
    ```

- **`prepend()`**
  - Inserts a set of Node objects or DOMString objects before the first child of the parent node.
  - Example:
    ```javascript
    document.body.prepend(divElement, spanElement);
    ```

#### Common Properties and Methods

- **`textContent`**

  - Sets or returns the text content of the specified node.
  - Example:
    ```javascript
    element.textContent = 'Hello, world!';
    ```

- **Setting the Class Attribute**
  - Using `className`:
    ```javascript
    element.className = 'my-class';
    ```
  - Using `setAttribute`:
    ```javascript
    element.setAttribute('class', 'my-class');
    ```

#### Example: Creating and Appending a Button

```javascript
const button = document.createElement('button');
button.setAttribute('id', 'submit-button');
button.setAttribute('type', 'submit');
button.className = 'submit-button bg-black';
button.textContent = 'Submit';

document.body.appendChild(button);
```
