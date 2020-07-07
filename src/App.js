import React, { Fragment } from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/layout/navbar/Navbar';
import Home from './components/layout/landingPage/Home';
import About from './components/pages/about/About';
import Contact from './components/pages/contact/Contact';
import Portfolio from './components/pages/portfolio/Portfolio';


const App = () => {

  return (
      <Router>
        <Fragment>
          <Navbar/>
            <Switch>
              <Route exact path='/' component={Home}/>
              <Route exact path='/about' component={About}/>
              <Route exact path='/contact' component={Contact}/>
              <Route exact path='/skills' component={Portfolio}/>
            </Switch>
        </Fragment>
      </Router>
      
  );
}

export default App;
