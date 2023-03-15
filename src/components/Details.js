import './Details.css';
import Spacer from './Spacer.js';

const Details = () => {
    return <div className='details_container'>

        <div className='details_content'>
            <Spacer id={'who_i_am'} />

            <div className="who_i_am">
                <h3>Who <span className="text-color">I am</span></h3>
                <div className='space-border'></div>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem repellendus suscipit impedit qui nemo inventore alias eligendi distinctio, delectus aperiam reiciendis, provident praesentium adipisci, commodi mollitia quo laudantium laborum ea.</p>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem repellendus suscipit impedit qui nemo inventore alias eligendi distinctio, delectus aperiam reiciendis, provident praesentium adipisci, commodi mollitia quo laudantium laborum ea.</p>
            </div>
            <Spacer id={'what_i_do'} />

            <div className="what_i_do">
                <h3>What <span className="text-color">I do</span></h3>
                <div className='space-border'></div>

                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem repellendus suscipit impedit qui nemo inventore alias eligendi distinctio, delectus aperiam reiciendis, provident praesentium adipisci, commodi mollitia quo laudantium laborum ea.</p>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem repellendus suscipit impedit qui nemo inventore alias eligendi distinctio, delectus aperiam reiciendis, provident praesentium adipisci, commodi mollitia quo laudantium laborum ea.</p>
            </div>
            <Spacer id={'get_in_touch'} />

            <div className="get_in_touch">
                <h3>Get <span className="text-color">in touch</span></h3>
                <div className='space-border'></div>
                <div className="contact_details">
                    <p><a href='#.'>Phone number</a></p>
                    <p><a href='#.'>email</a></p>
                    <p><a href='#.'>address</a></p>
                </div>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus illum labore ut id alias eius. Hic blanditiis asperiores rerum ab?</p>
                <div className="details_form">
                    <form>
                        <input type="text" id="name" placeholder='Name' /><br />
                        <input type="text" id="email" placeholder='Email' /><br />
                        <input type="text" id="message" placeholder='Message' />
                        <br /><br />
                        <button type="submit" form="form1" value="Submit">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    </div>;
};

export default Details;