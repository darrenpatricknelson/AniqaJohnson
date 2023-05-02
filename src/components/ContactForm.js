import { faEnvelope, faLocationDot, faMobileScreenButton } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './ContactForm.css';
import './Details.css';
import Form from './Form.js';
import Spacer from './Spacer';

const ContactForm = () => {
    return (
        // Get in touch block 
        <div className="get-in-touch">
            <Spacer id={'get_in_touch'} />
            <div className='form-container'>
                <h3 className='secondary-heading form-heading'>Get <span className="text-color">in touch</span></h3>
                <div className='space-border form-border'></div>
                <div className="contact-details">
                    <p><a href='tel:+2176 923 9857'><FontAwesomeIcon icon={faMobileScreenButton} /> 076 923 9857</a></p>
                    <p><a href='mailto:aniqajohnsoncounselling@gmail.com'><FontAwesomeIcon icon={faEnvelope} /> aniqajohnsoncounselling@gmail.com</a></p>
                    <p><a href='http://maps.google.com/?q=7 Irene Ave, Jacques Hill, Cape Town, 7130' target='_blank'><FontAwesomeIcon icon={faLocationDot} /> 7 Irene Ave, Jacques Hill, Cape Town, 7130</a></p>
                </div>
                <p>To contact Aniqa Johnson Counselling and/or request a session, complete the form below:</p>
                <Form />
            </div>
        </div>
    );
};


export default ContactForm;