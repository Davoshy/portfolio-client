import React from "react";
import PropTypes from "prop-types";

import Nav from "./Nav";

class Games extends React.Component {
  render() {
    return (
      <>
        <Nav />
        <div className="projects">
          <h2> Games </h2>

          <ul className="card-list">
            <li className="card">
              <div className="hovershow">
                <a
                  href="https://davoshy.github.io/02-k-advanced/"
                  target="_blank"
                >
                  <button>Play Game</button>
                </a>
                <a
                  href="https://github.com/Davoshy/02-k-advanced"
                  target="_blank"
                >
                  <button>Code</button>
                </a>
              </div>
              <div
                className="card-image"
                style={{
                  backgroundImage: `url(
                        "https://i.ibb.co/K0d48NW/Screenshot-2020-04-12-at-12-46-47.png"
                      )`
                }}
              ></div>
              <h2>Rock Paper Scissors</h2>
              <div className="card-description">
                <div className="desc-item1">
                  <h5>Type: </h5>
                  <h5>Tech: </h5>
                </div>
                <div className="desc-item2">
                  <span> Game </span>
                  <span> HTML / CSS / JS </span>
                </div>
              </div>
            </li>
            <li className="card">
              <div className="hovershow">
                <a
                  href="https://davoshy.github.io/memory-game/"
                  target="_blank"
                >
                  <button>Play Game</button>
                </a>
                <a
                  href="https://github.com/Davoshy/memory-game"
                  target="_blank"
                >
                  <button>Code</button>
                </a>
              </div>
              <div
                className="card-image"
                style={{
                  backgroundImage: `url(
                        "https://i.ibb.co/TqZNyR5/Screenshot-2020-04-14-at-14-55-42.png"
                      )`
                }}
              ></div>
              <h2>Memory Game</h2>
              <div className="card-description">
                <div className="desc-item1">
                  <h5>Type: </h5>
                  <h5>Tech: </h5>
                </div>
                <div className="desc-item2">
                  <span> Game </span>
                  <span> HTML / CSS / JS </span>
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

export default Games;
