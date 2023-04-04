
import React from 'react';
import Cover from '../images/cover.jpg';
import './Details.css';
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
                <p>Formal training completed at Groote Schuur's Adolescent Centre of Excellence and Kuils River's Hope House
                    Counselling Centre. I have counselled clients from all ages and backgrounds, facilitated groups,
                    provided workshops, mindfulness and employee wellness.</p>
                <p>I have a passion for counselling and my main priority is to provide a safe space for all my clients
                    while they reach their counselling goals.</p>
                <div className="cover-img-container">
                    <img src={Cover} className="cover-img" alt="Image of Aniqa" />
                </div>
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
                <p className="sub-heading"><strong><u>Individual counselling</u></strong></p>
                <p>Each session is sixty minutes and will cost R600 a session. The first session will include an intake,
                    where we get to know one another and you will be able to ask questions. Thereafter a counselling
                    program will be discussed and developed in accordance to your needs.</p>
                <p className="sub-heading"><strong><u>Employee wellness</u></strong></p>
                <p>The services offered: </p>
                <ul className='list-level-1'>
                    <li>Containment sessions
                    </li>
                    <li>Individual sessions
                    </li>
                    <li>Team building workshops
                    </li>
                    <li>Mental Health workshops which can include the following topics:
                        <br />
                        <br />
                        <ul className='list-level-1'>
                            <li>Mindfulness</li>
                            <li>Self-Care
                            </li>
                            <li>Emotional Well-being
                            </li>
                            <li>Stress Management</li>
                            <li>Conflict Management</li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </div>;
};

export default Details;