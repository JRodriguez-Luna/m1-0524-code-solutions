# css-transitions-and-transforms-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- The `transition` property is shorthand for which four CSS properties?

  > transition-property
  > transition-duration
  > transition-timing-function
  > transition-delay

- What does the `transform` property do?

  > Modifies the visual appearance of how an element appears on a webpage.

- Give four examples of CSS transform functions.
  > rotate();
  > scale();
  > skew();
  > translate();

## Notes

### Transition Property

The `transition` property is a shorthand that combines four properties to create smooth animations:

1. **transition-property**: Which CSS property you want to animate.
2. **transition-duration**: How long the animation lasts.
3. **transition-timing-function**: The speed curve of the animation (e.g., ease-in, ease-out).
4. **transition-delay**: How long to wait before starting the animation.

Example:

```css
div {
  transition: background-color 2s ease-in-out 1s;
}
```

This means:

- The background color will change.
- It will take 2 seconds to complete.
- The change will start slowly, speed up, then slow down (ease-in-out).
- It will start 1 second after the change is triggered.

### Transform Property

The `transform` property changes how an element looks and is positioned without affecting other elements:

1. **rotate()**: Spins the element.
2. **scale()**: Resizes the element.
3. **skew()**: Tilts the element.
4. **translate()**: Moves the element.

Example:

```css
div {
  transform: rotate(45deg) scale(1.5) translate(100px, 100px);
}
```

This means:

- The element is rotated 45 degrees.
- It is resized to 1.5 times its original size.
- It is moved 100 pixels to the right and 100 pixels down.
