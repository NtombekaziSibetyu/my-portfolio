import React from 'react';
import PropTypes from 'prop-types';
import './Navbar.css';
import {Link} from 'react-router-dom';


const Navbar = (props) => {
    return (
        <div className="navbar fixed-to-top"> 
            <ul>
                <li>
                    <Link to={'/'}>
                        <i className={props.homeIcon}/>
                            {props.homeTitle}
                        </Link>
                </li>
                <li>
                    <Link to={'/about'}>
                        <i className={props.aboutIcon}/>
                            {props.aboutTitle}
                        </Link>
                </li>
                <li>
                    <Link to={'/skills'}>
                        <i className={props.skillsIcon}/>
                            {props.skillsTitle}
                    </Link>
                </li>
                <li>
                    <Link to={'/contact'}>
                        <i className={props.contactIcon}/>
                            {props.contactTitle}
                    </Link>
                </li>
            </ul>
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
