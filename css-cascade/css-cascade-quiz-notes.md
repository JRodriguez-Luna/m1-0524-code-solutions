# css-cascade-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What are the four components of "the Cascade".

  > Importance: Rules with '!important' have the highest priority.
  > Specificity: More specific selectors precedence over less specific ones.
  > Source Order: When rules have the same specificity, the rule written last in the CSS file wins.
  > Inheritance: Some properties passed from parent elements to their children.

- What does the term "source order" mean with respect to CSS?

  > Source Order - the order which CSS rules are listed in a stylesheet.

  > If multiple rules apply to the same element with the same specificity
  >
  > > The rule that comers last will be applied.

- How is it possible for the styles of an element to be applied to its children as well without an additional CSS rule?

  > Through Inheritance. Properties like 'color' and 'font-family' are automatically inherited by
  > child elements from their parent elements.

- List the three selector types in order of increasing specificity.

  > Element selector (tagname)
  > Class selector (class-name)
  > ID selector (#id-name)

- Why is using `!important` considered bad practice?
  > Makes code harder to read and understand
  > Overrides all other rules causing unexpected errors
  > Causes debugging more difficult than it should be

## Notes

1. Components of the Cascade:

   - **Importance:** Rules with `!important` are given the highest priority.
   - **Specificity:** Determines which rule is applied based on the type of selector (IDs > Classes > Elements).
   - **Source Order:** The order in which rules appear in the CSS file; later rules override earlier ones if they have the same specificity.
   - **Inheritance:** Some CSS properties are inherited from parent elements to child elements.

2. Source Order:

   - **Definition:** The order in which CSS rules are written in a stylesheet.
   - **Example:**
     ```css
     .class1 {
       color: red;
     }
     .class2 {
       color: blue;
     }
     ```
     - An element with both `class1` and `class2` will have blue text because `.class2` is declared last.

3. Inheritance:

   - **Definition:** Certain CSS properties of parent elements are automatically inherited by child elements.
   - **Example:**
     ```css
     .parent {
       color: blue;
     }
     ```
     - Child elements of `.parent` will inherit the blue color unless explicitly overridden.

4. Specificity:

   - **Selector Types in Order of Increasing Specificity:**
     1. Element selectors (e.g., `p`)
     2. Class selectors (e.g., `.class-name`)
     3. ID selectors (e.g., `#id-name`)
   - **Example:**
     ```css
     p {
       color: red;
     }
     .class {
       color: blue;
     }
     #id {
       color: green;
     }
     ```
     - An element with `id="id"`, `class="class"`, and a `p` tag will be green due to the highest specificity of the ID selector.

5. !important:
   - **Usage:** Overrides all other declarations regardless of specificity or source order.
   - **Example:**
     ```css
     .class {
       color: red !important;
     }
     ```
     - Any element with `class="class"` will have red color, even if other rules usually take precedence.
   - **Considered Bad Practice:** It makes debugging and maintaining the CSS harder.

### Practical Examples

**Source Order Example:**

```css
.first-class {
  color: goldenrod;
}
.different-class {
  color: indigo;
}
.other-class {
  color: chartreuse;
}
```

**Inheritance Example:**

```css
div {
  color: blue;
}
p {
  color: red;
}
```

**Specificity Example:**

```css
* {
  color: blue;
}
p {
  color: orange;
}
.bio {
  color: green;
}
#timbl {
  color: red;
}
#verou {
  color: black !important;
}
```

By following these notes and examples, you'll better understand how CSS Cascade works and how to control the styling of web elements.
