import { Layout } from 'components';
import { Chart } from 'components/Chart';
import ReactEcharts from 'echarts-for-react';
import styles from './surveyPage.module.scss';

export const SurveyPage = () => {
  return (
    <Layout>
      <ReactEcharts option={Chart} className={styles.chart} />
      Survey
    </Layout>
  );
};
