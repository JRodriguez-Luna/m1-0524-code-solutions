# typescript-objects-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What are objects used for?

  > Used to Organize Data, Reusability, Encapsulation and Prototypal Inheritance.

- What are object properties?

  > Object properties are key-value pairs where key is a string (property name),
  > and value can be anything.

- Describe object literal notation.

  > Object literal notation is a simple way to create objects by directly specifying their properties and values within the curly braces.

- How do you remove a property from an object?

  > Using the keyword 'delete' followed by property of the object you want to delete.

- What are the two ways to get or update the value of a property?

  > Using the dot or bracket notation.

- What is the purpose of interfaces in TypeScript?

  > Interfaces are like guidelines that describe what properties and methods an
  > object should contain, ensuring consistency and preventing mistakes in our code.

- What are two different ways to describe the shape of an object in TypeScript?

  > Using object literal or interfaces.

- How do optional properties in a TypeScript interface differ from mandatory properties, and why are they useful?
  > Optional properties are just as it says, optional, it prevents the TS Compiler
  > to not get angry with us if we don't create that property or if we end up
  > deleting it.

## Notes

Objects are fundamentals and very important because:

> It helps organize data
> makes code reusable to reduce redundancy
> inherit properties and methods from other objects (prototypal inheritance)
> able to use built-in objects - Math, Date, Array, and String

Creating Objects

1. Object Literal Syntax >> Used 95% of the time. >> common

```TS
const player = {
  firstName: 'Jesus',
  lastName: 'Rodriguez-Luna'
};
```

2. Object Constructor - keyword 'new' with the object constructor to create an object

```TS
const player = new Object();
player.firstName = 'Aaron';
player.lastName = 'Judge';
```

3. Object.create() - creates new objects, using an existing object as prototype of the newly object

```TS
const prototypePlayer = {
  firstName: 'Jesus',
  lastName: 'Rodriguez-Luna',
};

const player = Object.create(prototypePlayer);
```

4. Class Syntax

```TS
class Player {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

const player = new Player('Jesus', 'Rodriguez-Luna');
```

Accessing and Creating properties in objects

> Use the dot or bracket notation.

To delete a property, use the keyword 'delete' followed by the property of the object you want
to delete.

Creating interface

> have the keyowrd 'interface' followed by the name of the variable, curly brace, and add property.

```TS
interface Player {
  firstName: string;
  lastName: string;
  position?: string;
  team?: string;
}
```

to annotate your object with an interface, do:

```TS
const player: Player = {
  firstName: 'Jesus',
  lastName: 'Rodriguez-Luna',
};
```
