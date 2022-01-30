import React from "react";
import styles from  "./NavBar.module.css";

const NavBar = ()=>{
    return(
<nav className={styles.nav}>
          <ul>
            <li>
              <a>Profile</a>
            </li>
            <li>
              <a>Massages</a>
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