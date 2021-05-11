import React, { Component } from "react";
import "../App.css";
import {
  faGithub,
  faLinkedinIn,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Socialsbar extends Component {
  state = {};
  render() {
    return (
      <div className="socialsbar">
        <ul>
          <li className="followme">Follow me</li>
          <li>
            <a
              href="https://github.com/zacharyjameson"
              target="_blank"
              rel="noreferrer"
              title="Follow on GitHub"
              className="github"
            >
              <FontAwesomeIcon size="3x" icon={faGithub}/>
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/zacharyjameson/"
              target="_blank"
              rel="noreferrer"
              title="Follow on Linkedin"
              className="linkedin"
            >
              <FontAwesomeIcon size="3x" icon={faLinkedinIn} />
            </a>
          </li>
          <li>
            <a
              href="https://www.twitter.com/audiohobbit"
              target="_blank"
              rel="noreferrer"
              title="Follow on Twitter"
              className="twitter"
            >
              <FontAwesomeIcon size="3x" icon={faTwitter} />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/zacharyjameson"
              target="_blank"
              rel="noreferrer"
              title="Follow on Instagram"
              className="instagram"
            >
              <FontAwesomeIcon size="3x" icon={faInstagram} className="icon" />
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Socialsbar;
