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

## Zero-Configratiion Setup

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
