import React, { Component } from "react";

class Contact extends Component {
  render() {
    return (
      <div className="contactform">
        <section class="width">
          <h2 id="contact">Contact Me.</h2>
          <div className="group">
            <div className="item">
              <form action="https://formspree.io/f/mqkgggda" method="post">
                <label for="name">Name: </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter Full Name"
                />
                <br />
                <label for="_replyto">Email: </label>
                <input
                  type="email"
                  id="_replyto"
                  name="_replyto"
                  placeholder="hellothere@gmail.com"
                />
                <br />
                <label for="user-message">Message:</label>
                <br />
                <textarea
                  id="user-message"
                  name="message"
                  placeholder="How can I help you?"
                ></textarea>
                <br />
                <button type="submit">Submit</button>
                <button type="reset">Reset</button>
              </form>
            </div>
            <div class="item">
              <ul>
                <li>
                  Email: {" "}
                  <a href="mailto:audiohobbit@gmail.com">
                    audiohobbit@gmail.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Contact;
