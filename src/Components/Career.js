import React, { Component } from "react";
import inserts from "../images/audio.jpg";

class Career extends Component {
  render() {
    return (
      <section className="bio">
        <div>
          <h2 id="career">Career.</h2>
          <p>
            Currently, I'm working as a Cloud Engineer at{" "}
            <a href="https://www.trek10.com/" target="_blank" rel="noopener noreferrer">
              Trek10
            </a>
            . At Trek10, I've been a part of highly productive teams building AWS cloud based web applications with full
            stack responsibilities. After completing my collegiate career with my audio production company audioshire.
            being the main monetary driver, I found myself searching for something more; another avenue of creation,
            development, and growth. Shortly thereafter, I sunk myself into a successful Technical Recruiting position
            as a way to expose myself to a myriad of potential career paths. Fairly early on, I discovered that my core
            values aligned with software development e.g. constant growth, learning, and building things; it became a
            natural interest and a skill that I have begun to fiercely nurture. The same work ethic, collaboration, and
            discipline that made funding my education through a passion project a reality will guide me toward a
            successful software & web development career. The next step in my career is ideally on a team of
            knowledgeable, hardworking, and fun developers where I can learn and grow myself into an indispensable
            developer for them.
          </p>
        </div>
        <div className="group">
          <div className="item">
            <p>
              When I'm not developing my coding skills (which is rare these days), you can usually find me on my
              mountain bike, playing video games with my friends, or composing, editing, and/or playing music. I
              certainly try to keep my music abilities genre-fluid, but admittedly, my compositions typically have a
              strong tendency toward classical/instrumental, progressive rock; a la Ólafur Arnalds, Tycho, or Explosions
              in the Sky.
            </p>
          </div>
          <div className="item">
            <img
              className="audio"
              src={inserts}
              alt="silhouette of human in front of lit computer screen at desk with music equipment surrounding"
            />
          </div>
        </div>
      </section>
    );
  }
}

export default Career;
