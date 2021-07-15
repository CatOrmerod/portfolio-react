import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/App.css';
import About from './components/pages/About.js';
import Contact from './components/pages/Contact.js';
import Footer from './components/Footer.js';
import Nav from './components/Nav.js';
import Portfolio from './components/pages/Portfolio.js';
import Resume from './components/pages/Resume.js';

function App() {

  const [pages] = useState([
    { name: 'About' },
    { name: 'Portfolio' },
    { name: 'Resume' },
    { name: 'Contact' }
  ]);
  const [currentPage, setCurrentPage] = useState(pages[0]);

  useEffect(() => {
    document.title = `CatOrmerod :: ${currentPage.name}`
  });

  return (
    <body className="text-center">
      <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
        <Nav
          pages={pages}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />
        <main>
          {currentPage.name === 'About' && <About />}
          {currentPage.name === 'Portfolio' && <Portfolio />}
          {currentPage.name === 'Resume' && <Resume />}
          {currentPage.name === 'Contact' && <Contact />}
        </main>
        <Footer />
      </div>
    </body>
  );
};

export default App;
