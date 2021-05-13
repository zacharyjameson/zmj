import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component } from "react";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";


class Contact extends Component {
  render() {
    return (
      <div className="contactform">
        <section>
          <h2>Contact Me.</h2>
          <form action="https://formspree.io/f/mqkgggda" method="post">
            <div className="contactbox">
              <div className="contactitem">
                <label for="name">Name: </label>
                <br />
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter Full Name"
                />
              </div>
              <div className="contactitem">
                <label for="_replyto">Email: </label> <br />
                <input
                  type="email"
                  id="_replyto"
                  name="_replyto"
                  placeholder="hellothere@gmail.com"
                />
              </div>
            </div>
            <div className="contactbox2">
              <div className="contactitem">
                <label for="user-message">Message:</label>
                <br />
                <textarea
                  id="user-message"
                  name="message"
                  placeholder="How can I help you?"
                ></textarea>
              </div>
            </div>
            <div className="contactbuttons">
              <button className="contactitem" type="submit">Submit</button>
              <button className="contactitem" type="reset">Reset</button>
            </div>
            <div className="contactemail">
            <FontAwesomeIcon size="2x" icon={faEnvelope} />
            <a href="mailto:audiohobbit@gmail.com"> audiohobbit@gmail.com</a>
            </div>
          </form>
        </section>
      </div>
    );
  }
}

export default Contact;
