import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { FriendAdder } from './components/FriendAdder';
import { FriendList } from './components/FriendList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React + Dexie!</p>
        <FriendAdder />
        <FriendList />
      </header>
    </div>
  );
}

export default App;
