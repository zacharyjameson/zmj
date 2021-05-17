import React, { Component } from "react";
import "../App.css";
import {
  faGithub,
  faLinkedinIn,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

class Socialsbar extends Component {
  state = {};
  render() {
    return (
      <div className="socialsbar">
        <ul className="socialsGroup">
          <li className="followme socialItem">Follow me</li>
          <li className="socialItem">
            <a
              href="https://github.com/zacharyjameson"
              target="_blank"
              rel="noreferrer"
              title="Follow on GitHub"
              className="github"
            >
              <FontAwesomeIcon size="2x" icon={faGithub} />
            </a>
          </li>
          <li className="socialItem">
            <a
              href="https://www.linkedin.com/in/zacharyjameson/"
              target="_blank"
              rel="noreferrer"
              title="Follow on Linkedin"
              className="linkedin"
            >
              <FontAwesomeIcon size="2x" icon={faLinkedinIn} />
            </a>
          </li>
          <li className="socialItem">
            <a
              href="https://www.twitter.com/audiohobbit"
              target="_blank"
              rel="noreferrer"
              title="Follow on Twitter"
              className="twitter"
            >
              <FontAwesomeIcon size="2x" icon={faTwitter} />
            </a>
          </li>
          <li className="socialItem">
            <a
              href="https://www.instagram.com/zacharyjameson"
              target="_blank"
              rel="noreferrer"
              title="Follow on Instagram"
              className="instagram"
            >
              <FontAwesomeIcon size="2x" icon={faInstagram} className="icon" id="instagram" />
            </a>
          </li>
          <li>
            <Link to="/contactme" className="contactme">
              <FontAwesomeIcon size="2x" icon={faEnvelope} />
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Socialsbar;
