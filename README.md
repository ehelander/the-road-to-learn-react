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
    - By default, React DOM escapes any values embedded in JSX before rendering them. Thus it ensures that you can never inject anything that’s not explicitly written in your application. Everything is converted to a string before being rendered. This helps prevent XSS (cross-site-scripting) attacks.
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

## Local Component State

- 29
  - Calling `super(props)` in a class component constructor is mandatory. It sets `this.props` in the constructor.
- 30
  - Every time the local component stat is changed, `render()` runs again.
- 31
  - Do not mutate the state directly. Use `setState()`.
- Exercises
  - [Constructor](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes#Constructor)

## ES6 Object Initializer

- 32
  - Shorthand in ES6 to initialize objects.
    - Instead of...
    ```
    const user = {
      name: name,
    }
    ```
    - ...we can (if the property name in the object matches the variable name)...
    ```
    const user = {
      name,
    }
    ```
- 33
  - ES6 allows computed property names.
- Exercises
  - [Object initializer](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer)
    - Duplicate property names are allowed; the second will overwrite the first.

## Unidirectional Data Flow

- 35
  - Binding a function in a constructor: `this.onDismiss = this.onDismiss.bind(this);`
- 38
  - Unidirectional data flow of React:
    - An action is triggered in the view layer
    - A function or class method modifies the local component state
    - The `render()` method of the component runs and updates the view.
- Exercises
  - [State and Lifecycle](https://reactjs.org/docs/state-and-lifecycle.html)
    - 5 steps to convert a function component to a class:
      - 1: Create an ES6 class with the same name, extending `React.Component`
      - 2: Add a single empty `render()` method.
      - 3: Move the body of the function inside `render()`.
      - 4: Replace `props` with `this.props` in the `render()` body.
      - 5: Delete the remaining empty function declaration.
    - 3 steps to move `date` from props to a state:
      - 1: Replace `this.props.date` with `this.state.data` in `render()`.
      - 2: Add a class constructor that sets the initial `this.state`.
      - 3: Remove the `date` prop.
    - Mounting: When a component is rendered to the DOM for the first time.
      - `componentDidMount()`
    - Unmounting: When a component is removed from the DOM.
      - `componentWillUnmount()`
    - 3 things to know about `setState()`:
      - 1: Do not modify the state directly
      - 2: State updates may be asynchronous
        - React may batch multiple calls into a single update.
        - Consider using a second form of `setState()` that accepts a function. The function receives the previous state as its first argument and the props at the time of update as the second argument.
      - 3: State updates are (shallowly) merged
      - The data flows down
        - Neither the parent nor the child should know or care whether a certain component is stateful or stateless or is defined as a function or a class.

## Bindings

- 39
  - Class methods don't automatically bind `this` to the class instance.
- 41
  - Don't bind class methods inside `render()`; it will bind every time the component updates and hurt performance.
  - Don't define functions inside the constructor; the constructor should just be used for instantiating the class and its properties, not for business logic.
- 42

  - Class methods can be autobound with ES6 arrow functions.

    - E.g.,

    ```
    onClickMe = () => {
      console.log(this);
    }
    ```

    - vs.

    ```
    constructor() {
      super();

      this.onClickMe = this.onClickMe.bind(this);
    }

    onClickMe() {
      console.log(this);
    }
    ```

  - Though note that the official React documentation uses the class method bindings in the constructor.

- Exercises
  - [react-alternative-class-component-syntax](https://github.com/the-road-to-learn-react/react-alternative-class-component-syntax)
    - Class field declarations: can initialize local state without using the constructor, and declare class methods by arrow functions without also needing to bind them.

## Event Handler

- 44
  - A function must be passed to an event handler. (I.e., the expression needs to return a function, not just be a function.)
- 48
  - Using arrow functions in event handlers impacts performance. Every time `render()` runs, the handler instantiates the higher-order arrow function.
    - If this is a concern (in data-intense applications), consider implementing a dedicated component to bind the method in the constructor. For most applications, this is premature optimization.

## Interactions with Forms and Events

- 49
  - We use synthetic events to access values in an event payload.
- 50
  - When using a handler in your element, you get access to the synthetic React event in your callback function's signature (e.g., `onSearchChange(event)`).
- 52
  - `this.setState()` is a shallow merge, preserving the sibling properties.
- 53
  - Higher-order function: Passing a value into a function which then returns a new function
- Exercises
  - [Handling Events](https://reactjs.org/docs/handling-events.html)
    - Differences betweeen events from React elements and events from DOM elements:
      - React events are named using camelCase (instead of lowercase)
      - For JSX, pass a function as the event handler (instead of a string)
      - You cannot return `false` to prevent default behavior.
        - `preventDefault` must be called explicitly.
      - You should not need to call `addEventListener` - should just be able to provide a listner when the element is initially rendered.
    - Generally, if you refer to a method without `()` (e.g., `onClick={this.handleClick})`), you should bind that method.
    - Two ways to get around binding:
      - 1: Use the (experimental, but enabled by default with Create React App) public class fields syntax.
      - 2: Use an arrow function in the callback.
        - Though this creates a different callback each time. This may cause extra re-rendering for lower components. As a result, prefer either binding methods in the constructor or using the class fields syntax.
  - [Higher-order function](https://en.wikipedia.org/wiki/Higher-order_function)
    - A higher-order function (known, in mathematics, as an _operator_ or a _functional_) does at least one of the following:
      - 1: Takes a function as an argument
      - 2: Returns a function
    - All other fuctions are first-order functions.

## ES6 Destructuring

- Exercises

  - [Destructuring assignment](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)

    - Handy for swapping variables: `[a, b] = [b, a]`
    - When using object literal destructuring assignment without a declaration, parentheses are required:
      ```
      var a, b;
      ({a, b} = {a: 1, b: 2});
      ```
      - vs. `{a, b} = {a: 1, b: 2}`
        - `{a, b}` is evaluated as a block and not an object literal.
    - Destructuring can be used to unpack a property from an object and assign it to a variable with a different name.

      ```
      var o = {p: 42, q: true};
      var {p: foo, q: bar} = o;

      console.log(foo); // 42
      console.log(bar); // true
      ```

    - Nested object and array destructuring:

      ```
      const metadata = {
        title: 'Scratchpad',
        translations: [
          {
            locale: 'de',
            localization_tags: [],
            last_edit: '2014-04-14T08:43:37',
            url: '/de/docs/Tools/Scratchpad',
            title: 'JavaScript-Umgebung'
          }
        ],
        url: '/en-US/docs/Tools/Scratchpad'
      };

      let {
        title: englishTitle, // rename
        translations: [
          {
            title: localeTitle, // rename
          },
        ],
      } = metadata;

      console.log(englishTitle); // "Scratchpad"
      console.log(localeTitle);  // "JavaScript-Umgebung"
      ```

    -

## Controlled Components

- 59
  - Form elements (`<input>`, `<textarea>`, `<select>`) hold their own state in plan HTML.
    - These are considered uncontrolled components, because they handle their own state.
    - In React, we only want controlled components.
      - To achieve this, we set the `value` attribute of the field.
- Exercises
  - [Forms](https://reactjs.org/docs/forms.html)
    - Controlled component: A element whose value is controlled by React (via `setState()`).
    - With a controlled component, every stat mutation will have an associated handler function.
    - In HTML, a `<textarea>` element is defined by its children; in React, it uses a `value` attribute.
    - Instead of adding a `selected` attribute on an `<option>` child of a `<select>` element, React uses a `value` attribute on the `<select>` element itself.
    - A file input tag (`<input type="file" />`) is an uncontrolled component, since it's read-only.
    - [Formik](https://jaredpalmer.com/formik) offers a complete form solution, including validation, tracking visited fields, and handling submission.
      - It's built on the same principles as controlled components.
  - [react-controlled-components-examples](https://github.com/the-road-to-learn-react/react-controlled-components-examples)

## Split Up Components
