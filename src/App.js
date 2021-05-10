import React, { Component } from "react";
import { Route } from "react-router-dom";
import audioshire from "./Components/audioshire";
import Bio from "./Components/Bio";
import Contact from "./Components/ContactMe";
import LandingPage from "./Components/LandingPage";
import Portfolio from "./Components/Portfolio";
import Socialsbar from "./Components/Socialsbar";

class App extends Component {
  state = {};

  renderMainRoutes() {
    return (
      <>
        <Route exact path="/" component={LandingPage} />
        <Route path="bio" component={Bio} />
        <Route path="contactme" component={Contact} />
        <Route path="portfolio" component={Portfolio} />
        <Route path="audioshire" component={audioshire} />
      </>
    );
  }

  render() {
    return (
      <div className="App_main">
        <main className="App_main">
          <Socialsbar />
          {this.renderMainRoutes()}
          </main>
      </div>
    );
  }
}

export default App;
