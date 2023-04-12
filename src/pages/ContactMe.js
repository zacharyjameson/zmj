import React, { Component } from "react";

class Contact extends Component {
  render() {
    return (
      <div className="contactform">
        <section>
          <h2>Contact Me.</h2>
          <form action="https://formspree.io/f/mqkgggda" method="post">
            <div className="contactbox">
              <div className="contactitem">
                <label htmlFor="name">Name: </label>
                <br />
                <input type="text" id="name" name="name" placeholder="Enter Full Name" required />
              </div>
              <div className="contactitem">
                <label htmlFor="_replyto">Email: </label> <br />
                <input type="email" id="_replyto" name="_replyto" placeholder="hellothere@gmail.com" required />
              </div>
            </div>
            <div className="contactbox2">
              <div className="contactitem">
                <label htmlFor="user-message">Message:</label>
                <br />
                <textarea id="user-message" name="message" placeholder="How can I help you?" required></textarea>
              </div>
            </div>
            <div className="contactbuttons">
              <button className="contactitem" type="submit">
                Submit
              </button>
              <button className="contactitem" type="reset">
                Reset
              </button>
            </div>
          </form>
          <div className="michaelscott">
            <p>
              "Sometimes I'll start a sentence, and I don't even know where it's going. I just hope I find it along the
              way. Like an improv conversation." <br /> - Michael Scott
            </p>
          </div>
        </section>
      </div>
    );
  }
}

export default Contact;
