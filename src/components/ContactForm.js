import React, { useState } from "react";
import "./ContactForm.css";

function ContactForm(props) {
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [subject, setSubject] = useState(null);
  const [content, setContent] = useState(null);

  function handleName(event) {
    setName(event.target.value);
  }

  function handleEmail(event) {
    setEmail(event.target.value);
  }

  function handleSubject(event) {
    setSubject(event.target.value);
  }

  function handleContent(event) {
    setContent(event.target.value);
  }

  function handleClick() {
    props.hideFunction();
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    const emailToSubmit = {
      name,
      email,
      subject,
      content,
    };

    fetch(`http://localhost:8080/mail`, {
            method: 'POST',
            body: JSON.stringify({ emailToSubmit }),
            headers: { "Content-Type": "application/json" }
        })
        
};
  
  return (
    <div className="contact-form-container">
      <p className="x" onClick={handleClick}>
        x
      </p>
      <form action="/" method="POST">
        <input
          onChange={handleName}
          type="text"
          placeholder="Your name"
          name={name}
        />
        <label>Name</label>
        <input
          onChange={handleEmail}
          type="email"
          placeholder="Your e-mail"
          name={email}
        />
        <label>Email</label>
        <input
          onChange={handleSubject}
          type="text"
          placeholder="Enter the subject here"
          name={subject}
        />
        <label>Subject</label>

        <textarea
          onChange={handleContent}
          type="text"
          name={content}
          rows="6"
        />
        <label>Your message</label>
        <button onClick={handleSubmit} type="submit" value="Send">
          SEND
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
