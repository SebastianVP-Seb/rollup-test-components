import React from 'react';
import logo from './logo.svg';
import './App.css';
import { TestRender } from './__internal__/Button/ButtonComponent';
import { Ione } from './icons/Ione';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <TestRender />
        {/* <Ione /> */}
      </header>
    </div>
  );
}

export default App;
