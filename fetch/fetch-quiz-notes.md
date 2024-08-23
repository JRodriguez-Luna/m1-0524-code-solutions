# fetch-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What does `fetch()` return?

  > Fetch returns a promise that resolves to the Response object representing the outcome of the request.

- What is the default request method used by `fetch()`?

  > The default request method for fetch is `GET`.
  >
  > > Means if no method specified, fetch will perform a `GET` request.

- How do you specify the request method (`GET`, `POST`, etc.) when calling `fetch`?

  > To specify the request method for fetch call, you must pass an options object as the second argument to `fetch()`
  >
  > > Set method property to:
  > >
  > > - `GET`, `POST`, `PUT`, `DELETE`, etc.

  ```typescript
  fetch(url, { method: 'POST' });
  ```

- How does `fetch` report errors?
  > You check the **response.ok** property or status code directly within the response handling logic.

## Notes
