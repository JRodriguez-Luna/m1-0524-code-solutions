# html-links-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What HTML tag is used to link to another website?

  > The anchor element (<a>) used to create hyperlinks in HTML.
  >
  > > Requires the href attribute, which specifies the destination of the link.

- What is an absolute URL?

  > Absolute URLs specify the complete address of the linked resource, including the protocol.

  > > (http://, https://)
  > > Example:

  ```html
  <a href="https://example.com">Visit Example</a>
  ```

- What is a relative URL?

  > Relative URLs specify the path to the linked resource relative to the current page.

  Example:

  ```html
  <a href="/about.html">About Us</a>
  ```

## Notes

Linking to Email Addresses and Phone Numbers:

> The anchor element can also be used to create links to email addresses and phone numbers using the

    mailto: and tel: schemes, respectively.

mailto: example

```html
<a href="mailto:info@example.com">Email Us</a>
```

tel: example

```html
<a href="tel:+19099999999">Call Us</a>
```

Opening Links in a New Tab:

> Opening a hyperlink in a new browser tab or window, use the target='\_blank' attribute.
>
> > This instructs the browser to open the linked document in a new browsing context.

target='\_blank' exmaple:

```html
<a href="https://example.com" target="_blank">
  Visit Example(opens in a new tab)
</a>
```
