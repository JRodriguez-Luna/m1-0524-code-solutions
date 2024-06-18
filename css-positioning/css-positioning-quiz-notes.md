# css-positioning-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is the **default** value for the `position` property of HTML elements?

  > The default value is static.

- How does setting `position: relative` on an element affect document flow?

  > The element stays in its normal position within the document flow.

- How does setting `position: relative` on an element affect where it appears on the page?

  > You can move the element from its normal position using the top, right, bottom, and left properties.

- How does setting `position: absolute` on an element affect document flow?

  > The element is removed from the normal document flow.

- How does setting `position: absolute` on an element affect where it appears on the page?

  > The element is placed precisely where you want it, based on its nearest positioned ancestor.

- How do you constrain an absolutely positioned element to a containing block?

  > Set position: relative on the containing block.

- What are the four box offset properties?
  > The four box offset properties are top, right, bottom, and left.

## Notes

General Information

- **CSS Position Property:** Controls where elements appear and their impact on document flow.

Types of Positioning

1. **Static (default):**

   - Normal flow of the document.

2. **Relative:**

   - Element stays in the flow.
   - Can be moved using `top`, `right`, `bottom`, `left` without affecting other elements.

3. **Absolute:**

   - Element is removed from the flow.
   - Positioned relative to the nearest positioned ancestor (non-static).

4. **Fixed:**
   - Element is removed from the flow.
   - Positioned relative to the viewport and does not move when the page is scrolled.
