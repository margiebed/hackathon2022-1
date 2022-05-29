import styles from './homePage.module.scss';
import { Counter } from 'components';

export const HomePage = () => {
  return (
    <main className={styles.home}>
      <Counter />
    </main>
  );
};
