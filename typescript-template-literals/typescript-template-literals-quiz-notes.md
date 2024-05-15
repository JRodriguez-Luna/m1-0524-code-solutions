# typescript-template-literals-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is the syntax for writing a template literal?

  > You wrap teh entire literal in backtick (`) characters.

- What is "string interpolation"?
  > String interpolation refers to the process of substring parts of a string
  > with an embedded expression.

## Notes

Template Literals -> gives us the capability of interpolating our variables
directly into the string, rather than needing to do string concatenation.

Some additonal functionality's:

- Multiline strings -> string that can span multiple lines.
- HTML escaping -> Ability to transform a string so that it's safe to include
  in HTML
- Tagged templates -> Run a template string through a function to give us more
  control over how a string is made.

Syntax for Template Literal:

```TS
const templateString = `sttring text`;
```

String Interpolation
-> Refers to the process of substituting parts of a string with an embedded
expression.
--> without needing to do string concatenation.

Syntax for String Interpolation:

```TS
const age = 99;
const interpolatedString = `Joe Smith is ${age} years old`; // $ then {}
```
