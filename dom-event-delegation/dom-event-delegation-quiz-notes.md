# dom-event-delegation-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is the `event.target`?

  > 'event.target' is a property of the event object that refers to the element that triggered the event. It points to the element that was the actual target of the event, not the element to which the event listener was attached.

- Why is it possible to listen for events on one element that actually happen its descendent elements?

  > This works because of event bubbling, where the event starts at the target element and bubbles up to its parents, allowing the parent to handle the event.

- What DOM element property tells you what type of element it is?

  > The tagName property tells you the type of element.

- What does the `element.closest()` method take as its argument and what does it return?

  > 'element.closest()' takes a CSS selector and returns the nearest ancestor element that matches the selector, or null if none is found.

- How can you remove an element from the DOM?

  > Using element.remove().

- If you wanted to insert new clickable DOM elements into the page using JavaScript, how could you avoid adding an event listener to every new element individually?
  > Use event delegation by attaching one event listener to a common parent element. This parent element can handle events for all its children.

## Notes

#### Event Delegation

- **Concept**: Instead of adding an event listener to each individual element, you can add one event listener to a parent element and use it to handle events for all its children.
- **Benefits**:
  - **Efficiency**: Reduces the number of event listeners needed, which can improve performance.
  - **Dynamic Element Handling**: Automatically handles events for new elements added to the DOM.
  - **Memory Footprint**: Fewer event listeners mean a lower memory footprint.
  - **Consistency**: Ensures consistent behavior across multiple elements.

#### Example:

```html
<ul class="task-list">
  <li class="task-list-item"><button>Done</button></li>
  <li class="task-list-item"><button>Done</button></li>
</ul>

<script>
  const taskList = document.querySelector('.task-list');

  taskList.addEventListener('click', (event) => {
    const target = event.target as HTMLElement;
    console.log(target); // Logs the element that was clicked
    console.log(target.tagName); // Logs the tag name of the element

    if (target.tagName === 'BUTTON') {
      const taskItem = target.closest('.task-list-item') as HTMLElement;
      console.log(taskItem); // Logs the parent list item element
      taskItem.remove(); // Removes the task list item from the DOM
    }
  });
</script>
```

#### Event Bubbling

- **Concept**: When an event occurs on an element, it triggers not only on that element but also on all its ancestor elements in the DOM tree. This propagation is called bubbling.
- **Usage**: Event bubbling allows parent elements to handle events for their children, making it possible to use event delegation.

#### Example:

```html
<div id="outer">
  <div id="inner">Click me!</div>
</div>

<script>
  const outerDiv = document.querySelector('#outer');

  outerDiv.addEventListener('click', () => {
    console.log('This runs even if you click on the inner div');
  });
</script>
```

- Clicking the inner div triggers the event listener on the outer div because of event bubbling.

#### Type Assertion in TypeScript

- **Concept**: Type assertion allows you to override TypeScript's inferred type and explicitly specify a different type.
- **Usage**: Often used when accessing properties on event targets that TypeScript doesn't automatically recognize.

#### Example:

```typescript
const inputElement = document.querySelector('input');

if (!inputElement) throw new Error('Input element does not exist');

inputElement.addEventListener('change', (event: Event) => {
  const target = event.target as HTMLInputElement;
  console.log(target.value); // Accesses the value property without TypeScript errors
});
```

### Key Points

- **Event Delegation**: Attach a single event listener to a parent element to manage events for its child elements.
- **Event Bubbling**: Events propagate from the target element up to its ancestors, enabling event delegation.
- **Type Assertion**: Explicitly specify the type of a variable to access properties not recognized by TypeScript's default type inference.
