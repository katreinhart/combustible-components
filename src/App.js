import React, { Component } from 'react';
import FireworksList from './components/FireworksList'

import './App.css';

const attributes = [
  { id: 1, kind: 'color', value: 'red' },
  { id: 2, kind: 'color', value: 'white' },
  { id: 3, kind: 'color', value: 'blue' },
  { id: 4, kind: 'shape', value: 'circular' },
  { id: 5, kind: 'shape', value: 'fan' },
  { id: 6, kind: 'shape', value: 'random' },
  { id: 7, kind: 'size', value: 'small' },
  { id: 8, kind: 'size', value: 'medium' },
  { id: 9, kind: 'size', value: 'large' },
]

const fireworks = [
  { id: 1, name: 'Red & Blue Peony', attributeIds: [ 1, 3, 4, 8 ] },
  { id: 2, name: 'Mini-Flying Fish', attributeIds: [ 2, 6, 7 ] }
]

class App extends Component {
  render() {
    return (
      <main className="App">
        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <h1 className="display-4">Combustible Components</h1>
          </div>
        </div>
        <FireworksList fireworks={ fireworks } attributes={ attributes }/>
      </main>
    );
  }
}

export default App;
