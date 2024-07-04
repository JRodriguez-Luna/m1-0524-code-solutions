# css-media-queries-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- Give two examples of media features that you can query in an `@media` rule.

  > min-width
  > max-width

- Which HTML meta tag is used in mobile-responsive web pages?
  > The viewport meta tag.

## Notes

#### Media Queries in CSS

**Definition:** The `@media` rule in CSS is used to apply different styles depending on the characteristics of the device rendering the web page, such as its screen size, resolution, or orientation.

**Syntax:**

```css
@media screen and (min-width: 600px) {
  body {
    background-color: lightblue;
  }
}
```

In this example, the background color of the `body` will be `lightblue` if the screen's minimum width is 600px or more.

**Common Media Types:**

- `all`
- `print`
- `screen`
- `speech`

**Common Media Features:**

- `width`
- `height`
- `orientation`

---

#### Breakpoints

**Definition:** Breakpoints are specific values at which a website's layout changes to provide an optimal user experience across different screen sizes. They are typically defined using media queries.

**Example:**

```css
@media screen and (max-width: 600px) {
  .column {
    width: 100%;
  }
}
```

In this example, when the screen width is 600px or less, the `.column` class will take up the full width of the screen.

**Key Breakpoints to Consider:**

- 576px (small devices)
- 768px (medium devices)
- 992px (large devices)
- 1200px (extra large devices)

---

#### Viewport Meta Tag

**Definition:** The `<meta name="viewport">` tag controls the page's dimensions and scaling on mobile devices. It helps ensure that web pages are responsive and display correctly on various screen sizes.

**Syntax:**

```html
<meta name="viewport" content="width=device-width, initial-scale=1" />
```

In this example, the viewport width is set to the device's width, and the initial zoom level is set to 1 (no zoom).

**Properties:**

- `width`: Sets the width of the viewport.
- `initial-scale`: Sets the initial zoom level.
- `maximum-scale`, `minimum-scale`, `user-scalable`: Control how users can zoom the page.
