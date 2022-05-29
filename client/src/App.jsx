import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import { Footer, Header, Loader } from 'components';
import { AboutPage, HomePage, NotFoundPage } from 'pages';

export const App = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
      <Footer />
    </>
  );
};
