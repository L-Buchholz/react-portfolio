import React, { useState } from "react";

function ContactMe(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState(null);

  const onNameBlur = () => {
    if (!name.length) {
      setError("You must enter a name.");
    } else {
      setError("");
    }
  };
  const onEmailBlur = () => {
    if (!email.length) {
      setError("You must enter an email.");
    } else {
      setError("");
    }
  };
  const onMessageBlur = () => {
    if (!message.length) {
      setError("You must enter a message.");
    } else {
      setError("");
    }
  };
  const emailOnChange = (e) => {
    setEmail(e.target.value);
    //Validates email using Regex
    if (!/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email)) {
      setError("Please enter a valid email address.");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setName("");
    setEmail("");
    setMessage("");
  };

  // Stylizes Contact form
  const styles = {
    article: {
      display: "flex",
      borderBottom: "1px solid #d8a47f",
      margin: "1% 0",
    },
    input: {
      width: "300px",
    },
    message: {
      height: "200px",
      width: "300px",
    },
  };

  // Renders Contact form with three sections: Name, Email, and Message
  return (
    <>
      <div style={styles.article}>
        <h2 id="contact-me">Contact Me</h2>
      </div>
      <div style={styles.article}>
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            style={styles.input}
            type="text"
            placeholder="Enter name here"
            value={name}
            name="name"
            className="name-input"
            onChange={(e) => setName(e.target.value)}
            onBlur={onNameBlur}
          ></input>
          <br />
          <br />
          <input
            style={styles.input}
            type="text"
            placeholder="Enter email here"
            value={email}
            name="email"
            className="email-input"
            onChange={emailOnChange}
            onBlur={onEmailBlur}
          ></input>
          <br />
          <br />
          <textarea
            style={styles.message}
            placeholder="Enter message here"
            value={message}
            name="message"
            className="message-input"
            onChange={(e) => setMessage(e.target.value)}
            onBlur={onMessageBlur}
          ></textarea>
          <br />
          {/* Errors need to be displayed for setErrors to work */}
          {error}
          <br />
          <button className="submit-button">Submit</button>
          <br />
          <br />
        </form>
      </div>
    </>
  );
}

export default ContactMe;
