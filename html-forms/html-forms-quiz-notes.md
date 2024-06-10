# html-forms-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is the purpose of an HTML `form` element?

  > There purpose is for collecting user inputs:

  - feedback
  - registrations
  - searches

- Give five examples of form control elements.

  > <input>
  > <textarea>
  > <select>
  > <button>
  > <label>

- Give three examples of `type` attribute values for HTML `<input>` elements.

  > text
  > email
  > password

- Is an HTML `<input>` element a block element or an inline element?
  > in-line - does not start on a new line and takes up only as much width as necessary.
                Allows multiple form controls to be placed next to each other within the same line,
                making more compact and flexible form layouts.

## Notes

Key elements include the <form> container with:

- action and method attributes
- input fields for text
- email and password

  all marked as required to ensure data entry before submission.

Other Controls:

> checkboxes
> radio buttons
> text areas
> dropdown lists

These will help collect user preferences and additional information.

Why do we do this?

> Integrating these elements effectively, you'll create a functional and well-structured

    form that enhances user interaction and data collection on websites.

## Introduction to HTML Forms

> Pivotal for interacting with users, allowing for data collection, user auth., feedback submissions

    and more. The bridge between user and server, facilitating the web's interactive nature.

## Designing a Comprehensive Form

> Step 1: Form Setup

```html
<form action="https://example.com/register" method="post">
  <!-- Additional inputs will be added here -->
</form>
```

  <form>: Defines the form and acts as a container for different types of input elements.
  action attribute: Specifies the URL to which the form's data is sent when submitted.
  method attribute: Defines the HTTP method to use when sending form data.
  <!------------------------------------------------------------------------------->
  <!------------------------------------------------------------------------------->

> Step 2: User Information

```html
<form action="https://example.com/register" method="post">
  <label for="username">Username:</label>
  <input type="text" id="username" name="username" required />

  <label for="email">Email:</label>
  <input type="email" id="email" name="email" required />

  <label for="password">Password:</label>
  <input type="password" id="password" name="password" required />
  <!-- More inputs will be added here -->
</form>
```

<label>: Defines a label for many form elements.
for attribute: Important for accessibility, linking the label to the respective form elements.
id attribute: Links the label to the input.
Alternative: Wrap a <label> around an <input>, negating the need to link the two with for and id.
For Example:

```html
<label>Username:<input type="text" name="username" required /></label>
```

<input>: Specifies an input field where the user can enter data. It is a self-closing tag.
Types include text, email, and password.
required attribute: A Boolean attribute indicating that a field must be filled out before submitting the form.

  <!------------------------------------------------------------------------------->
  <!------------------------------------------------------------------------------->

> Step 3: Preferences and Interests

```html
<form action="https://example.com/register" method="post">
  ...
  <fieldset>
    <legend>Preferences</legend>
    <label><input type="checkbox" name="interest" value="news" /> News</label>
    <label
      ><input type="checkbox" name="interest" value="updates" /> Updates</label
    >
  </fieldset>

  <fieldset>
    <legend>Device</legend>
    <label><input type="radio" name="device" value="iphone" /> iPhone</label>
    <label><input type="radio" name="device" value="android" /> Android</label>
  </fieldset>
  ...
</form>
```

  <fieldset>: Used to group related elements in a form, providing a way to organize form elements semantically.
  <legend>: A caption for the <fieldset> element, offering context for the grouped inputs.
  Checkboxes:
    type="checkbox": Allow users to select multiple options from a set.
  Radio buttons:
    type="radio": Limit the selection to a single option from a set.
  <!------------------------------------------------------------------------------->
  <!------------------------------------------------------------------------------->

> Step 4: Additional Information
> Incorporate a multi-line text field for additional comments and a dropdown for country selection.

```html
<form action="https://example.com/register" method="post">
  ...
  <label for="comments">Comments:</label>
  <textarea id="comments" name="comments"></textarea>

  <label for="country">Country:</label>
  <select id="country" name="country">
    <option value="">Please select</option>
    <option value="USA">United States</option>
    <!-- Additional countries -->
  </select>
</form>
```

<textarea>: Defines a multi-line input field (text area) for larger amounts of text.
<select>: Creates a drop-down list.
<option>: Tags inside the <select> represent the available options in the list.
<!------------------------------------------------------------------------------->
<!------------------------------------------------------------------------------->

> Step 5: Form Submission

```html
<form action="https://example.com/register" method="post">
  ...
  <button type="submit">Register</button>
  <button type="reset">Clear</button>
</form>
```

<button>: Defines a clickable button.
type attribute:
submit: Submits the form data to the server.
reset: Resets all the form's fields to their original values.
button: A generic button.
