import React, { useState } from "react";

function ContactForm(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      name: name,
      email: email,
      message: message,
    });

    //Validates email using Regex
    if (!/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test({ email }).val()) {
      throw ErrorEvent("Please enter valid email address");
    }

    if ({ message } === "") {
      throw ErrorEvent("Please enter a message before submitting");
    }

    setName("");
    setEmail("");
    setMessage("");
  };

  const handleChange = (e) => {
    setName(e.target.value);
    setEmail(e.target.value);
    setMessage(e.target.value);
  };

  // Renders Contact form with three sections: Name, Email, and Message
  return (
    <div>
      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter name here"
          value={name}
          name="name"
          className="contact-input"
          onChange={handleChange}
        ></input>
        <br />
        <input
          type="text"
          placeholder="Enter name here"
          value={email}
          name="email"
          className="contact-input"
          onChange={handleChange}
        ></input>
        <br />
        <input
          type="text"
          placeholder="Enter name here"
          value={message}
          name="message"
          className="contact-input"
          onChange={handleChange}
        ></input>
        <br />
        <button className="submit-button">Submit</button>
      </form>
    </div>
  );
}

export default ContactForm;
