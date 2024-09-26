/* eslint-disable react/prop-types */

// import './NavBar.css'

import styles from "./navbar.module.css";

const NavBar = ( {links}) => {
  // console.log(links)
  return (
    <div className={styles.nav}>
        <a href="#">Logo</a>
      <ul className={styles.ul}>
  {
    links.map((link, index) => {
    return(
      <li key={index}><a href="#"  className={styles.li}>{link.title}</a></li>
    )
    })
  }
      </ul>
    </div>
  );
}

export default NavBar;
