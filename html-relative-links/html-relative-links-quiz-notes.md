# html-relative-links-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- How do you indicate the relative link to a parent directory?

  > use '../' then directory name.

- How do you indicate the relative link to a child directory?

  > use '/' then directory name.

- How do you indicate the relative link to a grand parent directory?

  > use '../../' then directory name.

- How do you indicate the relative link to the same directory?
  > use directory name.

## Notes

Absolute URLs: These URLs contain the complete address of a webpage, including the protocol (http/https) and domain name. For example:

```html
<a href="https://www.example.com/page.html">Absolute URL Link</a>
```

Relative URLs: These URLs reference locations relative to the current
document.
They don't include the protocol or domain. Instead, they start with
a slash (/) indicating the root of the current domain or with a
file/folder name indicating a location relative to the current page.
For example:

```html
<a href="/relative-page.html">Relative URL Link</a>
```
