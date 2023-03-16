import './Details.css';
import Form from './Form.js';
import Spacer from './Spacer.js';

const Details = () => {
    return <div className='details-container'>

        <div className='details-content'>
            {/* Who i am block */}
            <div className="who-i-am">
                <Spacer id={'who_i_am'} />
                <h3>Who <span className="text-color">I am</span></h3>
                <div className='space-border'></div>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem repellendus suscipit impedit qui nemo inventore alias eligendi distinctio, delectus aperiam reiciendis, provident praesentium adipisci, commodi mollitia quo laudantium laborum ea.</p>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem repellendus suscipit impedit qui nemo inventore alias eligendi distinctio, delectus aperiam reiciendis, provident praesentium adipisci, commodi mollitia quo laudantium laborum ea.</p>
            </div>

            {/* What I do block */}
            <div className="what-i-do">
                <Spacer id={'what_i_do'} />
                <h3>What <span className="text-color">I do</span></h3>
                <div className='space-border'></div>

                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem repellendus suscipit impedit qui nemo inventore alias eligendi distinctio, delectus aperiam reiciendis, provident praesentium adipisci, commodi mollitia quo laudantium laborum ea.</p>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem repellendus suscipit impedit qui nemo inventore alias eligendi distinctio, delectus aperiam reiciendis, provident praesentium adipisci, commodi mollitia quo laudantium laborum ea.</p>
            </div>

            {/* Get in touch block */}
            <div className="get-in-touch">
                <Spacer id={'get_in_touch'} />
                <h3>Get <span className="text-color">in touch</span></h3>
                <div className='space-border'></div>
                <div className="contact-details">
                    <p><a href='#.'>Phone number</a></p>
                    <p><a href='#.'>email</a></p>
                    <p><a href='#.'>address</a></p>
                </div>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus illum labore ut id alias eius. Hic blanditiis asperiores rerum ab?</p>
                <Form />
            </div>
        </div>
    </div>;
};

export default Details;