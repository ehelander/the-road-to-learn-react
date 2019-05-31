# Foreward

## FAQ

- v
  - https://roadtoreact.com
- [The Road to Learn React](the-road-to-learn-react.pdf)

# Introduction to React

## Hi, my name is React.

- 2
  - [10 Reasons why I moved from Angular to React](https://www.robinwieruch.de/reasons-why-i-moved-from-angular-to-react/)
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

- 63
  - The `props` (short for `properties`) object is accessible via the class instance by using `this`. It has all the values passed to the components. This enables components to pass properties down the component tree.

## Composable Components

- 64
  - The `children` prop is used to pass elements (unknown to the component itself) to components from above.
    - This makes it possible to compose components together.
    - Strings, elements, and entire element trees can be passed.
- Exercises
  - [Composition vs Inheritance](https://reactjs.org/docs/composition-vs-inheritance.html)
    - Recommendation: Use composition, rather than inheritance, to reuse code between components.
    - Expecially for components that do not know their children ahead of time, use the `children` prop to pass the children elements directly into their output.
      - If you have multiple 'holes' in your application, consider using additional descriptive props (beyond `children`).
    - Another case for composition: When a more 'specific' component renders a more 'generic' one, configuring it with props.
    - Facebook has not found any cases where they would recommend using inheritance instead of composition.
      - If you want to reuse non-UI functionality, consider extracting it into a JavaScript module (so it can be imported without being extended).
  - [React Component Composition](https://www.robinwieruch.de/react-component-composition/)
    - Composition: The arrangement of ingredients to create something bigger.
    - Everything you do within a function is composition of ingredients and their arrangement. When a function is made up of functions, then it's the composition of functions.
    - Note: [React Testing Tutorial: Test Frameworks & Components Tests](https://www.robinwieruch.de/react-testing-tutorial/)
    - Use the [slot pattern](https://www.robinwieruch.de/react-pass-props-to-component/) when you have more than one child that you want to compose into another component (so the component doesn't have to know ahead of time what will be passed in).
    - React Router - used to compose dynamic components (depending on the selected route) into the Route components.
      - The App component displays a static frame of components that are always visible, but changes the inner content depending on the URL.
      - Advanced patterns for component composition:
        - [Render Props Components](https://www.robinwieruch.de/react-render-props-pattern/)
          - An extension of the slot pattern, where a function returns the thing you want to render (rather than you passing it directly).
        - [Higher-Order Components](https://www.robinwieruch.de/gentle-introduction-higher-order-components/)
          - Receive a component as input and then outputs an enhanced version of it.

## Reusable Components

- 66
  - Using components instead of even relatively simple elements (such as `Button` vs. `button`) can make a big difference in the long run for isolating the impact of changes: a single source of truth.
- 67
  - When a prop is optional, assigning a default value is a more explicit way of indicating such.
- Exercises
  - [How to pass props to components in React](https://www.robinwieruch.de/react-pass-props-to-component/)
    - Props are used to pass data from component to component.
    - Props are read only.
    - There is no way to pass props from a child to a parent component.
      - But you can pass functions from parent to child components. The child can make use of these functions, and the functions may change the state in a parent component (and then the changed state is passed down to the child and the components re-render). -> Lifting the state up
    - The component receiving data as props just receives props. It doesn't differentiate between props or state (or derived properties).
      - Everything incoming is props; everything managed by the component itself is state.
    - Consider using props spreading to spread a whole object with key-value pairs down to a child component.
    - Note: [React prop-types](https://reactjs.org/docs/typechecking-with-proptypes.html) can be used for type checking (even without using TypeScript).
    - Render prop components
      - A render prop is a function passed as a prop (often called `render`, though the name is unimportant). The function receives arguments but also renders JSX.
    - Prop drilling
      - When all the in-between components in a hierarchy need to pass the props along, even though they aren't interested in the props.
      - The slot pattern is one solution.
        - This enables you to distribute the props at a top level to all slotted components.
      - [React's Context API](https://www.robinwieruch.de/react-context-api/) is another solution.
        - Every interested component can consume the props passed by React's Context API.
    - How to set props to state?
      - Initial state can simply be derived from props.
      - For incoming, changing props, use the `getDerivedStateFromProps(props, state)` lifecycle method. Use this selectively; think twice about the implementation logic before using it. See [You Probably Don't Need Derived State](https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html)
    - The `key` itself cannot be passed as a prop (_key is not a prop. Trying to pass it..._); but its value can be passed as an additional prop.
    - When using [styled components](https://github.com/styled-components/styled-components), the style becomes co-located with the components (and actually becomes a component, itself).
      - To pass (beyond the default) props to a styled component, you can use string interpretation in the template literal.
    - For routing, use React Router (an [essential React library](https://www.robinwieruch.de/essential-react-libraries-framework/)); also consider using the `withRouter()` HOC from React Router.

## Component Declarations

- 69
  - Types of components
    - Functional Stateless Components
      - Input: props
      - Output: a component instance in JSX
      - Stateless: No local state
      - No `this` object
      - No lifecycle methods (except for `render()`, which is applied implicitly).
    - ES6 Class Components
      - Extend from the React component (and brings in all the lifecycle methods available in the React component API).
      - Provides access to `this.state` and `this.setState()`.
    - React.createClass
      - Used in older versions of React; deprecated.
  - Rule of thumb: Use functional stateless components by default; if you need local state or component lifecycle methods, refactor it to an ES6 class component.
- 70
  - Best practice: Destructure `props` in the function signature (of a functional stateless component)
  - An implicit `return` is attached in a concise body.
    - This forces `props` as input and JSX as output.
    - Though a block body can be used to make space for doing something else first (and then specifying `return()`).
- Exercises
  - [Components and Props](https://reactjs.org/docs/components-and-props.html)
    - Always start component names with a capital letter; React treats components starting with lowercase letters as DOM tags.
    - Name props from the component's point of view rather than the context in which it's being used.
    - All React components must act like pure functions with respect to their props.

## Styling Components

- 77
  - React styling options to consider
    - [styled-components](https://github.com/styled-components/styled-components)
      - [styled-components.com](https://www.styled-components.com/)
    - [CSS Modules](https://github.com/css-modules/css-modules)
      - [create-react-app with CSS Modules](https://www.robinwieruch.de/create-react-app-css-modules/)
        - When using `create-react-app`, CSS modules work out of the box - but thefiles need to be named `.module.css`.
    - [Saas](https://sass-lang.com/)
      - [create-react-app with Sass](https://www.robinwieruch.de/create-react-app-with-sass-support/)
        - When using `create-react-app` and installing Sass (`npm install node-sass --save`), no additional configuration is necessary to enable Sass support.
    - UI Libraries
      - [Semantic UI](https://www.robinwieruch.de/react-semantic-ui-tutorial/)
        - `npm install semantic-ui-react`
        - `import 'semantic-ui-css/semantic.min.css';`
          - In React entry point file where React hooks into the DOM.
      - Material UI
  - For someone new to React, Robin's recommends sticking with pure CSS and inline styles.

# Getting Real with APIs

- [Nobody introduced me to the API - A journey from packages to RESTful services with Roy T. Fielding](https://www.robinwieruch.de/what-is-an-api-javascript/)
  - [How to Connect to an API with JavaScript](https://www.taniarascia.com/how-to-connect-to-an-api-with-javascript/)

## Lifecycle Methods

- 80
  - Lifecycle methods can be used in ES6 class components, but not functional stateless components
  - Mounting
    - `constructor()`
      - Set an initial component state
      - Bind class methods
    - `getDerivedStateFromProps(props, state)`
      - Should return an object to update the state, or null to update nothing
      - Only for rare cases (when the state depends on changes in props over time)
      - Static method; no access to instance
    - `render()`
      - Mandatory
      - Should be pure
    - `componentDidMount()`
      - Good time for asynchronous API requests
  - Updating (due to state/props change)
    - `getDerivedStateFromProps()`
    - `shouldComponentUpdate(nextProps, nextState)`
      - Always called when component updates due to state or props changes
      - Useful for performance optimization in mature apps
      - Return a boolean, indicating whether or not the component should render
    - `render()`
    - `getSnapshotBeforeUpdate(prevProps, prevState)`
      - Invoked before the most recently rendered output is committed to the DOM
      - Useful in rare cases when the component needs to capture information from the DOM before it is potentially changed.
    - `componentDidUpdate(prevProps, prevState, snapshot)`
      - Invoked immediately after rendering (but not for the initial render).
      - Useful for DOM operations or for additional asynchronous requests.
      - Receives returned value from `getSnapshotBeforeUpdate()` (as `snapshot` parameter), if implemented.
  - Unmounting
    - `componentWillUnmount()`
      - Useful for cleanup tasks
  - Error handling
    - `componentDidCatch(error, info)`
      - Introduced in React 16 as a way to catch errors in components.
- Exercises
  - [React.Component](https://reactjs.org/docs/react-component.html)
    - The only method you must defined in a React.Component subclass is `render()`.
    - `static getDerivedStateFromError()`
    - [Lifecycle Diagram](http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)
    - `render()`
      - Should not modify component state, should return the same result each time it's invoked, and should not directly interact with the browser.
    - `constructor(props)`
      - If you don't initialize state and you don't bind methods, you don't need to implement a constructor.
      - Call `super(props)` before any other statement.
      - Two purposes:
        - Initialize local state (by setting `this.state`; do not use `setState()` in the constructor)
        - Bind event handler methods to an instance.
      - Do not copy props into state (unless you want to ignore prop updates: in that case, rename it).
    - `componentDidMount()`
      - Initialization requiring DOM nodes should go here
      - Good place for instantiating network requests to load data from a remote endpoint.
      - Good place to set up subscriptions
        - Remember to unsubscribe in `componentWillUnmount()`
      - Can call `setState()` immediately; but it will trigger an extra rendering.
        - Because it happens before the browser updates the screen, the user won't see the intermediate state.
        - Hurts performance. You should ususally be able to set the initial state in the `constructor()`. But this can be useful when working with modals and tooltips that need to measure a DOM node before rendering something that depends on its size or position.
    - `componentDidUpdate(prevProps, prevState, snapsho)`
      - Useful for an opportunity to operate on the DOM where the component has been updated.
      - Good place for network requests (as long as you compare current vs. previous props, since they may have not changed and a network request may be unnecessary).
      - Can call `setState()` immediately, but it must be wrapped in a condition to compare props - otherwise, an infinite loop will result.
    - `componentWillUnmount()`
      - Perform any cleanup here (invalidating timers, cancelling network requests, unsubscribing)
      - Do not call `setState()`, since the component will never be re-rendered.
    - Rare methods
      - `shouldComponentUpdate(nextProps, nextState)`
        - Performanc optimization
        - Lets React know if a component's output is not affected by a change in state or props.
          - Doing deep equality checks or using `JSON.stringify()` will hurt performance.
        - Consider using [PureComponent](https://reactjs.org/docs/react-api.html#reactpurecomponent) instead.
      - `static getDerivedStateFromProps(props, state)`
        - Might be handy for a Transition component.
        - Simpler alternatives
          - Perform a side effect: use `componentDidUpdate()`
          - Re-compute some data only when a prop changes: use a [memoization helper](https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html#what-about-memoization)
          - Reset some state when a prop changes: use a [fully-controlled](https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html#recommendation-fully-controlled-component) or [fully-uncontrolled with a key](https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html#recommendation-fully-uncontrolled-component-with-a-key) component
      - `getSnapshotBeforeUpdate(prevProps, prevState)`
        - Could be useful for capturing some information about the DOM, such as scroll position (e.g., in a chat thread), before the most recently rendered output is committed to the DOM.
    - Error boundaries
      - Catch JavaScript errors anywhere in the child tree (during rendering, in lifecycle methods, and in constructors), and display a fallback UI instead of the component tree that crashed.
      - A class component becomes an error boundary if it defines either `static getDerivedStateFromError()` or `componentDidCatch()`
      - Note that an error boundary cannot catch an error in itself, but only in components below it.
      - `getDerivedStateFromError()`
        - Called during render phase; no side-effects permitted
      - `componentDidCatch(error, info)`
        - Called during commit phase; side-effects are permitted (such as for logging errors)
    - Other APIs
      - `setState(updater[, callback])`
        - A request, rather than an immeidate command to update the component. React may delay and batch updates.
        - If a state value is needed immediately after calling `setState()`, use `componentDidUpdate()` or the `setState()` callback.
          - General recommendation: Use `componentDidUpdate()` instead.
      - `forceUpdate()`
        - Avoid use if possible. Skips `shouldComponentUpdate()`.
    - Class Properties
      - `defaultProps`
        - Sets default props for the class.
        - Used for undefined props, but not for null props.
      - `displayName`
        - Used in debugging messages.
        - Not usually needed; can be useful when you want to display a different name than the function/class or when creating higher-order components.
    - Instance Properties
      - `props`
        - `this.props` contains the props that were defined by the caller of this component.
        - `this.props.children` is a special prop (defined by child tags in JSX rather than the tag itself)
      - `state`
        - Contains data specific to this component that may change over time.
        - User-defined; should be a plain JavaScript object.
        - If a value is not used for rendering or data flow, define it as a field on the component instance (instead of using state).
  - [State and Lifecycle](https://reactjs.org/docs/state-and-lifecycle.html)
  - [Error Handling in React 16](https://reactjs.org/blog/2017/07/26/error-handling-in-react-16.html)
    - Error boundaries are React components that catch JavaScript errors anywhere in their child component tree, log those errors, and display a fallback UI instead of the component tree that crashed. Error boundaries catch errors during rendering, in lifecycle methods, and in constructors of the whole tree below them.
    - A class component becomes an error boundary if it defines a new lifecycle method called `componentDidCatch(error, info)`.
    - Only class components can be error boundaries.
    - Typically, you'll declare a single error boundary component and use it throughout an app.
    - As of React 16, errors that were not caught by any error boundary will result in unmounting of the whole React component tree.
    - React 16 prints all errors during rendering to the console in development; this must be disabled in production.
    - `try` / `catch` only works for imperative code; with the declarative nature of React, error boundaries are more fitting.

## Fetching Data

- 83
  - Lifecycle method in which to fetch data: `componentDidMount()`
- 85
  - Mandatory step in a native fetch with JSON data structures: Response is transformed into a JSON data structure (`.json()`).
- 86
  - In addition to the native fetch API (supported by most browsers - as is confirmed by `create-react-app`), [axios](https://github.com/axios/axios) is another option.
- Exercises

  - [Template literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)
    - Template literals: Previously known as 'template strings'
    - Escape a back-tick with a backslach `\`
    - Any newline characters inserted are part of the template literal.
    - Template literals can be nested
    - Tagged templates allow you to parse template literals with a function.
      - The first argument to the tag function provides a `raw` argument, giving access to the strings as they were entered (before processing escape sequences).
      - See also `String.raw`
  - [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
    - Similar to `XMLHttpRequest`, but with a more powerful and flexible feature set.
    - `fetch()` takes one mandatory argument: the path to the resource you want to fetch
      - A secondal option `init` object allows you to control a number of settings
    - It returns a `Promise` that resolves to the `Response` to that request.
  - [How to fetch data in React](https://www.robinwieruch.de/react-fetching-data/)

    - Determining which component in a hierarchy should fetch data from an API depends on:
      - #1: Who is interested in the data?
        - The fetching component should be a common parent.
      - #2: Where do you want to show a conditional loading indicator when the fetched data from the asynchronous request is pending?
        - Such as in a common parent. Or at a higher level. Or the loading indicator could be passed to the children.
      - #3: Where do you want to show an optional error message when the request fails?
        - Similar criteria as for #2.
    - Most minimal example to fetch data:

    ```
    import React, { Component } from 'react';

    class App extends Component {
      constructor(props) {
        super(props);

        this.state = {
          data: null,
        };
      }

      componentDidMount() {
        fetch('https://api.mydomain.com')
          .then(response => response.json())
          .then(data => this.setState({ data }));
      }

      ...
    }

    export default App;
    ```

    - Note: [How to fetch data with React Hooks?](https://www.robinwieruch.de/react-hooks-fetch-data/)
    - Things you might want to store in your state:
      - Fetched data
      - Loading state
        - Toggle an `isLoading` property fron `false` to `true`; in `render()`, conditionally display the loading state based on `isLoading`.
      - Error state
        - When using promises, use `catch()` to handle errors and set the error state flag.
          - Note, though, that the native fetch API doesn't use its catch block for every erroneous status code (e.g., 404). You can force it to go to `catch()` by throwing an error when the response doesn't match the expected data (e.g., `if (response.ok) { return response.json(); } else { throw new Error('Something went wrong...');}`)
          - And, similar to above, show the error message via conditional rendering.
    - `axios` (`npm install axios`) is a great alternative library for fetching data.
      - It already returns a JSON response (so the `.json()` step is unnecessary).
      - All errors are caught in the `catch()` block.
    - Robin's testing recommendations
      - Jest
      - Mocha
      - Chai
      - Enzyme
      - Sinon
    - `npm install enzyme enzyme-adapter-react-16 sinon --save-dev`
    - See also: [React Testing Tutorial: Test Frameworks & Component Tests](https://www.robinwieruch.de/react-testing-tutorial/)
    - See also: [Node Testing Setup with Mocha, Chai, Sinon](https://www.robinwieruch.de/node-js-testing-mocha-chai/)

## ES6 Spread Operators

- 87
  - ES6's `Object.assign()` takes a target object as a first argument (can be an empty object); all additional arguments are source objects that get merged into the target object.
    - Because no source object gets mutated, it embraces immutability.
- 88
  - But a simpler way to achieve this is with the ES6 spread operator: It takes every value from an array or object and copied it to another array or object.
    - The object spread oberator is already being used in the React community and has been incorporated into `create-react-app`.
- Exercises
  - [Object.assign()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)
    - It also returns the target object.
    - Later sources' properties will overwrite earlier ones.
    - Because it assigns properties (vs. copying or defining new properties), it may be unsuitable for merging new properties into a protype if the merge sources contain getters.
      - Consider using `Object.getOwnPropertyDescriptor()` and `Object.defineProperty()` instead.
    - Not suitable for deep cloning (since if the source value is a reference to an object, it only copies that reference value).
      - Vs. `let obj3 = JSON.parse(JSON.stringify(obj1));`
  - [Spread syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)
    - For object literals (new in ECMAScript 2018): `let objClone = { ...obj };`
    - The spread operator can be used where formerly `.apply()` was necessary for using the elements of an array as arguments to a function.
    - May be unsuitable for copying multidimensional arrays.
    - `Object.assign()` triggers setters, whereas the spread syntax does not.
    - Rest syntax looks exactly like spread syntax; but rest syntax is sortof the opposite of spread syntax
      - spread: expands an array into its elements
      - rest: collects multiple elements and condenses them into a single element.
