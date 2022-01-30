import React from "react";
import styles  from "./Header.module.css"

const Header = ()=>{
    return(
<header className={styles.header}>
          <img
            src="https://cdn.logo.com/hotlink-ok/logo-social.png"
            alt="logo"
            className={styles['logo-img']}
          />
        </header>
    );
}

export default Header;