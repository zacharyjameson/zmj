import React, { Component } from "react";
import { Link } from "react-router-dom";

class Landing extends Component {

  render() {
    return (
     <div className="landing">
        <h1>Hi, I'm Zack Jameson.</h1>
        <h1>I'm a full-stack web developer.</h1>
        <Link to="/portfolio">
          <button>View My Work</button>
        </Link>
        </div>
    );
  }
}

export default Landing;
