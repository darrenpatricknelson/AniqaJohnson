import {
  faEnvelope,
  faLocationDot,
  faMobileScreenButton,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./css/ContactForm.css"; // Component specific styles
import Form from "./Form.js";
import Spacer from "./Spacer";

/**
 * ContactForm component displays contact details and a form for users to get in touch.
 * It uses FontAwesome icons for contact information.
 */
const ContactForm = () => {
  return (
    // Get in touch section
    <div className="get-in-touch">
      <Spacer id={"get_in_touch"} />
      <div className="form-container">
        <h3 className="secondary-heading form-heading">
          Get <span className="text-color">in touch</span>
        </h3>
        <div className="space-border contact-form-border"></div>{" "}
        {/* Changed class name */}
        <div className="contact-details">
          <p>
            <a href="tel:+2176 923 9857" rel="noreferrer noopener">
              {" "}
              {/* Added rel */}
              <FontAwesomeIcon icon={faMobileScreenButton} /> 076 923 9857
            </a>
          </p>
          <p>
            <a
              href="mailto:aniqajohnsoncounselling@gmail.com"
              rel="noreferrer noopener"
            >
              {" "}
              {/* Added rel */}
              <FontAwesomeIcon icon={faEnvelope} />{" "}
              aniqajohnsoncounselling@gmail.com
            </a>
          </p>
          <p>
            <a
              href="https://www.google.com/maps/place/17+Bright+St,+Audas+Estate,+Cape+Town,+7130/data=!4m2!3m1!1s0x1dcdb57c847910c5:0x266cd842933919d?sa=X&ved=1t:242&ictx=111"
              target="_blank"
              rel="noreferrer noopener"
            >
              {" "}
              {/* Added rel */}
              <FontAwesomeIcon icon={faLocationDot} /> 17 Bright Street, Somerset West, 7130, Room 5
            </a>
          </p>
        </div>
        <p>
          To contact Aniqa Johnson Counselling and/or request a session,
          complete the form below:
        </p>
        <Form />
      </div>
    </div>
  );
};

export default ContactForm;
