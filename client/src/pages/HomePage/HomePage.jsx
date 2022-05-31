import styles from './homePage.module.scss';
import { Counter, Input } from 'components';

export const HomePage = () => {
  return (
    <main className={styles.home}>
      <Counter />
      <Input type="mail" placeholder="Tu wpisz link"/>
    </main>
  );
};
