import React, { useState, useEffect } from 'react';
import {
  HashRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/App.css';
import About from './components/About/About.js';
import Contact from './components/Contact/Contact.js';
import Footer from './components/Footer/Footer.js';
import Nav from './components/Nav/Nav.js';
import Portfolio from './components/Portfolio/Portfolio.js';
import Resume from './components/Resume/Resume.js';

function App() {
  return (
    <HashRouter basename={process.env.PUBLIC_URL}>
      <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
        <Nav/>
        <main>
        <Switch>
          <Route exact path="/" component={About} />
          <Route exact path="/about" component={About} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/resume" component={Resume} />
          <Route exact path="/contact"component={Contact} />
        </Switch>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;
