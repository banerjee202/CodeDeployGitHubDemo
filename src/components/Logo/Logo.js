import React from 'react';
import './Logo.css'
import ctsLogo from "./CTS_Logo.png"

const Logo = props =>(
   <div className="imageContainer">
    <img src ={ctsLogo} className="logoAlign" alt="CTS_Logo"></img>
    </div>
);

export default Logo;