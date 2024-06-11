# css-syntax-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What are the names of the individual pieces of a CSS rule?

  > Selectors and Declarations blocks.

- In CSS, how do you select elements by their `class` attribute?

  > Using the dot (.) followed by the class name.

- In CSS, how do you select elements by their tag name?

  > Select a specific element tag.

- In CSS, how do you select an element by its `id` attribute?
  > using the hashtag (#) followed by the id name.

## Notes

CSS: Cascading Style Sheets

- a stylesheet language used to describe the presentation of a doc
  written in HTML or XML.
- Describes how elements should be rendered on screen, on paper,
  in speech, or on other media.

CSS Used for styling web pages.

CSS Syntax

> consist of selectors and declaration blocks.

- Selector
  > points to the HTML element you want to style
- Declaration block
  > contains one or more declarations separated by semicolons.

Syntax:

```css
selector {
  property: value;
}
```

Example:

```css
p {
  color: red;
  text-align: center;
}
```

Makes all <p> elements red and centered.

Inline Styles:

- applied directly within an HTML element using the 'style' attribute.
  Example:

```html
<p style="color: blue; font-size: 20px">
  This is a paragraph with inline styles.
</p>
```

Internal Stylesheet

- placed inside a <style> element in the head section of the HTML document.
  Example:

```html
<!DOCTYPE html>
<html>
  <head>
    <style>
      body {
        background-color: lightgray;
      }
      h1 {
        color: green;
      }
      p {
        color: navy;
      }
    </style>
  </head>
  <body>
    <h1>This is a heading</h1>
    <p>This is a paragraph.</p>
  </body>
</html>
```

<style> sets background color of the body, color of <h1> elements to green,
color of <p> elements to navy.


External Stylesheet
- Linking CSS file to HTML by having separate files. Making it organized
  and reusable across multiple pages.


. -> is a class
# -> is a id
* -> universal Selector
