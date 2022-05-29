import { Link, Route, Routes } from 'react-router-dom';

import { Footer, Header } from 'components';
import { AboutPage, HomePage } from 'pages';

export const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
      <Footer />
    </>
  );
};
