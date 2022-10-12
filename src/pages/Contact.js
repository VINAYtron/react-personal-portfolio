import React from "react";
import "../styles/Contact.css";

import MailIcon from "@material-ui/icons/Mail";

const Contact = () => {
  return (
    <div className="box">
      <div className="container-form">
        <h2>Get In Touch</h2>
        <form action="https://formspree.io/f/mwkzbrrq" method="POST">
          <input
            type="text"
            name="Name"
            placeholder="Full Name"
            autoComplete="off"
            required
          />
          <input
            type="email"
            name="Email"
            placeholder="Email"
            autoComplete="off"
            required
          />
          <textarea
            name="Message"
            placeholder="Send Message ..."
            cols="30"
            rows="10"
            autoComplete="off"
            required
          ></textarea>
          <button type="submit">Send</button>
        </form>
      </div>

      <span className="mail-box">
        <a
          href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox"
          target="_blank" rel="noreferrer"
        >
          <MailIcon className="icons" />
          {/* vinaypatill1010@gmail.com */}
        </a>
      </span>
    </div>
  );
};

export default Contact;
