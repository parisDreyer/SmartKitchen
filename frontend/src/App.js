import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Dictaphone from './components/dictaphone.jsx';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
            Learn React
        </header>
        hi
        <Dictaphone />
      </div>
    );
  }
}

export default App;

{/* <img src={logo} className="App-logo" alt="logo" />
<p>
Edit <code>src/App.js</code> and save to reload.
</p>
<a
className="App-link"
href="https://reactjs.org"
target="_blank"
rel="noopener noreferrer"
</a>
> */}