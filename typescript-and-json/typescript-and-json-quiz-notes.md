# typescript-and-json-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is JSON?

  > JSON (JavaScript Object Notation) is a format for storing and exchanging data.
  > It's like a language that computers understand easily, and it's also easy for humans to read and write.

- What are serialization and deserialization?

  > Serialization: Converting a data structure or object state into a format that can be stored or transmitted and reconstructed later.

  - JSON.stringify();

  > Parsing JSON data back into a JavaScript object.

  - JSON.parse();

- Why are serialization and deserialization useful?

  > It allows data to be easily transmitted between a server and a client, stored in databases, or exchanged between different programming languages.

- How do you serialize a data structure into a JSON string using TypeScript?

  > Serialize: Use JSON.stringify(object) to convert a JavaScript object into a JSON string.

- How do you deserialize a JSON string into a data structure using TypeScript?
  > Deserialize: Use JSON.parse(jsonString) to convert a JSON string back into a JavaScript object.

## Notes

**JSON (JavaScript Object Notation)**

- **Definition:** A lightweight format for data interchange.
- **Usage:** Easy for humans to read and write, and easy for machines to parse and generate.
- **Common in:** Web development for transmitting data between server and client.

**Serialization**

- **Definition:** Converting a data structure or object state into a string format (like JSON) for storage or transmission.
- **Purpose:** Makes data easy to send over networks or store in databases.
- **Method in TypeScript:** `JSON.stringify(data)`

**Deserialization**

- **Definition:** Converting a serialized string (like JSON) back into a data structure or object.
- **Purpose:** Allows the received or stored data to be used in applications.
- **Method in TypeScript:** `JSON.parse(jsonString)`

**Benefits of Serialization and Deserialization**

- **Data Transmission:** Easily send data between server and client.
- **Data Storage:** Efficiently store complex data in a simple text format in databases.
- **Cross-Language Compatibility:** Exchange data between different programming languages easily.
