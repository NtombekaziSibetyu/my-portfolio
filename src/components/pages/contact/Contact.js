import React from 'react';
import PropTypes from 'prop-types';
import ContactForm from './form/contactForm';
import './Contact.css';


const Contact = (props) => {
  
    return (
        <div className='form-content'>
          <div>
            <h2>GET IN TOUCH</h2>
          <div className='container'>
            <div className='row'>
                <div className='col-3'>
                <i class="fas fa-phone-square fa-5x far-center" style={{ color:'#1e88e5'}}></i>
                <p>Call : {props.cellNo}</p>
                </div>
                <div className='col-3'>
                <a href={props.github} target='_blank' className="">
                  <i class="fab fa-github-square fa-5x fa-center"/></a>
                <p>See more of my work on GitHub</p>
                </div>
                <div className='col-3'>
                <a href={props.linkedin} target='_blank' className="">
                <i class="fab fa-linkedin-in fa-5x fa-center" />
                </a>
                <p>LinkedIn</p>
                </div>
            </div> 
            <ContactForm/>
          </div>
        </div>
      </div>
    )
}
Contact.defaultProps = {
  cellNo: '063 044 7645 / 081 348 6222',
  github: 'https://github.com/NtombekaziSibetyu ',
  linkedin: 'https://www.linkedin.com/in/ntombekazi-sibetyu-21a353164 '
}

Contact.propTypes = {
  cellNo: PropTypes.string.isRequired,
  github: PropTypes.string.isRequired,
  linkedin: PropTypes.string.isRequired
}

export default Contact;
