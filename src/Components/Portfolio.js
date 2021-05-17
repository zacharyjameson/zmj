import React, { Component } from "react";
import moviedex from "../images/moviedex.jpeg";
import weathertop from "../images/weathertop.jpeg";
import musiciandex from "../images/musiciandexresults.jpeg";
import quizapp from "../images/quizapp.jpeg";
import noteful from "../images/noteful2.jpeg";

class Portfolio extends Component {
  render() {
    return (
      <section className="portfolio">
        <div>
          <h2 id="portfolio">Portfolio</h2>
        </div>
        <h3>Technical Skills</h3>
        <p>
          Check out my latest web software development portfolio projects
          utilizing React.JS, Node.JS, JSX, JavaScript, Express, PostgreSQL,
          jQuery, RESTful API's, HTML/CSS and more.
        </p>
        <ul className="portfoliogroup">
          <li className="portfolioitem">
            <h5>Moviedex</h5>
            <div className="overlayContainer">
              <a
                href="https://moviedex-client.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  id="inner"
                  src={moviedex}
                  className="portfolioimg"
                  width="200"
                  alt="screenshot of Moviedex app with Star Wars results"
                />
              </a>
              <div className="description">
                The purpose of Moviedex is to help users decide on what movie to
                watch, from a list of saved movies. Moviedex is a React web
                application that allows users to call a public movie API, OMDb,
                save/delete those movies to/from Moviedex's server, and then
                click a button to randomly generate one of those movies as the
                selected movie to watch.
              </div>
              <div className="projectlinks">
                <p>
                  Repos <br />
                  <a
                    href="https://github.com/zacharyjameson/moviedex-client"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Client
                  </a>{" "}
                  <br />
                  <a
                    href="https://github.com/zacharyjameson/moviedex-server"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Server
                  </a>
                </p>
                <p>
                  Demo <br />
                  <a
                    href="https://moviedex-client.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Moviedex
                  </a>
                </p>
              </div>
            </div>
          </li>
          <li className="portfolioitem">
            <h5>Weathertop</h5>
            <div className="overlayContainer">
              <a
                href="https://zacharyjameson.github.io/weathertop"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={weathertop}
                  width="200"
                  alt="screenshot of weathertop app with san francisco weather results"
                />
              </a>
              <div className="description">
                Simple web application to find the current weather in a queried
                city. Allows users to return data in imperial or metric systems;
                but defaults to kelvin if no option is selected.
              </div>
              <div className="projectlinks">
                <p>
                  Repos <br />
                  <a
                    href="https://github.com/zacharyjameson/weathertop"
                    target="_blank"
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
              <a
                href="https://zacharyjameson.github.io/musiciandex/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={musiciandex}
                  width="200"
                  alt="screenshot of musiciandex homepage"
                />
              </a>
              <div className="description">
                I wanted to build a place where users could both check in on
                upcoming events as well as get information on background and
                most listened to albums of users' favorite artists as well as a
                tool to get a snapshot view of artists they haven't listened to
                yet. Users are able to enter in a band, artist or musician name
                and Musiciandex will return the respective description of the
                input, upcoming events and top 3 albums of the respective
                artist. Refactoring for React utilization coming soon!
              </div>
              <div className="projectlinks">
                <p>
                  Repos <br />
                  <a
                    href="https://github.com/zacharyjameson/musiciandex"
                    target="_blank"
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
                    rel="noreferrer"
                  >
                    Musiciandex
                  </a>
                </p>
              </div>
            </div>
          </li>
          <div className="portfoliogroup">
            <li className="portfolioitem">
              <h5>One Quiz to Rule Them All</h5>
              <div className="overlayContainer">
                <a href="https://zacharyjameson.github.io/quiz-app/">
                  <img
                    src={quizapp}
                    width="200"
                    alt="screen shot of quiz app question"
                  />
                </a>
                <div className="description">
                  A meme-based quiz app going over the trials, tribulations and
                  overall tomfoolery in Middle Earth. Built using HTML, CSS,
                  JavaScript, and jQuery.
                </div>
                <div className="projectlinks">
                  <p>
                    Repos <br />
                    <a href="https://github.com/zacharyjameson/quiz-app">
                      Client
                    </a>
                  </p>
                  <p>
                    Demo <br />
                    <a href="https://zacharyjameson.github.io/quiz-app/">
                      Quiz
                    </a>
                  </p>
                </div>
              </div>
            </li>
            <li className="portfolioitem">
              <h5>Noteful</h5>
              <a
                href="https://noteful-inky.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={noteful} width="200" alt="noteful demo screenshot" />
              </a>
              <p>
                Utilizing React, JSX, CSS, JavaScript, Postgres, Express,
                Node.js, Vercel, Heroku & React (Router & Context) to create a
                full stack notes application that allows users to create folders
                that contain various notes included in a given folder. A server
                and database was built as the backend as well, which can be
                viewed
                <a
                  href="https://github.com/zacharyjameson/noteful-server"
                  target="_blank"
                  rel="noreferrer"
                >
                  here
                </a>
                .
              </p>
              <p>
                Client Repo:
                <a
                  href="https://github.com/zacharyjameson/noteful"
                  target="_blank"
                  rel="noreferrer"
                >
                  github.com/zacharyjameson/noteful
                </a>
              </p>
              <p>
                Server Repo:
                <a
                  href="https://github.com/zacharyjameson/noteful-server"
                  target="_blank"
                  rel="noreferrer"
                >
                  github.com/zacharyjameson/noteful-server
                </a>
              </p>
              <p>
                Live App:
                <a
                  href="https://noteful-inky.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Noteful
                </a>
              </p>
              <p>
                Skills Used: HTML, CSS, React, JSX, Heroku, Vercel, Postgres,
                Node.js, Express and JavaScript
              </p>
            </li>
          </div>
        </ul>
      </section>
    );
  }
}

export default Portfolio;
