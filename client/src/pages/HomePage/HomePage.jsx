import styles from './homePage.module.scss';
import { Counter } from 'components';

export const HomePage = () => {
  return (
    <section className={styles.home}>
      <Counter />
    </section>
  );
};
