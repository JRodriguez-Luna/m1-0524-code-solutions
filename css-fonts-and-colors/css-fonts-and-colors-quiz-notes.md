# css-fonts-and-colors-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- Name two types of units that can be used to adjust `font-size` in CSS.

  > px
  > em
  > relative sizes: small, medium, large

- What CSS property controls the font used for the text inside an element?

  > color

- Name three different types of values you can use to specify colors in CSS.
  > name, HEX, RGB

## Notes

font-family

- specifies font for an element's text.
- specified by name
  > "Helvetica" or "Arial", or by a generic family, such as serif,
  > sans-serif, monospace, cursive, and fantasy
- browser will use the first available font from the list you provide.
  example:

```css
body {
  font-family: 'Arial', sans-serif;
}
```

font-size

- sets size of the font.
- px, em, or relative size(small, medium, large).
  > em is relative to the font size of its parent
  > px is a fixed size.

```css
p {
  font-size: 16px;
}
```

font-weight(property)

- controls the thickness of the text.
- Values range 100(thin) - 900(bold)
  > 400 = normal weight
  > 700 equivalent to bold
- Some font may only support 'normal' or 'bold'

```css
strong {
  font-weight: bold;
}
```

font-style(property)

- allows to make text italicized or oblique.
- Common Values:
  > normal, italic, oblique

```css
em {
  font-style: italic;
}
```

text-transform(property)

- used to transform text to uppercase, lowercase, or capitalize each word

```css
h2 {
  text-transform: uppercase;
}
```

text-decoration(property)

- add decoration to text
  > underline, overline, line-through, and none (remove decorations)

```css
a {
  text-decoration: underline;
}
```

line-height

- sets height of a line box.
- used for controlling the space between lines of text.
- Values:
  > a number(without units) = multiplier of the font size
  > pixels
  > percentage

```css
p {
  line-height: 1.5;
}
```

letter-spacing

- increasing or decreasing the space between characters in a text.
- can be specified:
  > em or px

```css
h1 {
  letter-spacing: 2px;
}
```

CSS Colors

- colors: specifies the color of the text inside an element

  > name (red, blue), HEX (#ff0000), RGB (rgb(255, 0, 0)), RGBA (rgba(255,
  > 0, 0, 0.3)), HSL (hsl(0, 100%, 50%)), and HSLA (hsla(0, 100%, 50%, 0.3))

- background-color (self explanatory)
  > sets the background color of an element.
