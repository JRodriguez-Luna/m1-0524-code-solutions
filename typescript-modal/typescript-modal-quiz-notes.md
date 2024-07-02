# typescript-modal-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is the `<dialog>` element used for?

  > To create pop-up dialogs or modal windows on a webpage.

- How do you display a modal dialog?

  > Use the 'show()' or 'showModal()' methods.

- How do you hide a modal dialog?

  > Use the 'close()' method.

- What is the difference between the `showModal` & `show` methods?

  > show() - displays the dialog without blocking the rest of the page.

  > showModal() - displays it as a modal, blocking interaction with the rest of the page.

## Notes

- **Purpose**: The `<dialog>` element is used to create pop-up dialogs or modal windows on a webpage without needing JavaScript libraries or frameworks. It ensures a standardized and accessible way to implement dialogs in web applications.

- **Methods**:
  - **show()**: Displays the dialog in the normal flow of the document, without a modal backdrop.
    ```javascript
    const $dialog = document.querySelector('dialog');
    $dialog.show();
    ```
  - **showModal()**: Displays the dialog as a modal, blocking interaction with the rest of the page, with a backdrop, and centered on the screen.
    ```javascript
    const $dialog = document.querySelector('dialog');
    $dialog.showModal();
    ```
  - **close()**: Closes the dialog box.
    ```javascript
    const $dialog = document.querySelector('dialog');
    $dialog.close();
    ```
