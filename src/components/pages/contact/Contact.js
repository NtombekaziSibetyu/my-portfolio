import React from 'react';
import PropTypes from 'prop-types';
import ContactForm from './form/contactForm';
import './Contact.css';


const Contact = (props) => {
  
    return (
        <div className='form-content' id="contact">
          <div className="text-center">
            <h3>GET IN TOUCH</h3>
            <div  className="row">
            <div className="col-md-8 col-sm-8 mt30">
              <ContactForm/>
            </div>
            
            <div className="col-md-4 col-sm-4 address">
              <div>
                <h4>Email</h4>
                <p>sntombekazi@gmail.com</p>
              </div>
              <div>
                <h4>Phones</h4>
                <p>081 348 6222  |  063 044 7645</p>
              </div>
            </div>
            </div>
          </div>
         
      </div>
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
