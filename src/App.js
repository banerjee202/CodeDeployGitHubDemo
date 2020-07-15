import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/Nav';
import SideBar from "./components/navbar/sidebar";
import HomeDashboard from './components/home/homedashboard';
function App() {
  return (
    <div>
      
      <SideBar/>
      <Navbar/>
      <main style={{marginTop:'66px'}}>
      <HomeDashboard/>
      </main>
    </div>
  );
}

export default App;
