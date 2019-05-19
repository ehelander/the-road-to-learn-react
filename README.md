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
- 3
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
  - Initialize *node_modules/* and *package.json*
    - `npm init -y`
      - `-y` initializes defaults in *package.json*
  - Take all the dependencies listed in *package.json* and install them in *node_modules/*
    - `npm install`
  - Install a node package for use only in the development environment
    - `npm install --save-dev <package>`
- 6
  - [npm Documentation](https://docs.npmjs.com/)
  - [Yarn Documentation](https://yarnpkg.com/en/docs/)
## Installation
- 7
  - The bundled React library is just a *react.js* file.
  - Two libraries are needed for working with a CDN: `react` and `react-dom`.
  - [Getting Started](https://reactjs.org/docs/getting-started.html)
    - [React Blog](https://reactjs.org/blog/)
## Zero-Configratiion Setup
- 8
  - `npm install -g create-react-app`
    - `create-react-app --version`
    - Note that `create-react-app` 2.1 has TypeScript built-in: `create-react-app <app-name> --typescript`
      - [Setup TypeScript in React app](https://blog.bitsrc.io/why-and-how-use-typescript-in-your-react-app-60e8987be8de)
  - `create-react-app hackernews`
- 10
  - Run the application at http://localhost:3000  
    - `npm start`
  - `npm test`
  - `npm run build`
  - [create-react-app](https://github.com/facebook/create-react-app)
## Introduction to JSX
- 