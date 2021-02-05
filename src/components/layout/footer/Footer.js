import React from 'react';
import './Footer.css'

const Footer = () => {
    return(
        <div>
            <div class="footer">
            <ul class="social-network social-circle">
            <li><a class="icoGithub" href="https://github.com/NtombekaziSibetyu" title="Github"><i class="fab fa-github"></i></a></li>
            <li><a class="icoLinkedin" href="https://www.linkedin.com/in/NtombekaziSibetyu" title="Linkedin"><i class="fab fa-linkedin"></i></a></li>
            <li><a class="icoCodepen" href="https://www.codepen.com/profile/NtombekaziSibetyu" title="Quora"><i class="fab fa-codepen"></i></a></li>
            <li><a class="icoTwitter" href="https://twitter.com/" title="Twitter"><i class="fab fa-twitter"></i></a></li>
            
            
            <li><a class="icoFacebook" href="https://www.facebook.com/" title="Facebook"><i class="fab fa-facebook"></i></a></li>
            <li><a class="icoInstagram" href="https://www.instagram.com/nsibetyu" title="Instagram"><i class="fab fa-instagram"></i></a></li>
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