import React, { Component } from "react";
import { Link } from "react-router-dom";
import gatewaySTORE from "../gatewaySTORE/gatewaySTORE";
import Tilt from "react-parallax-tilt";

class Gateway extends Component {
  render() {
    const tiles = gatewaySTORE.pictures;
    return (
      <div className="gateway">
        <div className="gatebox">
          {tiles.map((pic, index) => {
            return (
              <div className="gateitem" key={index}>
                <Tilt tiltReverse={true}>
                  <div>
                    <img className="gateitem" className="cover" src={pic.picture} alt="tile" />
                  </div>
                </Tilt>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Gateway;
