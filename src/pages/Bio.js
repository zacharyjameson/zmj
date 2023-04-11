import React, { Component } from "react";
import me from "../images/updatedz.jpg";
import { Link } from "react-router-dom";

class Bio extends Component {
  render() {
    return (
      <div className="homepage">
        <section>
          <h2>Bio.</h2>
          <div className="homegroup">
            <div className="homeitem">
              <p>Hi there! I'm Zack Jameson, I'm glad you found me.</p>
              <p>
                I'm a Cloud Engineer & Full Stack Developer from California, currently living in Raleigh, NC
              </p>
              <p>
                Take a look around my site and feel free to{" "}
                <Link to="/contactme" className="links">
                  contact me!
                </Link>
              </p>
              <p>3 things you should know about me:</p>
              <ol>
                <li>
                  I have a passion for learning, growth, and self-development
                  that feeds my increasing interest in software development and
                  web design.
                </li>
                <li>
                  People can be motivated by a number of different things:
                  money, time, fear, hunger, love, family, etc. I am, however,
                  motivated by a desire to produce worth-while, high-quality
                  content while collaborating with like-minded individuals
                  working toward a common goal.
                </li>
                <li>
                  As Mel Brooks would say, the 2020 quarantine has made me
                  mostly dead; but not <em>all</em> dead.
                </li>
              </ol>
            </div>
            <div className="homeitem me">
              <img
                className="me"
                src={me}
                alt="portrait of Zachary Jameson's face in black & white"
              />
            </div>
            
          </div>
        </section>
      </div>
    );
  }
}

export default Bio;
