import React, { Component } from "react";
import julie from "../images/influencerpodcast.png";
import alyshia from "../images/thatoneaudition.jpg";
import alejandro from "../images/dealmakerspodcast.jpg";
import canadabay from "../images/canadabay.jpg";
import marketingbookpodcast from "../images/marketingbookpodcast.jpg";
import shestartsup from "../images/shestartsup.png";

class Audioshire extends Component {
  state = {};
  render() {
    return (
      <div className="audioshire">
        <section>
          <div>
            <h2 id="audioshire">audioshire.</h2>
            <div className="portfoliohead">
              <h3>Technical Skills</h3>
              <ul className="skills">
                <li className="skillsitem">Cubase</li>
                <li className="skillsitem">Audacity</li>
                <li className="skillsitem">Final Cut Pro</li>
                <li className="skillsitem">Logic Pro</li>
                <li className="skillsitem">Multiband Compression</li>
                <li className="skillsitem">Mixing & Mastering</li>
                <li className="skillsitem">Corrective Equalization</li>
                <li className="skillsitem">Balancing</li>
                <li className="skillsitem">Tone Shaping</li>
                <li className="skillsitem">Audio/Visual Editing</li>
                <li className="skillsitem">ID3</li>
                <li className="skillsitem">Audio Cleaning</li>
              </ul>
              <p>
                audioshire. was started during my college years out of a desire to fund my academic career, debt free,
                with a passion project - audio and video production. audioshire provides end to end audio pre & post
                production services for podcasts, corporate videos, broadcasts, audio focused mobile apps like walking
                tours and meditation, and much more. Please take a look at some of the projects I've worked on and the
                awesome clients around the world that helped make that goal a success!
              </p>
              <p>
                These project teams are located across the world, each utilizing their own project management system
                including Asana, JIRA, Basecamp, or Notion; where I'm responsible for updating my project task cards
                multiple times week to keep up with the numerous project releases we have each and every week,
                coordinating with internal and external marketing teams/vendors, writers, engineers and more.
              </p>
            </div>
          </div>
          <div className="audioshireGroup">
            <div className="audioItem">
              <a href="https://podcasts.apple.com/us/podcast/the-influencer-podcast/id1229401800">
                <img
                  src={julie}
                  alt="Influencer Podcast with Julie Solomon Artwork Cover"
                  title="The Influencer Podcast with Julie Solomon"
                />
              </a>
            </div>
            <div className="audioItem">
              <a href="https://podcasts.apple.com/us/podcast/that-one-audition-with-alyshia-ochse/id1262208420">
                <img
                  src={alyshia}
                  alt="That One Audition Podcast with Alyshia Ochse Artwork Cover"
                  title="That One Audition with Alyshia Ochse"
                />
              </a>
            </div>
            <div className="audioItem">
              <a href="https://podcasts.apple.com/us/podcast/dealmakers/id1439149348">
                <img
                  src={alejandro}
                  alt="DealMaker's Podcast with Alejandro Cremades Artwork Cover"
                  title="Dealmaker's Podcast with Alejandro Cremades"
                />
              </a>
            </div>
            <div className="audioItem">
              <a href="https://www.salesartillery.com/marketing-book-podcast">
                <img src={marketingbookpodcast} alt="Marketing Book Podcast" title="Marketing Book Podcast" />
              </a>
            </div>
            <div className="audioItem">
              <a href="https://monamiejanine.com/podcast">
                <img src={shestartsup} alt="She Starts Up" title="She Starts Up with Janine Sickmeyer" />
              </a>
            </div>
            <div className="audioItem">
              <a href="https://www.canadabay.nsw.gov.au/lifestyle/sports-and-recreation/walks-and-guides">
                <img
                  src={canadabay}
                  alt="Canada Bay Walking Tour Audio Guide"
                  title="Canada Bay Walking Tour Audio Guide"
                />
              </a>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Audioshire;
