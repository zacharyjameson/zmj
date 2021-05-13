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
        <ul className="portfoliogroup">
          <li className="portfolioitem">
            <h5>Moviedex</h5>
            <a href="https://moviedex-client.vercel.app/" target="_blank">
              <img
                src={moviedex}
                alt="screenshot of Moviedex app with Star Wars results"
              />
            </a>
            <div>
              The purpose of Moviedex is to help users decide on what movie to
              watch, from a list of saved movies. Moviedex is a React web
              application that allows users to call a public movie API, OMDb,
              save/delete those movies to/from Moviedex's server, and then click
              a button to randomly generate one of those movies as the selected
              movie to watch.
              </div>
            <p>
              Client Repo:
              <a
                href="https://github.com/zacharyjameson/moviedex-client"
                target="_blank"
              >
                github.com/zacharyjameson/moviedex-client
              </a>
            </p>
            <p>
              Server Repo:
              <a
                href="https://github.com/zacharyjameson/moviedex-server"
                target="_blank"
              >
                github.com/zacharyjameson/moviedex-server
              </a>
            </p>
            <p>
              Live App:
              <a href="https://moviedex-client.vercel.app/" target="_blank">
                Moviedex
              </a>
            </p>
            <p>
              Skills Used: HTML, CSS, Postgres, Node.js, Express, JavaScript,
              React, Vercel, Heroku and JSX
            </p>
          </li>
          <li className="portfolioitem">
            <h5>Weathertop</h5>
            <a
              href="https://zacharyjameson.github.io/weathertop"
              target="_blank"
            >
              <img
                src={weathertop}
                alt="screenshot of weathertop app with san francisco weather results"
              />
            </a>
            <p>
              Simple web application to find the current weather in a queried
              city. Allows users to return data in imperial or metric systems;
              but defaults to kelvin if no option is selected.
            </p>
            <p>
              Repo:
              <a
                href="https://github.com/zacharyjameson/weathertop"
                target="_blank"
              >
                github.com/zacharyjameson/weathertop
              </a>
            </p>
            <p>
              Live App:
              <a
                href="https://zacharyjameson.github.io/weathertop"
                target="_blank"
              >
                zacharyjameson.github.io/weathertop
              </a>
            </p>
            <p>Skills Used: HTML, CSS, JavaScript, React, GH Pages and JSX</p>
          </li>
          <li className="portfolioitem">
            <h5>Musiciandex</h5>
            <a
              href="https://zacharyjameson.github.io/musiciandex/"
              target="_blank"
            >
              <img
                src={musiciandex}
                alt="screenshot of musiciandex homepage"
              />
            </a>
            <p>
              I wanted to build a place where users could both check in on
              upcoming events as well as get information on background and most
              listened to albums of users' favorite artists as well as a tool to
              get a snapshot view of artists they haven't listened to yet. Users
              are able to enter in a band, artist or musician name and
              Musiciandex will return the respective description of the input,
              upcoming events and top 3 albums of the respective artist.
              Refactoring for React utilization coming soon!
            </p>
            <p>
              Repo:
              <a
                href="https://github.com/zacharyjameson/musiciandex"
                target="_blank"
              >
                github.com/zacharyjameson/musiciandex
              </a>
            </p>
            <p>
              Live App:
              <a
                href="https://zacharyjameson.github.io/musiciandex/"
                target="_blank"
              >
                zacharyjameson.github.io/musiciandex/
              </a>
            </p>
            <p>Skills Used: HTML, CSS, JavaScript, and jQuery</p>
          </li>
          <div className="portfoliogroup">
          <li className="portfolioitem">
            <h5>One Quiz to Rule Them All</h5>
            <a href="https://zacharyjameson.github.io/quiz-app/">
              <img
                src={quizapp}
                alt="screen shot of quiz app question"
              />
            </a>
            <p>
              A meme-based quiz app going over the trials, tribulations and
              overall tomfoolery in Middle Earth. Built using HTML, CSS,
              JavaScript, and jQuery.
            </p>
            <p>
              Repo:
              <a href="https://github.com/zacharyjameson/quiz-app">
                github.com/zacharyjameson/quiz-app
              </a>
            </p>
            <p>
              Live App:
              <a href="https://zacharyjameson.github.io/quiz-app/">
                zacharyjameson.github.io/quiz-app/
              </a>
            </p>
            <p>Skills Used: HTML, CSS, JavaScript, and jQuery</p>
          </li>

          <li className="portfolioitem">
            <h5>Noteful</h5>
            <a href="https://noteful-inky.vercel.app/" target="_blank">
              <img src={noteful} alt="noteful demo screenshot" />
            </a>
            <p>
              Utilizing React, JSX, CSS, JavaScript, Postgres, Express, Node.js,
              Vercel, Heroku & React (Router & Context) to create a full stack
              notes application that allows users to create folders that contain
              various notes included in a given folder. A server and database
              was built as the backend as well, which can be viewed
              <a
                href="https://github.com/zacharyjameson/noteful-server"
                target="_blank"
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
              >
                github.com/zacharyjameson/noteful
              </a>
            </p>
            <p>
              Server Repo:
              <a
                href="https://github.com/zacharyjameson/noteful-server"
                target="_blank"
              >
                github.com/zacharyjameson/noteful-server
              </a>
            </p>
            <p>
              Live App:
              <a href="https://noteful-inky.vercel.app/" target="_blank">
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
