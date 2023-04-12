import React, { Component } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import audioshire from "./pages/audioshire";
import Career from "./pages/Career";
import Contact from "./pages/ContactMe";
import Bio from "./pages/Bio";
import Portfolio from "./pages/Portfolio";
import Navbar from "./components/Navbar";
import Gateway from "./components/Gate";
import Landing from "./pages/Landing";
import Socialsbar from "./components/Socialsbar";

class App extends Component {
  renderMainRoutes() {
    return (
      <Routes>
        <Route path="/" Component={Landing} />
        <Route path="/bio" Component={Bio} />
        <Route path="/career" Component={Career} />
        <Route path="/contactme" Component={Contact} />
        <Route path="/portfolio" Component={Portfolio} />
        <Route path="/audioshire" Component={audioshire} />
        <Route path="/interests" Component={Gateway} />
      </Routes>
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
