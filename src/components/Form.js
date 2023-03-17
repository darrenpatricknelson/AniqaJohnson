import emailjs from '@emailjs/browser';
import React, { useRef, useState } from 'react';
import './Form.css';

const Form = () => {
    const form = useRef();
    // emailJS email function  
    // To update future email templates, go here: https://dashboard.emailjs.com/admin/templates
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_avlnsjc', 'template_3z2ow7r', form.current, 'bfoCR4p_6ODAEhkmD')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };
    // form values
    const [userName, setUserName] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [userMessage, setUserMessage] = useState('');
    // error validation
    const [nameValidation, setNameValidation] = useState('');
    const [emailValidation, setEmailValidation] = useState('');
    const [messageValidation, setMessageValidation] = useState('');
    // success validations
    const [successValidation, setSuccessValidation] = useState('');


    // submitting the form
    const formSubmit = (e) => {
        // clear any success messages
        setSuccessValidation('');
        // input validations. Check to see if input fields have values
        if (!userName) {
            setNameValidation('Please enter a name');
        } else {
            setNameValidation('');
        };
        if (!userEmail) {
            setEmailValidation('Please enter an email');
        } else {
            setEmailValidation('');
        };
        if (!userMessage) {
            setMessageValidation('Please enter a message');
        } else {
            setMessageValidation('');
        };

        // if one validation fails, end the function
        if (!userName || !userEmail || !userMessage) return;

        // validate email
        const validRegex = /[a-zA-Z0-9._%=-]+@[a-z0-9._]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;

        if (!validRegex.test(userEmail)) return setEmailValidation('Please enter a valid email');

        // if all validations pass, send email 
        sendEmail(e);


        setSuccessValidation('Thank you for making contact.\n I will get to you as soon as I can.');
        setUserName('');
        setUserEmail('');
        setUserMessage('');
    };

    return (
        <div className="form">
            <form ref={form}>
                <input type="text" name="user_name" placeholder='Name' value={userName} onChange={(e) => setUserName(e.target.value)} />
                <pre className='errorValidation'>{nameValidation}</pre>
                <br />
                <input type="email" name="user_email" placeholder='Email' value={userEmail} onChange={(e) => setUserEmail(e.target.value)} />
                <pre className='errorValidation'>{emailValidation}</pre>
                <br />
                <textarea type="text" name="user_message" placeholder='Message' value={userMessage} onChange={(e) => setUserMessage(e.target.value)} />
                <pre className='errorValidation'>{messageValidation}</pre>
                <br />
                <button type="submit" form="form1" value="Submit" onClick={formSubmit}>Submit</button>
                <pre className='successValidation'>{successValidation}</pre>
                <br />
            </form>
        </div>
    );
};


export default Form;