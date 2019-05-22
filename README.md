# the-road-to-learn-react

# Foreward

## FAQ

- v
  - https://roadtoreact.com
- [The Road to Learn React](the-road-to-learn-react.pdf)

# Introduction to React

## Hi, my name is React.

- 2
  - [10 Reasons why I moved from ANgular to React](https://www.robinwieruch.de/reasons-why-i-moved-from-angular-to-react/)
- Exercises
  - [Essential React Libraries in 2019](https://www.robinwieruch.de/essential-react-libraries-framework/)
  - [How to learn React, Angular or Vue in 2019?](https://www.robinwieruch.de/how-to-learn-framework/)

## Requirements

- 4
  - `node --version`
  - `npm --version`
- 5
  - Install a global package
    - `npm install -g <package>`
  - Install a local package
    - `npm install <package>`
    - Install React locally
      - `npm install react`
  - Initialize _node_modules/_ and _package.json_
    - `npm init -y`
      - `-y` initializes defaults in _package.json_
  - Take all the dependencies listed in _package.json_ and install them in _node_modules/_
    - `npm install`
  - Install a node package for use only in the development environment
    - `npm install --save-dev <package>`
- Exercises
  - [npm Documentation](https://docs.npmjs.com/)
  - [Yarn Documentation](https://yarnpkg.com/en/docs/)

## Installation

- 7
  - The bundled React library is just a _react.js_ file.
  - Two libraries are needed for working with a CDN: `react` and `react-dom`.
- Exercises
  - [Getting Started](https://reactjs.org/docs/getting-started.html)
    - [React Blog](https://reactjs.org/blog/)

## Zero-Configration Setup

- 8
  - `npm install -g create-react-app`
    - `create-react-app --version`
    - _Note_
      - Note that `create-react-app` 2.1 has TypeScript built-in: `create-react-app <app-name> --typescript`
        - [Setup TypeScript in React app](https://blog.bitsrc.io/why-and-how-use-typescript-in-your-react-app-60e8987be8de)
  - `create-react-app hackernews`
- 10
  - Run the application at http://localhost:3000
    - `npm start`
  - `npm test`
  - `npm run build`
- Exercises
  - [create-react-app](https://github.com/facebook/create-react-app)

## Introduction to JSX

- _Note_
  - Add Prettier
    - [Using Prettier with VS Code and Create React App](https://medium.com/technical-credit/using-prettier-with-vs-code-and-create-react-app-67c2449b9d08)
    - [VSCode Workspace Settings](https://code.visualstudio.com/docs/getstarted/settings)
- 13
  - The HTML attributes replaced by JSX follow a camelCase convention (e.g., `className`).
- Exercises
  - [Introductin JSX](https://reactjs.org/docs/introducing-jsx.html)
    - When splitting JSX across multiple lines, consider wrapping it in parentheses to avoid automatic semicolon insertion.
    - "By default, React DOM escapes any values embedded in JSX before rendering them. Thus it ensures that you can never inject anything that’s not explicitly written in your application. Everything is converted to a string before being rendered. This helps prevent XSS (cross-site-scripting) attacks."
  - [React Components, Elements, and Instances](https://reactjs.org/blog/2015/12/18/react-components-elements-and-instances.html)

## ES6 const and let

- Exercises
  - [const](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const)
  - [let](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let)
    - "At the top level of programs and functions, let, unlike var, does not create a property on the global object."

## ReactDOM

- 14
  - `ReactDOM.render()` uses a DOM node in your HTML to replace it with JSX. It's a way to integrate React in any foreign application easily, adn you can use `ReactDOM.render()` mltiple times across your application.
    - 2 arguments:
      - first argument is for rendering the JSX
      - second argument si the place where the React app hooks into your HTML
- Exercises
  - [Rendering Elements](https://reactjs.org/docs/rendering-elements.html)

## Hot Module Replacement

- 17
  - Enable Hot Module Replacement (HMR) in _src/index.js_: `if (module.hot) {module.hot.accept(); }`
    - Prevents page refresh while developing - can maintain application state.
- Exercises
  - [Dan Abramov - Live React: Hot Reloading with Time Travel at react-europe 2015](https://www.youtube.com/watch?v=xsSnOQynTHs)

## Complex JavaScript in JSX

- 21
  - Assign a key to each list element so React can identify modified items when the list changes.
    - Use a stable identifier, not the index (which would not be stable if the list changes its order).
- Exercises
  - [List and Keys](https://reactjs.org/docs/lists-and-keys.html)
    - If no explicit key is assigned, React will default to using indexes as keys.
    - Rule of thumb: Use a `key` inside a `map()`.
    - `props.key` does not get passed to the component.
  - [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
  - [Deep Dive into JavaScript's Array Map Method](https://www.robinwieruch.de/javascript-map-array/)
    - `map()` takes 3 arguments: value, index, array
    - Use `forEach()` when we don't need to do anything with the return values of its callback function; use `map()` otherwise.
    - With `reduce()`, whatever you return from the callback function will be used as the accumulator argument in the callback for the next iteration.
      - Since `reduce()` can work with any data structure, we could use `reduce()` to do the exact same thing as `map()`.
    - `reverse()` mutates the original array.
      - If this is not desired, use `map()` first (if transforming the values) or `slice()` (if no transformation necessary).
    - `Object.entries()` (ES2017) retuns a two-dimensional array of an object's keys and values.
    - If you want to transform data and create a new object, use `reduce()`.
    - Use `flatMap()` (ES2019) to flatten a multidimensional array into a single-dimensional array of transformed values. (`reduce()` can be used for the same purpose)
    - Since `map()` is only an Array method, an error will be thrown if you end up calling `map()` on a null or Object value.
      - To avoid calling `map()` on a null value, consider using `(originalArray || []).map()`.
    - To log a value in a single-line `map()`, add `console.log(value) || <operations>`, since `console.log()` returns `undefined`.

## ES6 Arrow Functions

- 23
  - An arrow function's parentheses are unnecessary when dealing with only a single argument.
- 24
  - In a concise body, an implicit return is attached.
- Exercises
  - [Arrow functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
    - An arrow function does not provide its own bindings to `this`, `arguments`, `super`, or `new.target`.

## ES6 Classes

- 26
  - The `render()` method of a class component must be overridden (because it defines the output of a React `Component`).
- Exercises
  - [JavaScript fundamentals before learning React](https://www.robinwieruch.de/javascript-fundamentals-react-requirements/)
    - Returning `null` is a valid way to display nothing in a component.
    - When something is exported as the `default`, no curly braces are needed when importing it.
  - [Classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)

# Basics in React
