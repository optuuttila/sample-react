import React from 'react';
import TestComponent from './TestComponent';
import RoledComponent from './RoledComponent';
import './App.css';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <RoledComponent role="Role1"><TestComponent content="I'm using Role1"/></RoledComponent>
        <RoledComponent role="Role2"><TestComponent content="I'm using Role2"/></RoledComponent>
      </header>
    </div>
  );
}

export default App;
