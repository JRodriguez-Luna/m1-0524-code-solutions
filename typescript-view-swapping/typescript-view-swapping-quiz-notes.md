# typescript-view-swapping-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is the `event.target`?

  > The element that triggered the event.

- What is the effect of setting an element to `display: none`?

  > It hides the element and removes it from the document flow.

- What does the `element.matches()` method take as an argument and what does it return?

  > Takes a CSS selector string and returns true if the element matches the selector, otherwise false.

- How can you retrieve the value of an element's attribute?

  > Using the getAttribute() method: element.getAttribute('attributeName').

- At what steps of the solution would it be helpful to log things to the console?

  > After selecting DOM elements, inside the event listener, during loops, and before/after class or attribute changes.

- If you were to add another tab and view to your HTML, but you didn't use event delegation, how would your TypeScript code be written instead?

  > You would need to add a separate event listener for each tab element.

- If you didn't use a loop to conditionally show or hide the views in the page, how would your TypeScript code be written instead?
  > You would manually set each view's visibility based on the clicked tab.

## Notes

#### Why this does not work:

'view' is typed as Element by default because 'NodeList' (which querySelectorAll returns) is a collection of 'Element' objects. The 'Element' interface DOES NOT have a 'dataset' property, which is why TypeScript is giving an error. The 'dataset' property exists on 'HTMLElement', which extends 'Element'.

```ts
$views.forEach((view) => {
  console.log('view:', view);
  console.log(view.dataset.view as HTMLElement);

  if (view.getAttribute('dataset') === $dataSet) {
    console.log('FOUND MATCH');
  } else {
    console.log('FAILED');
  }
});
```

#### Proper way:

- explicitly tell TypeScript that view is an HTMLElement and not just an Element

```ts
$views.forEach((view) => {
  const dataView = view as HTMLElement;
  console.log('dateView:', dataView);

  if (dataView.dataset.view === $dataSet) {
    console.log('FOUND MATCH');
  } else {
    console.log('FAILED');
  }
});
```

1. **Event Target**: Refers to the element that triggered the event.

2. **Effect of `display: none`**: Hides the element and removes it from the document flow.

3. **Element.matches() Method**: Takes a CSS selector string as an argument and returns true if the element matches the selector, otherwise false.

   ```typescript
   const div = document.querySelector('div');

   if (div.matches('.myClass')) {
     console.log('The <div> has class "myClass"');
   } else {
     console.log('The <div> does not have class "myClass"');
   }
   ```

4. **Retrieve Element Attribute**: Use `getAttribute('attributeName')` method to fetch an element's attribute value.

   ```typescript
   const div = document.querySelector('div');
   const classValue = div.getAttribute('class');
   ```

5. **Logging Helpful Steps**: Console logs are useful after selecting DOM elements, inside event listeners, during loops, and before/after class or attribute changes.

6. **Handling Additional Tabs Without Event Delegation**: You would need separate event listeners for each tab element.

7. **Conditionally Showing Views Without Looping**: Manually set visibility for each view based on the clicked tab.

- **matches Method**: Checks if an element matches a CSS selector.

- **dataset Property**: Accesses custom data attributes (`data-*`).

- **getAttribute Method**: Retrieves attribute values from HTML elements.
