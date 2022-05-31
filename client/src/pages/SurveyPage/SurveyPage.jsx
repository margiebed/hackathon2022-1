import React from 'react';

import styles from './surveyPage.module.scss';
import { Sidebar } from 'components';

export const SurveyPage = () => {
  return (
    <main className={styles.survey}>
      <Sidebar />
      <div className={styles.content}>Survery</div>
    </main>
  );
};
