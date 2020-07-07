import React from 'react';
import PropTypes from 'prop-types';
import ContactForm from './form/contactForm';
import './Contact.css'


const Contact = (props) => {
  
    return (
        <div className='form-content'>
          <div>
            <h2>Get in touch</h2>
          <div className='container'>
            <div className='row'>
                <div className='col-4'>
                <i class="fas fa-phone-square fa-2x"></i>
                <p>Call:{props.cellNo}</p>
                </div>
                <div className='col-4'>
                <i class="fab fa-github fa-2x"></i>
                <p><a href={props.github} className="">Github Link</a></p>
                </div>
                <div className='col-4'>
                <i class="fab fa-linkedin-in fa-2x" ></i>
                <p><a href={props.linkedin} className="">LinkedIn</a></p>
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
