import React from "react";
import PropTypes from "prop-types";

import Nav from "./Nav";

class ReactApps extends React.Component {
  render() {
    return (
      <>
        <Nav />
        <div className="projects">
          <h2> React Applications </h2>

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
              <h2>AirBnb Clone</h2>
              <div className="card-description">
                <div className="desc-item1">
                  <h5>Front: </h5>
                  <h5>Server: </h5>
                  <h5>Database: </h5>
                  <h5>Specials: </h5>
                </div>
                <div className="desc-item2">
                  <span> React.js </span>
                  <span> Node.js</span>
                  <span> MongoDB </span>
                  <span>Google Maps Integration</span>
                </div>
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
              <h2>Bali Delivery</h2>
              <div className="card-description">
                <div className="desc-item1">
                  <h5>Front: </h5>
                  <h5>Server: </h5>
                  <h5>Database: </h5>
                </div>
                <div className="desc-item2">
                  <span> React.js </span>
                  <span> Node.js</span>
                  <span> MongoDB </span>
                </div>
              </div>
            </li>

            <li className="card">
              <div className="hovershow">
                <a
                  href="https://github.com/Davoshy/06-slack-api"
                  target="_blank"
                >
                  <button>Server Code</button>
                </a>

                <a
                  href="https://github.com/Davoshy/06-slack-client"
                  target="_blank"
                >
                  <button>Client Code</button>
                </a>
              </div>
              <div
                className="card-image"
                style={{
                  backgroundImage: `url("https://www.fakechatapp.com/pics/logo-fb-en.png")`
                }}
              ></div>
              <h2>Chat App</h2>
              <div className="card-description">
                <div className="desc-item1">
                  <h5>Front: </h5>
                  <h5>Server: </h5>
                  <h5>Database: </h5>
                  <h5>Specials: </h5>
                </div>
                <div className="desc-item2">
                  <span> React.js </span>
                  <span> Node.js</span>
                  <span> MongoDB </span>
                  <span>
                    {" "}
                    Security - Authorization with Tokens, Sending files{" "}
                  </span>
                </div>
              </div>
            </li>

            <li className="card">
              <div className="hovershow">
                <a
                  href="https://github.com/Davoshy/07-music-api"
                  target="_blank"
                >
                  <button>Server Code</button>
                </a>

                <a
                  href="https://github.com/Davoshy/07-music-client"
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
              <h2>Music App</h2>
              <div className="card-description">
                <div className="desc-item1">
                  <h5>Front: </h5>
                  <h5>Server: </h5>
                  <h5>Database: </h5>
                  <h5>Specials: </h5>
                </div>
                <div className="desc-item2">
                  <span> React.js </span>
                  <span> Node.js</span>
                  <span> MySQL </span>
                  <span> Purchase Premium with Stripe integration </span>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <footer className="center bg-dark">
          <p>David Doan &copy; 2020</p>
        </footer>
      </>
    );
  }
}

export default ReactApps;
