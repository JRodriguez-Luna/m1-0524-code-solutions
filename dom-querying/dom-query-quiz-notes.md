# dom-query-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- Why do we log things to the console?

- What is a "model"?

- Which "document" is being referred to in the phrase Document Object Model?

- What is the word "object" referring to in the phrase Document Object Model?

- What is a DOM Tree?

- Give two examples of `document` methods that retrieve a single element from the DOM.

- Give one example of a `document` method that retrieves multiple elements from the DOM at once.

- Why might you want to assign the return value of a DOM query to a variable?

- What `console` method allows you to inspect the properties of a DOM element object?

- Why would a `<script>` tag need to be placed at the bottom of the HTML content instead of at the top?

- What does `document.querySelector()` take as its argument and what does it return?

- What does `document.querySelectorAll()` take as its argument and what does it return?

## Notes

### DOM - Document Object Model

A representation of a web pages content in the form of objects, allowing developers to manipulate the content,
structure, and styles of a web page.

### Context of an HTML document

DOM represents each element (tags, attributes, text, etc) as a node in the tree. (DOM Tree)

- Referencing a tree-like structure of HTML elements.
  > Each web page is modeled as a tree of objects.
  > HTML document as the root
  > and other elements (<body>, <header>, <div>, etc) as branches and leaves.

Each element page is presented as a node in the DOM Tree.

- Various types of nodes:
  - element nodes
  - attribute nodes
  - and text nodes

Relationship between nodes are like family: parent, children, and siblings.

Example

```html
<!DOCTYPE html>
<html>  <!-- ROOT NODE-->
  <head>  <!-- CHILD LEFT -->
    <title>Page Title</title> <!-- CHILD OF HEAD -->
  </head>
  <body>  <!-- CHILD RIGHT -->
    <h1>Hello, World!<h1> <!-- CHILD OF BODY (left) -->
    <p>Lorem Ipsum</p>  <!-- CHILD OF BODY (right) -->
    <!-- h1 and p elements are siblings (like brother and sister) -->
    <!-- LEAF NODES as well -->
  </body>
</html>
```

In the DOM tree for this HTML:

- The <html> element becomes the root node.

- The <head> and <body> elements are child nodes of <html>.

- The <title>, <h1>, <p> elements are further child nodes of <head> and <body> respectively

- The <h1> and <p> elements are sibling nodes because they share the same parent

- The text inside the <title>, <h1>, <p> elements each form their own text nodes.

## Querying the DOM

### 1. `querySelector(selector)`

**Description**: This method returns the first element that matches a specified CSS selector.

**Syntax**:

```javascript
const $element = document.querySelector(selector);
```

**Example**:

```javascript
// Selects the first element with the class 'my-class'
const $element = document.querySelector('.my-class');

// Selects the first <p> element
const $paragraph = document.querySelector('p');

// Selects the first element with the id 'my-id'
const $elementById = document.querySelector('#my-id');
```

**Notes**:

- Use CSS selectors to specify the element (e.g., `.class`, `#id`, `tag`).
- Returns `null` if no matches are found.

### 2. `querySelectorAll(selector)`

**Description**: This method returns a NodeList of all elements in the document that match a specified CSS selector.

**Syntax**:

```javascript
const $elements = document.querySelectorAll(selector);
```

**Example**:

```javascript
// Selects all elements with the class 'my-class'
const $elements = document.querySelectorAll('.my-class');

// Selects all <a> (link) elements
const $links = document.querySelectorAll('a');

// Selects all <div> elements with the class 'container'
const $divs = document.querySelectorAll('div.container');
```

**Notes**:

- The returned NodeList is not live; it doesn't automatically update when the document changes.
- You can iterate over the NodeList using `forEach`.

### 3. `getElementById(id)`

**Description**: This method returns the element that matches its ID.

**Syntax**:

```javascript
const $element = document.getElementById(id);
```

**Example**:

```javascript
// Selects the element with the id 'my-id'
const $element = document.getElementById('my-id');
```

**Notes**:

- IDs should be unique within a document.
- Returns `null` if no element with the specified ID is found.

### 4. `getElementsByClassName(className)`

**Description**: This method returns a live HTMLCollection of all elements that match the specified class.

**Syntax**:

```javascript
const $elements = document.getElementsByClassName(className);
```

**Example**:

```javascript
// Selects all elements with the class 'my-class'
const $elements = document.getElementsByClassName('my-class');
```

**Notes**:

- The returned HTMLCollection is live; it updates automatically when the document changes.
- Use array-like syntax to access individual elements (`$elements[0]`).

### 5. `getElementsByTagName(tagName)`

**Description**: This method returns a live HTMLCollection of all elements that match the specified tag name.

**Syntax**:

```javascript
const $elements = document.getElementsByTagName(tagName);
```

**Example**:

```javascript
// Selects all <div> elements
const $elements = document.getElementsByTagName('div');

// Selects all <p> elements
const $paragraphs = document.getElementsByTagName('p');
```

**Notes**:

- The returned HTMLCollection is live; it updates automatically when the document changes.
- Use array-like syntax to access individual elements (`$elements[0]`).

### Summary

- **`querySelector`** and **`querySelectorAll`**:

  - Flexible, accept any CSS selector.
  - `querySelector` returns the first matching element.
  - `querySelectorAll` returns a static NodeList of all matching elements.

- **`getElementById`**:

  - Targets a single element by its unique ID.
  - Simple and direct, but IDs must be unique.

- **`getElementsByClassName`**:

  - Returns a live HTMLCollection of elements with the specified class.
  - Useful for dynamically updating collections.

- **`getElementsByTagName`**:
  - Returns a live HTMLCollection of elements with the specified tag name.
  - Useful for working with all elements of a specific type (e.g., all `<div>` elements).
