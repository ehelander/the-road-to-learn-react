import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    var helloWorld = 'Welcome to The Road to Learn React';
    return (
      <div className="App">
        <h2>{helloWorld}</h2>
        <p>
          <h2>{helloWorld}</h2>
        </p>
      </div>
    );
  }
}

export default App;
