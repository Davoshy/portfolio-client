import React from "react";
import PropTypes from "prop-types";

import Nav from "./Nav";

class FrontApps extends React.Component {
  render() {
    return (
      <>
        <Nav />
        <div className="projects">
          <h2> Front End Challenges </h2>

          <ul className="card-list">
            <li className="card">
              <div className="hovershow">
                <a
                  href="https://www.frontendmentor.io/challenges/easybank-landing-page-WaUhkoDN"
                  target="_blank"
                >
                  <button>Challenge</button>
                </a>
                <a
                  href="https://easybank-landing-nbbctuwmb.now.sh/"
                  target="_blank"
                >
                  <button>Solution</button>
                </a>
              </div>
              <div
                className="card-image"
                style={{
                  backgroundImage: `url(
                        "https://res.cloudinary.com/dz209s6jk/image/upload/v1583427671/Challenges/yezt1f56cfp2njnakpbo.jpg"
                      )`
                }}
              ></div>
              <h2>Easy Bank</h2>
              <div className="card-description">
                <div className="desc-item1">
                  <h5>Type: </h5>
                  <h5>Tech: </h5>
                </div>
                <div className="desc-item2">
                  <span> Landing Page </span>
                  <span> HTML / CSS </span>
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

export default FrontApps;
