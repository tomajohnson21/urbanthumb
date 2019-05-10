import React from "react";
import './style.css';

function Nav() {
  
    return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      
        <ul>
            <li>
                <a className="navbar-brand" href="/">
                    urban thumb
                </a>
            </li>
          <li>Search</li>
          <li>My Plants</li>
      </ul>
    </nav>
    );
}

export default Nav;