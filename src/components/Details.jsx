import { faEnvelope, faMobileScreenButton } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Details.css';
import Form from './Form.js';
import Spacer from './Spacer';

const Details = () => {
    return <div className='details-container'>

        <div className='details-content'>
            {/* Who i am block */}
            <div className="who-i-am">
                <Spacer id={'who_i_am'} />
                <h3 className='secondary-heading'>Who <span className="text-color">I am</span></h3>
                <div className='space-border'></div>
                <p>I am a HPCSA Registered Counsellor (PRC 0041947). I have a BPsych Degree (Honours) from The
                    South African College of Applied Psychology.</p>
                <p>I have interned at Groote Schuur's Adolescent Centre of Excellence and Kuils River's Hope House
                    Counselling Centre. I have counselled clients from all ages and backgrounds, facilitated groups,
                    provided workshops, mindfulness and employee wellness.</p>
                <p>I have a passion for counselling and my main priority is to provide a safe space for all my clients
                    while they reach their counselling goals.</p>
            </div>

            {/* What I do block */}
            <div className="what-i-do">
                <Spacer id={'what_i_do'} />
                <h3 className='secondary-heading'>What <span className="text-color">I do</span></h3>
                <div className='space-border'></div>

                <p>No individual is alike; therefore, no client is alike. That is why I aim to provide the best counselling
                    journey for all my clients; by providing them the space to tell their own story at their own pace.</p>
                <p>I provide services for online one-on-one sessions to individuals of all ages and employee wellness to
                    businesses.</p>
                <p>All online sessions will be conducted on Google Meets and a new link will be sent to each client
                    before their session.</p>
                <p>Each session is sixty minutes and will cost R600 a session. The first session will include an intake,
                    where we get to know one another and you will be able to ask questions. Thereafter a counselling
                    program will be discussed and developed in accordance to your needs.</p>
            </div>

            {/* Get in touch block */}
            <div className="get-in-touch">
                <Spacer id={'get_in_touch'} />
                <h3 className='secondary-heading'>Get <span className="text-color">in touch</span></h3>
                <div className='space-border'></div>
                <div className="contact-details">
                    <p><a href='tel:+2176 923 9857'><FontAwesomeIcon icon={faMobileScreenButton} /> 076 923 9857</a></p>
                    <p><a href='mailto:aniqajohnsoncounselling@gmail.com'><FontAwesomeIcon icon={faEnvelope} /> aniqajohnsoncounselling@gmail.com</a></p>
                </div>
                <p>To contact Aniqa Johnson Counselling and/or request a session, complete the form below:</p>
                <Form />
            </div>
        </div>
    </div>;
};

export default Details;