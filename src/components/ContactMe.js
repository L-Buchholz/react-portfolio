import React, { useState } from "react";

function ContactMe(props) {
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
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          <br />
          <br />
          <input
            style={styles.message}
            type="text"
            placeholder="Enter message here"
            value={message}
            name="message"
            className="message-input"
            onChange={(e) => setMessage(e.target.value)}
          ></input>
          <br />
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
