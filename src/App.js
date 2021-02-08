import React, { Fragment } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/layout/navbar/Navbar';
import Home from './components/layout/landingPage/Home';
import About from './components/pages/about/About'
import ProgressBar from './components/pages/portfolio/ProgressBar'
import Contact from './components/pages/contact/Contact';
import Education from './components/pages/education/Education'
import Portfolio from './components/pages/portfolio/Portfolio';
import Testimonials from './components/pages/about/tesitmonies/Testimonials'
import Footer from './components/layout/footer/Footer'

const App = () => {

  return (
      <Router>
        <Fragment>
          <Navbar/>
          <Home/>
          <About/>
          <ProgressBar/>
          <Education/>
          <Portfolio/>
          <Testimonials/>
          <Contact/>
          <Footer/>
        </Fragment>
      </Router>
      
  );
}

export default App;
