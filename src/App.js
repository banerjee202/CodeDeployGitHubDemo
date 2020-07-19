import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/Nav';
import SideBar from "./components/navbar/sidebar";
import HomeDashboard from './components/home/homedashboard';
import Clock from "./components/clock/clock"
import Logo from './components/Logo/Logo';
function App() {
  return (
    <div>
      
      <SideBar/>

      <Navbar/>
      <Logo/>
      <main style={{marginTop:'66px'}}>
      <HomeDashboard/>
  
      <Clock/>      
      </main>
    </div>
  );
}

export default App;
