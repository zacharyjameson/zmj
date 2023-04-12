import React, { Component } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";

// Pages
import Audioshire from "./pages/audioshire.js";
import Career from "./pages/Career.js";
import Contact from "./pages/ContactMe.js";
import Bio from "./pages/Bio.js";
import Landing from "./pages/Landing.js";
import Portfolio from "./pages/Portfolio.js";

// Componenets
import Navbar from "./components/Navbar.js";
import Gateway from "./components/Gate.js";
import Socialsbar from "./components/Socialsbar.js";

class App extends Component {
  renderMainRoutes() {
    return (
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/bio" element={<Bio />} />
        <Route path="/career" element={<Career />} />
        <Route path="/contactme" element={<Contact />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/audioshire" element={<Audioshire />} />
        <Route path="/interests" element={<Gateway />} />
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
