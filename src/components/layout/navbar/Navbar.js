import React from 'react';
import PropTypes from 'prop-types';
import './Navbar.css';
import {Link} from 'react-router-dom';


const Navbar = (props) => {
    const navigator = () => {
        const x = document.getElementById("topNav");
        if (x.className === "navbar") {
          x.className += " responsive";
          } else {
          x.className = "navbar";
        }
      }
    return (
        <div className="navbar" id='topNav'>
            <h3 className='myname'>Ntombekazi</h3> 
            <Link to={'/'}>
                <i className={props.homeIcon}/>
                    {props.homeTitle}
            </Link>
            <Link to={'/about'}>
                <i className={props.aboutIcon}/>
                {props.aboutTitle}
            </Link>
            <Link to={'/skills'}>
                <i className={props.skillsIcon}/>
                {props.skillsTitle}
            </Link>
             <Link to={'/contact'}>
                <i className={props.contactIcon}/>
                {props.contactTitle}
            </Link>
            <a href="!#" className="icon" >
                <i className="fa fa-bars" onClick={navigator}></i>
            </a>
             
        </div>
    )
}
Navbar.defaultProps = {
   
    homeTitle: 'Home',
    homeIcon: 'fas fa-home',
    aboutTitle: 'About Me',
    aboutIcon: 'fas fa-info',
    contactTitle: 'Contact Me',
    contactIcon: 'fas fa-phone',
    skillsTitle: 'My projects',
    skillsIcon: 'fas fa-file-code'
 };
 Navbar.propTypes = {
    
    homeTitle: PropTypes.string.isRequired,
    homeIcon: PropTypes.string.isRequired,
    aboutTitle: PropTypes.string.isRequired,
    aboutIcon: PropTypes.string.isRequired,
    contactTitle: PropTypes.string.isRequired,
    contactIcon: PropTypes.string.isRequired
};


export default Navbar;
