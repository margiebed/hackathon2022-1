import styles from './header.module.scss';
import { Navbar } from 'components';

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.background}>&nbsp;</div>
      <Navbar />
    </header>
  );
};
