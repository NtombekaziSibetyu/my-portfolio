import React from 'react';
import './Footer.css'

const Footer = () => {
    return(
        <div>
            <div class="footer">
            <ul class="social-network social-circle">
            <li><a class="icoGithub" href="https://github.com/NtombekaziSibetyu" target='_blank' rel="noopener noreferrer"
            title="Github"><i class="fab fa-github"></i></a></li>
            <li><a class="icoLinkedin" href="https://www.linkedin.com/in/ntombekazi-sibetyu-21a353164 " target='_blank' rel="noopener noreferrer"
            title="Linkedin"><i class="fab fa-linkedin"></i></a></li>
            <li><a class="icoTwitter" href="https://twitter.com/" target='_blank' rel="noopener noreferrer"
            title="Twitter"><i class="fab fa-twitter"></i></a></li>
            
            
            <li><a class="icoFacebook" href="https://www.facebook.com/NtombekaziSIbetyu" target='_blank' rel="noopener noreferrer"
            title="Facebook"><i class="fab fa-facebook"></i></a></li>
            <li><a class="icoInstagram" href="https://www.instagram.com/nsibetyu"
             target='_blank' rel="noopener noreferrer" title="Instagram"><i class="fab fa-instagram"></i></a></li>
            </ul>
            </div>
            <div class="container-fluid text-center" id="footer-below">
            <p>Ntombekazi ©
            . All Rights Reserved</p>
            
            </div>
        </div>
        
    )

}

export default Footer;