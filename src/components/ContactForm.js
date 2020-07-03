import React from "react";
import Button from "@material-ui/core/Button";

import "./ContactForm.css";

function ContactForm() {
  return (
    <form action="mailto:lukas_weymann@hotmail.com" method="POST">
      <input type="text" placeholder="Your name" name="name-contactform" />
      <label>Name</label>
      <input type="email" placeholder="Your e-mail" name="email-contactform" />
      <label>Email</label>
      <input
        type="text"
        placeholder="Enter the subject here"
        name="email-subject"
      />
      <label>Subject</label>

      <textarea type="text" name="email-content" />
      <label>Your message</label>
      <button type="submit" value="Send">
        Send
      </button>
    </form>
  );
}

export default ContactForm;
