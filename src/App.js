import React, { Fragment } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/layout/navbar/Navbar';
import Home from './components/layout/landingPage/Home';
import About from './components/pages/about/About'
import ProgressBar from './components/pages/portfolio/ProgressBar'
import Contact from './components/pages/contact/Contact';
import Portfolio from './components/pages/portfolio/Portfolio';
import Testimonials from './components/pages/about/tesitmonies/Testimonials'

const App = () => {

  return (
      <Router>
        <Fragment>
          <Navbar/>
          <Home/>
          <About/>
          <ProgressBar/>
          <Portfolio/>
          <Testimonials/>
          <Contact/>
        </Fragment>
      </Router>
      
  );
}

export default App;
