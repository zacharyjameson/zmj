import React, { Component } from "react";
import moviedex from "../images/moviedex.jpeg";
import weathertop from "../images/weathertop.jpeg";
import musiciandex from "../images/musiciandexresults.jpeg";
import quizapp from "../images/quizapp.jpeg";
import noteful from "../images/noteful2.jpeg";
import watchlist from "../images/Watchlist.jpeg";
class Portfolio extends Component {
  render() {
    return (
      <section className="portfolio">
        <div>
          <h2>Portfolio.</h2>
        </div>
        <div className="portfoliohead">
          <h3>Technical Skills</h3>
          <ul className="skills">
            <li className="skillsitem">React</li>
            <li className="skillsitem">Node.js</li>
            <li className="skillsitem">JavaScript</li>
            <li className="skillsitem">VS Code</li>
            <li className="skillsitem">Express</li>
            <li className="skillsitem">PostgreSQL</li>
            <li className="skillsitem">jQuery</li>
            <li className="skillsitem">RESTful API's</li>
            <li className="skillsitem">HTML/CSS</li>
            <li className="skillsitem">Agile</li>
            <li className="skillsitem">JIRA</li>
          </ul>
          <p>
            From helping you decide what movie to watch next, finding what the weather's like around the world or
            getting some up to date information on how your favorite musician/band is doing and when they'll be coming
            to town next, check out a select few of my latest web development portfolio projects utilizing React.JS,
            Node.JS, JSX, JavaScript, Express, PostgreSQL, jQuery, RESTful API's, HTML/CSS and more.
          </p>
        </div>
        <ul className="portfoliogroup">
          <li className="portfolioitem">
            <h5>Moviedex</h5>
            <div className="overlayContainer">
              <a href="https://moviedex-client.vercel.app/" target="_blank" rel="noreferrer">
                <img
                  id="inner"
                  src={moviedex}
                  className="portfolioimg"
                  width="200"
                  title="Moviedex"
                  alt="screenshot of Moviedex app with Star Wars results"
                />
              </a>
              <div className="projectlinks">
                <div className="projectlinksitem">
                  <p>
                    Repos <br />
                    <a
                      href="https://github.com/zacharyjameson/moviedex-client"
                      target="_blank"
                      title="Moviedex Client Repo"
                      rel="noreferrer"
                    >
                      Client
                    </a>{" "}
                    <br />
                    <a
                      href="https://github.com/zacharyjameson/moviedex-server"
                      target="_blank"
                      title="Moviedex Server Repo"
                      rel="noreferrer"
                    >
                      Server
                    </a>
                  </p>
                </div>
                <div className="projectlinksitem">
                  <p>
                    Demo <br />
                    <a
                      href="https://moviedex-client.vercel.app/"
                      target="_blank"
                      title="Moviedex Demo"
                      rel="noreferrer"
                    >
                      Moviedex
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </li>
          <li className="portfolioitem">
            <h5>Locksley Finance</h5>
            <div className="overlayContainer">
              <a href="https://locksley.vercel.app/" target="_blank" rel="noreferrer">
                <img
                  id="inner"
                  src={watchlist}
                  className="portfolioimg"
                  width="200"
                  title="Locksley"
                  alt="screenshot of Locksley watchlist"
                />
              </a>
              <div className="projectlinks">
                <div className="projectlinksitem">
                  <p>
                    Repos <br />
                    <a
                      href="https://github.com/zacharyjameson/locksley-client"
                      target="_blank"
                      title="Locksley Client Repo"
                      rel="noreferrer"
                    >
                      Client
                    </a>{" "}
                    <br />
                    <a
                      href="https://github.com/zacharyjameson/locksley-server"
                      target="_blank"
                      title="Locksley Server Repo"
                      rel="noreferrer"
                    >
                      Server
                    </a>
                  </p>
                </div>
                <div className="projectlinksitem">
                  <p>
                    Demo <br />
                    <a href="https://locksley.vercel.app/" target="_blank" title="Moviedex Demo" rel="noreferrer">
                      Locksley Finance
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </li>
          <li className="portfolioitem">
            <h5>Weathertop</h5>
            <div className="overlayContainer">
              <a href="https://zacharyjameson.github.io/weathertop" target="_blank" rel="noreferrer">
                <img
                  src={weathertop}
                  width="200"
                  alt="screenshot of weathertop app with san francisco weather results"
                />
              </a>

              <div className="projectlinks">
                <p>
                  Repos <br />
                  <a
                    href="https://github.com/zacharyjameson/weathertop"
                    target="_blank"
                    title="Weathertop Client Repo"
                    rel="noreferrer"
                  >
                    Client
                  </a>{" "}
                  <br />
                </p>
                <p>
                  Demo <br />
                  <a
                    href="https://zacharyjameson.github.io/weathertop"
                    target="_blank"
                    title="Weathertop Demo"
                    rel="noreferrer"
                  >
                    Weathertop
                  </a>
                </p>
              </div>
            </div>
          </li>
          <li className="portfolioitem">
            <h5>Musiciandex</h5>
            <div className="overlayContainer">
              <a href="https://zacharyjameson.github.io/musiciandex/" target="_blank" rel="noreferrer">
                <img src={musiciandex} width="200" alt="screenshot of musiciandex homepage" />
              </a>

              <div className="projectlinks">
                <p>
                  Repos <br />
                  <a
                    href="https://github.com/zacharyjameson/musiciandex"
                    target="_blank"
                    title="Musiciandex Client Repo"
                    rel="noreferrer"
                  >
                    Client
                  </a>
                </p>
                <p>
                  Demo <br />
                  <a
                    href="https://zacharyjameson.github.io/musiciandex/"
                    target="_blank"
                    title="Musiciandex Demo"
                    rel="noreferrer"
                  >
                    Musiciandex
                  </a>
                </p>
              </div>
            </div>
          </li>
          <li className="portfolioitem">
            <h5>One Quiz to Rule Them All</h5>
            <div className="overlayContainer">
              <a href="https://zacharyjameson.github.io/quiz-app/">
                <img src={quizapp} width="200" alt="screen shot of quiz app question" />
              </a>
              <div className="projectlinks">
                <p>
                  Repos <br />
                  <a
                    href="https://github.com/zacharyjameson/quiz-app"
                    target="_blank"
                    rel="noreferrer"
                    title="LOTR Quiz App Repo"
                  >
                    Client
                  </a>
                </p>
                <p>
                  Demo <br />
                  <a
                    href="https://zacharyjameson.github.io/quiz-app/"
                    target="_blank"
                    rel="noreferrer"
                    title="LOTR Quiz Demo"
                  >
                    LOTRquiz
                  </a>
                </p>
              </div>
            </div>
          </li>
          <li className="portfolioitem">
            <h5>Noteful</h5>
            <div className="overlayContainer">
              <a href="https://noteful-inky.vercel.app/" target="_blank" rel="noreferrer">
                <img src={noteful} width="200" alt="noteful demo screenshot" />
              </a>
              <div className="projectlinks">
                <p>
                  Repos <br />
                  <a
                    href="https://github.com/zacharyjameson/noteful"
                    target="_blank"
                    rel="noreferrer"
                    title="Noteful Client Repo"
                  >
                    Client
                  </a>
                  <br />
                  <a
                    href="https://github.com/zacharyjameson/noteful-server"
                    target="_blank"
                    rel="noreferrer"
                    title="Noteful Server Repo"
                  >
                    Server
                  </a>
                </p>
                <p>
                  Demo <br />
                  <a href="https://noteful-inky.vercel.app/" target="_blank" rel="noreferrer" title="Noteful Demo">
                    Noteful
                  </a>
                </p>
              </div>
            </div>
          </li>
        </ul>
      </section>
    );
  }
}

export default Portfolio;
