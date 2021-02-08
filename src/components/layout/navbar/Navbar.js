import React from 'react';
import './Navbar.css';

const Navbar = () => {
   

    return (
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" href="/">Ntombekazi Sibetyu </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#main_nav">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="main_nav">
                <ul className="navbar-nav">
                    <li className="nav-item active"><a className="nav-link" href="/" data-target="#home">Home </a> </li>
                    <li className="nav-item"><a className="nav-link" href="#about"  data-target="#about"> About </a></li>
                    <li className="nav-item"><a className="nav-link" href="#skills" data-id="#skills">Skills </a></li>
                    <li className="nav-item"><a className="nav-link" href="#portfolio" data-id="#porfolio"> Portfolio </a></li>
                    <li className="nav-item"><a className="nav-link" href="#testimonials" data-id="#testimonials"> Testimonials </a></li>
                    <li className="nav-item"><a className="nav-link" href="#contact" data-id="#contact"> Contact </a></li>
                </ul>
            </div> 
        </nav>
    )
}


export default Navbar;
