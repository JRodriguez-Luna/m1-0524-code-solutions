# html-tables-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What are the six primary HTML elements for creating tables?

  > <thead>: Groups the header content in a table.
  > <tr>: Defines a table row.
  > <th>: Defines a header cell in a table.
  > <tbody>: Groups the body content in a table.
  > <td>: Defines a standard data cell in a table.
  > <tfoot>: Groups the footer content in a table.

- What purpose do the `thead` and `tbody` elements serve?
<thead>

> Contains header rows that define column titles.
>
> > Important for associating data cells with their corresponding headers.

<tbody>

> Wraps all the content row of your table, excluding the header and
> footer rows.

- Give two examples of data that would lend itself well to being displayed in a table.
  > Inventory List
  > Class registration

## Notes

<th>  -  used for header cells
  ->  browsers typically render these cells in bold and centered text to distinguish
      them from data cells (<td>).
  -> Improve the readability and accessibility of your table's data.

<thead>  -  Contains header rows (<tr>) that defines column titles.
  ->  important for associating data cells with their corresponding headers.

<tbody>  -  Wraps all the content rows (<tr>) of your table, excluding the header and
            footer rows.
  -> Used multiple times to group rows logically.

<tfoot>  -  Enclose one or more footer rows that summarize or describe the table's data.
  -> Placing <tfoot> before <tbody> in the code ensures screen readers process the footer
    before the body, improving accessibility.

Best Practices for HTML Tables

1. Use Headers Effectively: Always include <th> elements in your tables to define headers. This improves both the visual presentation and accessibility of your data.

2. Structure Your Tables: Utilize <thead>, <tbody>, and <tfoot> to logically organize your table's content. This not only makes your table more readable but also more accessible to users with screen readers.

3. Keep It Semantic: Ensure your table serves its intended purpose of displaying tabular data. Avoid using tables for page layout, as it hinders accessibility and responsiveness.
