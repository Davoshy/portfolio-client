import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faReact
} from "@fortawesome/free-brands-svg-icons";
import { faClipboard } from "@fortawesome/free-regular-svg-icons";
import {
  faLaptopCode,
  faDatabase,
  faProjectDiagram
} from "@fortawesome/free-solid-svg-icons";

import { Link } from "react-router-dom";

class Main extends React.Component {
  render() {
    return (
      <>
        <div className="body">
          <header className="showcase">
            <div className="content">
              <img
                src="https://imagehost.imageupload.net/2020/03/30/logo_D_D.png"
                className="logo"
                alt="Media"
              />
              <div className="title">David Doan</div>
              <div className="text"> MERN Stack Web Developer</div>
              <div className="icons">
                <a
                  href="https://www.linkedin.com/in/david-doan-89748a75/"
                  target="_blank"
                >
                  <FontAwesomeIcon
                    className="icon"
                    icon={faLinkedin}
                    size="2x"
                    style={{ color: "#3a3664" }}
                  />
                </a>
                <a href="https://github.com/Davoshy" target="_blank">
                  <FontAwesomeIcon
                    className="icon"
                    icon={faGithub}
                    size="2x"
                    style={{ color: "#3a3664" }}
                  />
                </a>
                <FontAwesomeIcon
                  className="icon"
                  icon={faClipboard}
                  size="2x"
                  style={{ color: "#3a3664" }}
                />
              </div>
            </div>
          </header>
          <section className="services">
            <div className="container grid-3 center">
              <div>
                <FontAwesomeIcon icon={faReact} size="3x" />
                <h3>Front End</h3>
                <p>HTML / CSS</p>
                <p>React.js</p>
                <p>GraphQL</p>
              </div>
              <div>
                <FontAwesomeIcon icon={faLaptopCode} size="3x" />
                <h3>Back End</h3>

                <p>Node.js</p>
                <p>Express.js</p>
              </div>
              <div>
                <FontAwesomeIcon icon={faDatabase} size="3x" />
                <i className="fas fa-database fa-3x"></i>
                <h3>Database</h3>

                <p>MongoDB</p>
                <p>MySQL</p>
              </div>
            </div>
          </section>

          <section className="projects">
            <h2> Projects Build </h2>

            <ul className="card-list">
              <li className="card">
                <div className="hovershow">
                  <a
                    href="https://airbnbclone-client.herokuapp.com/"
                    target="_blank"
                  >
                    <button>Show App!</button>
                  </a>
                  <a
                    href="https://github.com/Davoshy/04-airbnb-api"
                    target="_blank"
                  >
                    <button>Server Code</button>
                  </a>

                  <a
                    href="https://github.com/Davoshy/04-airbnb-client"
                    target="_blank"
                  >
                    <button>Client Code</button>
                  </a>
                </div>
                <div
                  className="card-image"
                  style={{
                    backgroundImage: `url(
                            "https://i.pinimg.com/originals/56/78/7f/56787f4caf0c7764457a10844c45013c.jpg"
                          )`
                  }}
                ></div>
                <div className="card-description">
                  <h2>AirBnb Clone</h2>
                  <p>React.js, Node.js, MongoDB</p>
                </div>
              </li>

              <li className="card">
                <div className="hovershow">
                  <a href="https://balieats.herokuapp.com/" target="_blank">
                    <button> Show App!</button>
                  </a>
                  <a href="https://github.com/Davoshy/balideli" target="_blank">
                    <button>Server Code</button>
                  </a>

                  <a
                    href="https://github.com/Davoshy/balideli-client"
                    target="_blank"
                  >
                    <button>Client Code</button>
                  </a>
                </div>
                <div
                  className="card-image"
                  style={{
                    backgroundImage: `url("https://previews.123rf.com/images/miracel123/miracel1231801/miracel123180100095/94124044-food-delivery-logo.jpg")`
                  }}
                ></div>
                <div className="card-description">
                  <h2>Bali Delivery App</h2>
                  <p>React.js, Node.js, MongoDB</p>
                </div>
              </li>

              <li className="card">
                <div className="hovershow">
                  <button> Show App!</button>
                  <a href="https://github.com/Davoshy/balideli" target="_blank">
                    <button>Server Code</button>
                  </a>

                  <a
                    href="https://github.com/Davoshy/balideli-client"
                    target="_blank"
                  >
                    <button>Client Code</button>
                  </a>
                </div>
                <div
                  className="card-image"
                  style={{
                    backgroundImage: `url("https://www.smartsuppcdn.com/assets/img/illustration/png/smartsupp-chat-dashboard-sm.png")`
                  }}
                ></div>
                <div className="card-description">
                  <h2>Chat App</h2>
                  <p>React.js, Node.js, MongoDB</p>
                </div>
              </li>

              <li className="card">
                <div className="hovershow">
                  <button> Show App!</button>
                  <a href="https://github.com/Davoshy/balideli" target="_blank">
                    <button>Server Code</button>
                  </a>

                  <a
                    href="https://github.com/Davoshy/balideli-client"
                    target="_blank"
                  >
                    <button>Client Code</button>
                  </a>
                </div>
                <div
                  className="card-image"
                  style={{
                    backgroundImage: `url("https://support.apple.com/library/content/dam/edam/applecare/images/en_US/applemusic/ios13-iphone-xs-ipad-pro-music-playlists-hero.jpg")`
                  }}
                ></div>
                <div className="card-description">
                  <h2>Music App</h2>
                  <p>React.js, Node.js, MongoDB</p>
                </div>
              </li>
            </ul>
          </section>
          <section className="about bg-light grid-2">
            <div className="container">
              <div className="center">
                <h2>About Me</h2>
              </div>
            </div>
            <div></div>
          </section>

          <footer className="center bg-dark">
            <p>David Doan &copy; 2020</p>
          </footer>
        </div>
      </>
    );
  }
}

export default Main;
