import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/Nav';
import SideBar from "./components/navbar/sidebar";
function App() {
  return (
    <div>
      
      <SideBar/>
      <Navbar/>
      <main style={{marginTop:'66px'}}>
      <p>Here is the main content</p>
      </main>
    </div>
  );
}

export default App;
