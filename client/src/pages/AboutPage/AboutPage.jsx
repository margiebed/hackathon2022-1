import { useTranslation } from 'react-i18next';

import styles from './aboutPage.module.scss';

export const AboutPage = () => {
  const { t } = useTranslation(['about']);

  return <main className={styles.about}>{t`about.title`}</main>;
};
