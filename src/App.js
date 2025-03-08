import React, {useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './i18n'; // Import i18n config
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Gallery from './components/Gallery';
import Admission from './components/Admission';
import './App.css';
import './animations.css';

const TitleUpdater = () => {
  const location = useLocation();

  useEffect(() => {
    const titles = {
      "/home": "St.Gregorios Public School",
      "/about": "St.Gregorios Public School - About",
      "/contact": "St.Gregorios Public School - Contact",
      "/gallery": "St.Gregorios Public School - Gallery",
      "/admission": "St.Gregorios Public School - Admission",
    };

    document.title = titles[location.pathname] || "St.Gregorios Public School";
  }, [location]);

  return null;
};

const App = () => {
  const { i18n } = useTranslation();

  // Function to switch languages
  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <Router>
      <TitleUpdater />
      <div className="App">
        <Header />
        {/* <div className="text-right p-4">
          <button onClick={() => changeLanguage('en')} className="mr-4 p-2 bg-blue-500 text-white rounded">English</button>
          <button onClick={() => changeLanguage('kn')} className="p-2 bg-green-500 text-white rounded">ಕನ್ನಡ</button>
        </div> */}
        <main>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/admission" element={<Admission />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
