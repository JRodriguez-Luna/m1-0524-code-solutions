# css-psuedo-classes-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is a pseudo-class?

  > a keyword added to a selector that specifies a special state of the selected element(s).

- What are CSS pseudo-classes useful for?

## Notes

:hover - when the user designates an element with a pointing device, but does not necessarily activate it.

- Commonly used:
  > links, buttons, and other interactive elements to indicate an element can be interacted with.

```css
button:hover {
  background-color: yellow;
}
```

:active - when an element is being activated by the user.

> ex: Clicking a button and holding the mouse button down.

```css
button:active {
  background-color: blue;
}
```

:focus - when an element has received focus, either from the user selecting it with the use of a keyboard or
by activating it with the mouse (e.g. a form input)

```css
input:focus {
  border-color: green;
}
```

:nth-child() - pseudo-class targets elements based on their position in a group of siblings.

> Useful for styling specific items withing a container, like alternating row colors in a table or

    selecting specific items in a list.

Example of applying background color to every other table row

```css
tr:nth-child(odd) {
  background-color: #eee;
}
```

pseudo-class Syntax:
(:) followed by the pseudo-class name (e.g. :hover)
functional pseudo-class => e.g. :dir()

Ex's: button:hover
