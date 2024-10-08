import React from 'react';
import Spacer from './Spacer';
import './css/WriteUp.css';


const WriteUp = () => {
    return <div className='write-up-container'>
        <Spacer id={'mental_health'} />

        <div className="write-up-content">
            <h2 className='primary-heading'>Mental <span className="text-color">health</span></h2>
            <div className='space-border'></div>
            <p>Mental health includes emotional, psychological, and social well-being and affects how we think,
                feel, and act. Mental health plays a role in determining how one manages stress, connects with
                other individuals and the ability to make healthy choices. Mental health is important at every stage
                of life, from childhood to adolescence and all the way through adulthood.
                <br /><br />
                <a className='mental-health-link' target={'_blank'} href="https://www.cdc.gov/mentalhealth/learn/index.htm#:~:text=Mental%20health%20includes%20our
                %20emotional,childhood%20and%20adolescence%20through%20adulthood" rel="noreferrer">
                    - <em>Centers for Disease Control and Prevention</em>
                </a>
            </p>
        </div>
    </div>;
};

export default WriteUp;