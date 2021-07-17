import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
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
    <Router>
      <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
        <Nav/>
        <main>
        <Switch>
        <Route path="/portfolio-react">
            <About />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/portfolio">
            <Portfolio />
          </Route>
          <Route path="/resume">
            <Resume />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
        </main>
        <Footer />
      </div>
      </Router>
  );
};

export default App;
