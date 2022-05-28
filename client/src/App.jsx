import { Link, Route, Routes } from 'react-router-dom';

import { Footer, Header } from 'components';
import { AboutPage, HomePage } from 'pages';

export const App = () => {
  return (
    <>
      <Header />
      <main>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
};
