import React, { useState } from 'react';
import './Form.css';

const Form = () => {
    const formValues = {
        'name': '',
        'email': '',
        'message': ''
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
        setSuccessValidation('well done');
        setUserName('');
        setUserEmail('');
        setUserMessage('');
    };

    return (
        <div className="form">
            <form>
                <input type="text" id="name" placeholder='Name' value={userName} onChange={(e) => setUserName(e.target.value)} />
                <span>{nameValidation}</span>
                <br />
                <input type="email" id="email" placeholder='Email' value={userEmail} onChange={(e) => setUserEmail(e.target.value)} />
                <span>{emailValidation}</span>
                <br />
                <textarea type="text" id="message" placeholder='Message' value={userMessage} onChange={(e) => setUserMessage(e.target.value)} />
                <span>{messageValidation}</span>
                <br />
                <button type="submit" form="form1" value="Submit" onClick={formSubmit}>Submit</button>
                <span>{successValidation}</span>
                <br />
            </form>
        </div>
    );
};


export default Form;