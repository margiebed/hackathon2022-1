import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import clsx from 'clsx';

import styles from './navbar.module.scss';
import { ReactComponent as MenuIcon } from 'assets/icons/menu.svg';

export const Navbar = () => {
  const [show, setShow] = useState(false);
  const linksStyle = clsx(styles.links, { [styles.show_links]: show });

  const linkStyle = ({ isActive }) => clsx(styles.link, { [styles.link_active]: isActive });

  const toggleNav = () => setShow((prev) => !prev);
  const hideNav = () => setShow(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.header}>
        <Link to="/">
          <h3>Page Title</h3>
        </Link>
        <button className={styles.btn} onClick={toggleNav}>
          <MenuIcon />
        </button>
      </div>
      <div className={linksStyle}>
        <NavLink to="/" className={linkStyle} onClick={hideNav}>
          home
        </NavLink>
        <NavLink to="/about" className={linkStyle} onClick={hideNav}>
          about
        </NavLink>
        <NavLink to="/contact" className={linkStyle} onClick={hideNav}>
          contact
        </NavLink>
      </div>
    </nav>
  );
};
