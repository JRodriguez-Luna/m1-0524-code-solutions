# npm-intro-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is NPM?

  > NPM is a package manager for JavaScript that helps you install and manage libraries and tools for your projects.

- What is a package?

  > A package is a collection of code (like a library or tool) that you can use in your project.

- What are some other popular package managers?

  > Yarn and PNPM are other popular package managers.

- How can you create a `package.json` with `npm`?

  > Run npm init in your terminal to create a package.json file.

- What is a dependency and how do you add one to a package?

  > A dependency is a package your project needs to work. You add one by running npm install package-name.

- What happens when you add a dependency to a package with `npm`?

  > The dependency is listed in your package.json file, and its code is downloaded into the node_modules folder.

- What is a devDependency and how do you add one to a package?

  > A devDependency is a package used only during development (like testing tools). You add one by running npm install package-name --save-dev.

- How do you define and run `npm` scripts? Why are these useful?
  > You define an npm script in the scripts section of package.json.
  - For example: "scripts": { "hello": "echo Hello, LearningFuze" }.
    Run it with npm run hello. These scripts are useful to automate common tasks.

## Notes

### **NPM Scripts**

- **What Are NPM Scripts?**

  - Commands you define in `package.json` to automate tasks.

- **How to Define a Script:**

  - In `package.json` under `"scripts"`:
    ```json
    "scripts": {
      "hello": "echo Hello, LearningFuze"
    }
    ```

- **How to Run a Script:**
  - Use `npm run <script-name>` (e.g., `npm run hello`).
