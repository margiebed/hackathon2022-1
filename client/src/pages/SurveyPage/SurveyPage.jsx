import React, { useState } from 'react';
import clsx from 'clsx';

import styles from './surveyPage.module.scss';
import { Sidebar } from 'components';

export const SurveyPage = () => {
  const [hideSidebar, setHideSidebar] = useState(true);
  const leftStyle = clsx(styles.left, { [styles.hide]: hideSidebar });
  const rightStyle = clsx(styles.content, { [styles.rightMove]: hideSidebar });

  const onSidebarToggle = () => setHideSidebar((prev) => !prev);

  return (
    <main className={styles.survey}>
      <div className={rightStyle}>Survery</div>
      <div className={leftStyle}>
        <Sidebar hide={hideSidebar} />
        <button className={styles.btn} onClick={onSidebarToggle}>
          hide
        </button>
      </div>
    </main>
  );
};
