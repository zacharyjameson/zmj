import React, { Component } from "react";
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
                <Tilt tiltReverse={true} scale={0.99}>
                  <div>
                    <img className="cover" src={pic.picture} alt="" />
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
