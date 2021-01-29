import React from 'react';
import './Navbar.css';

const Navbar = () => {
   
    return (
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" href="/">Ntombekazi </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#main_nav">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="main_nav">
                <ul className="navbar-nav mx-auto">
                    <li className="nav-item active"><a className="nav-link" href="/">Home </a> </li>
                    <li className="nav-item"><a className="nav-link" href="/about"> About </a></li>
                    <li className="nav-item"><a className="nav-link" href="/testimonials"> Testimonials </a></li>
                    <li className="nav-item"><a className="nav-link" href="/portfolio"> Portfolio </a></li>
                    <li className="nav-item"><a className="nav-link" href="/contact"> Contact </a></li>
                </ul>
            </div> 
            </nav>
    )
}


export default Navbar;
