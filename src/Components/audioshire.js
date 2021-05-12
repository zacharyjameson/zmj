import React, { Component } from "react";
import julie from "../images/influencerpodcast.png";
import alyshia from "../images/thatoneaudition.jpg";
import alejandro from "../images/dealmakerspodcast.jpg";

class audioshire extends Component {
  state = {};
  render() {
    return (
      <div className="audioshire">
        <section class="width">
          <div>
            <h2 id="audioshire">audioshire.</h2>
            <p>
              audioshire. was started during my college years out of a desire to
              fund my academic career, debt free, with a passion project - audio
              production. audioshire provides end to end audio pre & post
              production services for podcasts, corporate videos, broadcasts,
              audio focused mobile apps like walking tours and meditation, and
              much more. Please take a look at some of the projects I've worked
              on with clients around the world that helped make that goal a
              success!
            </p>
          </div>
          <div class="audioshireGroup">
            <div class="audioItem">
              <a href="https://podcasts.apple.com/us/podcast/the-influencer-podcast/id1229401800">
                <img
                  src={julie}
                  width="200"
                  alt="Influencer Podcast with Julie Solomon Artwork Cover"
                />
              </a>
            </div>
            <div class="audioItem">
              <a href="https://podcasts.apple.com/us/podcast/that-one-audition-with-alyshia-ochse/id1262208420">
                <img
                  src={alyshia}
                  width="200"
                  alt="That One Audition Podcast with Alyshia Ochse Artwork Cover"
                />
              </a>
            </div>
            <div class="audioItem">
              <a href="https://podcasts.apple.com/us/podcast/dealmakers/id1439149348">
                <img
                  src={alejandro}
                  width="200"
                  alt="DealMaker's Podcast with Alejandro Cremades Artwork Cover"
                />
              </a>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default audioshire;
