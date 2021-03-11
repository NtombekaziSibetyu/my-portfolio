import React from 'react';
import PropTypes from 'prop-types';
import ContactForm from './form/contactForm';
import './Contact.css';


const Contact = (props) => {
  
    return (
        <section>
            <div className='contact-content' id="contact">
            <div className="text-center">
              <h1><strong>GET IN TOUCH</strong> </h1>
              <p className="separator" />
              <div  className="row">
              <div className="col">
                <ContactForm/>
              </div>
              
              <div className="col">
                <div>
                  <h2>Location</h2>
                  <h3>Cape Town, Western Cape, South Africa</h3>
                </div>
                <div className="address1">
                  <h2>Email</h2>
                  <h3>sntombekazi@gmail.com</h3>
                </div>
                <div className="address2">
                  <h2>Phones</h2>
                  <h3>081 348 6222  |  063 044 7645</h3>
                </div>
              </div>
              </div>
            </div>
          </div>
        </section>
    )
}
Contact.defaultProps = {
  cellNo: '081 348 6222 / 063 044 7645 ',
  github: 'https://github.com/NtombekaziSibetyu ',
  linkedin: 'https://www.linkedin.com/in/ntombekazi-sibetyu-21a353164 '
}

Contact.propTypes = {
  cellNo: PropTypes.string.isRequired,
  github: PropTypes.string.isRequired,
  linkedin: PropTypes.string.isRequired
}

export default Contact;
