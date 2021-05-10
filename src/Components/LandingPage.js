import React, { Component } from "react";

class LandingPage extends Component {
  state = {};
  render() {
    return (
      <div className="homepage">
        <section class="width">
          <h2 id="bio">Bio.</h2>
          <div class="group">
            <div class="item item-double">
              <p>Hi there! I'm Zack Jameson, I'm glad you found me.</p>
              <p>I'm a software developer living in Raleigh, NC</p>
              <p>
                Take a look around my site and feel free to
                <a href="#contact">contact me!</a>
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
                  As Mel Brooks would say, the 2020 quarantine has only turned
                  me mostly insane; but not entirely....yet.
                </li>
              </ol>
              <p>And a few services and traits I bring to the table:</p>
              <ul>
                <li>
                  Front-end web development utilizing React, JavaScript, JSX,
                  Node.js, Postgres, HTML, and CSS development
                </li>
                <li>
                  A desire to consistently push my skills as well as the team
                  each day to produce more efficient and higher quality content.
                </li>
                <li>Web page design and development</li>
                <li>Human factors and ergonomic considerations</li>
                <li>A positive attitude</li>
              </ul>
            </div>
            <div class="item">
              <img
                class="me"
                src="images/zmj.png"
                alt="portrait of Zachary Jameson's face in black & white"
              />
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default LandingPage;
