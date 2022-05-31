import { NavLink } from 'react-router-dom';

import styles from './sidebar.module.scss';
import { links } from 'constants/paths';
import { Footer } from 'components';

export const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <nav className={styles.nav}>
        <ul className={styles.list}>
          {links.map(({ id, name, path }) => (
            <li key={id} className={styles.link}>
              <NavLink to={path} className={styles.link}>
                {name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <Footer />
    </aside>
  );
};
