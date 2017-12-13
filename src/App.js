import React, { Component } from 'react';
import FireworksList from './components/FireworksList'

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="jumbotron">
         <h1 className="display-3">Hello, world!</h1>
        </div>
        <FireworksList />
      </div>
    );
  }
}

export default App;
