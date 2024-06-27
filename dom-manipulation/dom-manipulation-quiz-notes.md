# dom-manipulation-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is the `className` property of element objects?

  > 'className' lets you access and change the CSS classes applied to an element.

- How do you update the CSS class attribute of an element using JavaScript?

  > You update it by assigning a new value to the element's className property.

- What is the `textContent` property of element objects?

  > 'textContent' gives you access to the text inside an element, allowing you to read or change it.

- How do you update the text within an element using JavaScript?

  > You update it by assigning a new value to the element's textContent property.

- Is the `event` parameter of an event listener callback always useful?

  > No, it's optional. It provides details about the event triggered, like the element involved.

- Would this assignment be simpler or more complicated if we didn't use a variable to keep track of the number of clicks?

  > Yes, it would be more complicated because variables organize data for easier management and interaction handling.

- Why is storing information about a program in variables better than only storing it in the DOM?
  > Variables make code more organized, manageable, and efficient by separating data from presentation concerns in the DOM.

## Notes

### textContent Property

- **Definition:** Represents the text content of an element and all its descendants.
- **Functionality:**
  - **Getter:** Retrieves the current text content of an element.
    ```javascript
    const element = document.querySelector('selector');
    const text = element.textContent;
    ```
  - **Setter:** Sets or updates the text content of an element.
    ```javascript
    const element = document.querySelector('selector');
    element.textContent = 'New text content';
    ```

### className Property

- **Definition:** Manages the CSS classes applied to an element as a space-separated string.
- **Functionality:**

  - **Getter:** Retrieves the current classes applied to an element.
    ```javascript
    const element = document.querySelector('selector');
    const classes = element.className;
    ```
  - **Setter:** Sets or updates the classes applied to an element (replaces existing classes).
    ```javascript
    const element = document.querySelector('selector');
    element.className = 'class1 class2 class3';
    ```

- **Notes:**
  - When updating `className`, existing classes are replaced. Include all desired classes in the new string.
  - Class names in HTML do not include a dot (`.`); dots are used only in CSS selectors.
