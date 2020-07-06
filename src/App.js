import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/Nav';

function App() {
  return (
    <div>
      <Navbar/>
      <main style={{marginTop:'66px'}}>
      <p>Here is the main content</p>
      </main>
    </div>
  );
}

export default App;
