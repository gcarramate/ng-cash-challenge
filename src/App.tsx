import React from 'react';
import logo from './assets/icons/logo.svg';
import { H1, H2 } from './atomic/atm.typography/typography.component.style';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <H1>
          Edit <H2>src/App.tsx</H2> and save to reload.
        </H1>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
