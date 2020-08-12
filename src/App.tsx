import React from 'react';
import './App.css';
import NavBar from './components/Navbar';
import Global from './components/Globally';
import Local from './components/Country';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Global/>
      <Local/>
    </div>
  );
}

export default App;
