import { useMemo } from 'react';
import moment from 'moment';

import styles from './footer.module.scss';

export const Footer = () => {
  const currentYear = useMemo(() => moment().format('YYYY'), []);

  return (
    <footer className={styles.footer}>
      <h4>Footer</h4>
      <p>&copy; {currentYear}</p>
    </footer>
  );
};
