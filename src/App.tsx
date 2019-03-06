import * as React from 'react';
import './App.css';
import arwing from './images/arwing.png';

class App extends React.Component {
  public render() {
    return (
      <div className="app">
        <div className="container">
          <h1>Do a barrel roll 🙌</h1>
          <img src={arwing} className="arwing" alt="Arwing" />
        </div>
      </div>
    );
  }
}

export default App;
