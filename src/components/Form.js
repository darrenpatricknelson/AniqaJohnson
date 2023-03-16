import React from 'react';
import './Form.css';

const Form = () => {
    return (
        <div className="form">
            <form>
                <input type="text" id="name" placeholder='Name' /><br />
                <input type="email" id="email" placeholder='Email' /><br />
                <textarea type="text" id="message" placeholder='Message' />
                <br /><br />
                <button type="submit" form="form1" value="Submit">Submit</button>
            </form>
        </div>
    );
};


export default Form;