import './Details.css';

const Details = () => {
    return <div className='details_container'>
        <div className='details_content'>
            <div className="who_i_am">
                <h3>Who <span className="text_color">I am</span></h3>
                <div className='space_border'></div>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem repellendus suscipit impedit qui nemo inventore alias eligendi distinctio, delectus aperiam reiciendis, provident praesentium adipisci, commodi mollitia quo laudantium laborum ea.</p>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem repellendus suscipit impedit qui nemo inventore alias eligendi distinctio, delectus aperiam reiciendis, provident praesentium adipisci, commodi mollitia quo laudantium laborum ea.</p>
            </div>
            <div className="what_i_do">
                <h3>Who <span className="text_color">I am</span></h3>
                <div className='space_border'></div>

                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem repellendus suscipit impedit qui nemo inventore alias eligendi distinctio, delectus aperiam reiciendis, provident praesentium adipisci, commodi mollitia quo laudantium laborum ea.</p>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem repellendus suscipit impedit qui nemo inventore alias eligendi distinctio, delectus aperiam reiciendis, provident praesentium adipisci, commodi mollitia quo laudantium laborum ea.</p>
            </div>
            <div className="get_in_touch">
                <h3>Get <span className="text_color">in touch</span></h3>
                <div className='space_border'></div>
                <div className="contact_details">
                    <ul>
                        <li><a href='#.'>Phone number</a></li>
                        <li><a href='#.'>email</a></li>
                        <li><a href='#.'>address</a></li>
                    </ul>
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