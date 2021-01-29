import React from 'react';
import './Navbar.css';

const Navbar = () => {
   
    return (
        <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
            <a class="navbar-brand" href="/">Ntombekazi </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#main_nav">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="main_nav">
                <ul class="navbar-nav mx-auto">
                    <li class="nav-item active"> <a class="nav-link" href="/">Home </a> </li>
                    <li class="nav-item"><a class="nav-link" href="/about"> About </a></li>
                    <li class="nav-item"><a class="nav-link" href="/testimonials"> Testimonials </a></li>
                    <li class="nav-item"><a class="nav-link" href="/portfolio"> Portfolio </a></li>
                    <li class="nav-item"><a class="nav-link" href="/contact"> Contact </a></li>
                </ul>
            </div> 
            </nav>
    )
}


export default Navbar;
