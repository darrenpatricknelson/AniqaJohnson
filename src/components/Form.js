import emailjs from "@emailjs/browser";
import React, { useRef, useState, useCallback } from "react"; // Added useCallback
import "./css/Form.css"; // Component specific styles

/**
 * Form component provides a contact form for users to send messages.
 * It uses EmailJS for handling form submissions.
 */
const Form = () => {
  const form = useRef();

  // State for form input values
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userMessage, setUserMessage] = useState("");

  // State for error validation messages
  const [nameValidation, setNameValidation] = useState("");
  const [emailValidation, setEmailValidation] = useState("");
  const [messageValidation, setMessageValidation] = useState("");

  // State for success validation message
  const [successValidation, setSuccessValidation] = useState("");

  // Function to send email using EmailJS
  // To update future email templates, refer to: https://dashboard.emailjs.com/admin/templates
  const sendEmail = useCallback((e) => {
    // Wrapped in useCallback
    e.preventDefault(); // Prevent default form submission behavior

    // EmailJS sendForm method: service_id, template_id, form_reference, user_public_key
    emailjs
      .sendForm(
        "service_el8ih73",
        "template_l4o6f24",
        form.current,
        "bfoCR4p_6ODAEhkmD"
      )
      .then(
        (result) => {
          console.log("Email sent successfully:", result.text);
          setSuccessValidation(
            "Thank you for making contact.\nI will contact you as soon as I can."
          );
          // Clear form fields on success
          setUserName("");
          setUserEmail("");
          setUserMessage("");
        },
        (error) => {
          console.error("Email sending failed:", error.text);
          setSuccessValidation(
            "Failed to send message. Please try again later."
          ); // Provide user feedback for error
        }
      );
  }, []); // Dependencies array is empty as `form.current` is stable and `sendEmail` doesn't depend on state

  // Handles form submission and client-side validation
  const formSubmit = useCallback(
    (e) => {
      // Wrapped in useCallback
      e.preventDefault(); // Prevent default form submission behavior

      // Clear previous success/error messages
      setSuccessValidation("");
      setNameValidation("");
      setEmailValidation("");
      setMessageValidation("");

      let isValid = true;

      // Input field validations
      if (!userName) {
        setNameValidation("Please enter a name");
        isValid = false;
      }
      if (!userEmail) {
        setEmailValidation("Please enter an email");
        isValid = false;
      }
      if (!userMessage) {
        setMessageValidation("Please enter a message");
        isValid = false;
      }

      // If basic input validation fails, stop here
      if (!isValid) return;

      // Email format validation using regex
      const validRegex =
        /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,8}(?:\.[a-zA-Z]{2,8})?/g; // Improved regex for more common domains

      if (!validRegex.test(userEmail)) {
        setEmailValidation("Please enter a valid email address");
        isValid = false;
      }

      // If all validations pass, send the email
      if (isValid) {
        sendEmail(e);
      }
    },
    [userName, userEmail, userMessage, sendEmail]
  ); // Dependencies for useCallback

  return (
    <div className="form">
      <form ref={form} onSubmit={formSubmit}>
        {" "}
        {/* Use onSubmit handler directly */}
        <input
          type="text"
          name="user_name"
          placeholder="Name"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <pre className="error-validation">{nameValidation}</pre>{" "}
        {/* Changed class name */}
        <br />
        <input
          type="email"
          name="user_email"
          placeholder="Email"
          value={userEmail}
          onChange={(e) => setUserEmail(e.target.value)}
        />
        <pre className="error-validation">{emailValidation}</pre>{" "}
        {/* Changed class name */}
        <br />
        <textarea
          name="user_message"
          placeholder="Message"
          value={userMessage}
          onChange={(e) => setUserMessage(e.target.value)}
        />
        <pre className="error-validation">{messageValidation}</pre>{" "}
        {/* Changed class name */}
        <br />
        {/* No need for form1 attribute if onSubmit is on the form tag */}
        <button type="submit">Submit</button>
        <pre className="success-validation">{successValidation}</pre>{" "}
        {/* Changed class name */}
        <br />
      </form>
    </div>
  );
};

export default Form;
