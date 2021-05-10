import React, { Component } from "react";

class Bio extends Component {
  state = {};
  render() {
    return (
      <section class="width">
        <div>
          <h2 id="career">Career.</h2>
          <p>
            After completing my collegiate career with my audio production
            company audioshire. being the main monetary driver, I found myself
            searching for something more; another avenue of creation,
            development, and growth. Shortly thereafter, I sunk myself into a
            successful Technical Recruiting position as a way to expose myself
            to a myriad of potential career paths. Fairly early on, I discovered
            that my core values aligned with software development e.g. constant
            growth, learning, and building things; it became a natural interest
            and a skill that I have begun to fiercely nurture. The same work
            ethic, collaboration, and discipline that made funding my education
            through a passion project a reality will guide me toward a
            successful software & web development career. The next step in my
            career is ideally on a team of knowledgeable, hardworking, and fun
            developers where I can learn and grow myself into an indispensable
            developer for them.
          </p>
        </div>
        <div class="group">
          <div class="item">
            <p>
              When I'm not developing my coding skills (which is rare these
              days), you can usually find me composing, editing, or playing
              music. I certainly try to keep my music abilities genre-fluid, but
              admittedly, my compositions have a strong tendency toward
              classical/instrumental, progressive rock; a la Ólafur Arnalds,
              Tycho, or Explosions in the Sky.
            </p>
          </div>
          <div class="item">
            <img
              src="images/musicproduction.jpg"
              alt="silhouette of human in front of lit computer screen at desk with music equipment surrounding"
            />
          </div>
        </div>
      </section>
    );
  }
}

export default Bio;
