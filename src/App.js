import React, { Component } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import audioshire from "./pages/audioshire.js";
import Career from "./pages/Career.js";
import Contact from "./pages/ContactMe.js";
import Bio from "./pages/Bio.js";
import Portfolio from "./pages/Portfolio.js";
import Navbar from "./components/Navbar.js";
import Gateway from "./components/Gate.js";
import Landing from "./pages/Landing.js";
import Socialsbar from "./components/Socialsbar.js";

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
