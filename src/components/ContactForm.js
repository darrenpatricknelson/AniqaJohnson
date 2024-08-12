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
                    <p><a href='https://www.google.com/maps/place/Aniqa+Johnson:+Registered+Counsellor/@-34.0911404,18.810274,18z/data=!3m1!4b1!4m6!3m5!1s0x1dcdb588e381d3f1:0xdd2e977c4a627017!8m2!3d-34.0911404!4d18.8115481!16s%2Fg%2F11l75f8bhd?entry=ttu' target='_blank'><FontAwesomeIcon icon={faLocationDot} /> Unit 103, M01, Baker Square <br /> 18 De Beers Avenue, Paardevlei, 7130</a></p>
                </div>
                <p>To contact Aniqa Johnson Counselling and/or request a session, complete the form below:</p>
                <Form />
            </div>
        </div>
    );
};


export default ContactForm;