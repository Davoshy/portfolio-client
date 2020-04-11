import React from "react";
import PropTypes from "prop-types";

class Projects extends React.Component {
  render() {
    <>
      <div className="projects">
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
      </div>
    </>;
  }
}

export default Projects;
