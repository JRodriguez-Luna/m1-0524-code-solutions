# javascript-functions-practice-notes

## Notes

Object Types:

> can be anonymous:

```ts
function greet(person: { name: string; age: number }) {
  return 'Hello ' + person.name;
}
```

> can be named by using either an interface:

```ts
interface Person {
  name: string;
  age: number;
}

function greet(person: Person) {
  return 'Hello ' + person.name;
}
```

> can be a type alias:

```ts
type Person = {
  name: string;
  age: number;
};

function greet(person: Person) {
  return 'Hello ' + person.name;
}
```
