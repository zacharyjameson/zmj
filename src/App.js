import React, { Component } from "react";
import "./App.css";
import { Route } from "react-router-dom";
import audioshire from "./pages/audioshire";
import Career from "./pages/Career";
import Contact from "./pages/ContactMe";
import Bio from "./pages/Bio";
import Portfolio from "./pages/Portfolio";
import Socialsbar from "./components/Socialsbar";
import Navbar from "./components/Navbar";
import Gateway from "./components/Gate";
import Landing from "./pages/Landing";

class App extends Component {
  renderMainRoutes() {
    return (
      <>
        <Route exact path="/" component={Landing} />
        <Route path="/bio" component={Bio} />
        <Route path="/career" component={Career} />
        <Route path="/contactme" component={Contact} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/audioshire" component={audioshire} />
        <Route path="/interests" component={Gateway} />
      </>
    );
  }

  render() {
    return (
      <div>
        <main className="App_main">
          {this.renderMainRoutes()}
          <Navbar />
          <Socialsbar />
        </main>
      </div>
    );
  }
}

export default App;
