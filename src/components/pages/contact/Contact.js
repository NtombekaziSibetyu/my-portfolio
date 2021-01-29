import React from 'react';
import PropTypes from 'prop-types';
import ContactForm from './form/contactForm';
import './Contact.css';


const Contact = (props) => {
  
    return (
        <div className='form-content'>
          <div className="text-center">
            <h2>GET IN TOUCH</h2>
            <ContactForm/>
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
