import React from "react";
import { NavLink } from "react-router-dom";
import styles from  "./NavBar.module.css";

const NavBar = ()=>{
    return(
<nav className={styles.nav}>
          <ul>
          <li>
              <NavLink to="/mainContent">Profile</NavLink>
            </li>
            <li>
              <NavLink to="/dialogs">Massages</NavLink>
            </li>
            <li>
              <a>News</a>
            </li>
            <li>
              <a>Music</a>
            </li>
            <li>
              <a>Setings</a>
            </li>
          </ul>
        </nav>
    );
}

export default NavBar;