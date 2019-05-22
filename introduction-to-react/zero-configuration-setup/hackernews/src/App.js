import React, { Component } from 'react';
import './App.css';

const complexObject = {
  firstName: 'first',
  lastName: 'last',
};

class App extends Component {
  render() {
    var helloWorld = 'Welcome to The Road to Learn React';
    return (
      <div className="App">
        <h2>{helloWorld}</h2>
        <p>
          Hello, {complexObject.firstName} {complexObject.lastName}
        </p>
      </div>
    );
  }
}

export default App;
