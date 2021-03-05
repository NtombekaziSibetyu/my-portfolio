import React from 'react';
import PropTypes from 'prop-types';
import ContactForm from './form/contactForm';
import './Contact.css';


const Contact = (props) => {
  
    return (
        <div className='form-content' id="contact">
          <div className="text-center">
            <h3><strong>GET IN TOUCH</strong> </h3>
            <p className="separator" />
            <div  className="row">
            <div className="col-md-8 col-sm-8 mt30">
              <ContactForm/>
            </div>
            
            <div className="col-md-4 col-sm-4 address">
              <div className="address1">
                <h4>Email</h4>
                <h6>sntombekazi@gmail.com</h6>
              </div>
              <div className="address2">
                <h4>Phones</h4>
                <h6>081 348 6222  |  063 044 7645</h6>
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
