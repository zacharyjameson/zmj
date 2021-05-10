import React, { Component } from "react";

class Contact extends Component {
  state = {};
  render() {
    return (
      <div className="contactform">
        <section class="width">
          <h2 id="contact">Contact Me.</h2>
          <div class="group">
            <div class="item">
              <form action="https://formspree.io/f/mqkgggda" method="post">
                <label for="name">Name:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter Full Name"
                />

                <label for="_replyto">Email:</label>
                <input
                  type="email"
                  id="_replyto"
                  name="_replyto"
                  placeholder="hellothere@gmail.com"
                />

                <label for="user-message">Message:</label>
                <textarea
                  id="user-message"
                  name="message"
                  placeholder="How can I help you?"
                ></textarea>
                <button type="submit">Submit</button>
                <button type="reset">Reset</button>
              </form>
            </div>
            <div class="item">
              <ul>
                <li>
                  Email:
                  <a href="mailto:audiohobbit@gmail.com">
                    audiohobbit@gmail.com
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/zacharyjameson/"
                    target="_blank"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href="https://github.com/zacharyjameson" target="_blank">
                    GitHub
                  </a>
                </li>
                <li>
                  <a href="https://www.twitter.com/audiohobbit" target="_blank">
                    Twitter
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
