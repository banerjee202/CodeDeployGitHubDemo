import React from 'react';
import './Nav.css';

const Navbar = props =>(
    <header className="navbar" style={{width:"100%"}}>
        <nav className="navbarNavigation">
            <div className="navigationitems">
            <ul>
                <li>
                   <a>RSM Dashboard</a>
                </li>
            </ul>
            </div>
        </nav>
    </header>
);
export default Navbar;