import React from "react";
import PropTypes from "prop-types";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

class Nav extends React.Component {
  state = {
    classMenu: ""
  };

  showMenu = () => {
    if (this.state.classMenu == "") {
      this.setState({
        classMenu: "show"
      });
    } else {
      this.setState({
        classMenu: ""
      });
    }
  };
  render() {
    console.log(this.state.classMenu);
    return (
      <nav>
        <div>
          <a href="/" className="logo"></a>
          <a id="portfolio-page" className="nav-items" href="/">
            {" "}
            Portfolio Page
          </a>
        </div>
        <div className="nav-pages">
          <a className="nav-items" href="/">
            Home
          </a>
          <a className="nav-items" href="/about">
            About Me
          </a>
          <a className="nav-items" href="/resume">
            Resume
          </a>
          <a className="nav-items" id="drop-projects" href="/">
            Projects
            <div className="drop-down">
              <a className="drop-items" href="/frontapps">
                Front End Challenges
              </a>
              <a className="drop-items" href="/reactapps">
                React Applications
              </a>
              <a className="drop-items" href="/games">
                Games
              </a>
            </div>
          </a>
          <div id="hamburger-menu">
            <FontAwesomeIcon
              onClick={this.showMenu}
              className="icon responsive"
              icon={faBars}
              size="2x"
              style={{ color: "#3a3664" }}
            />
            <div className={`menu ${this.state.classMenu}`}>
              <a className="menu-items" href="/home">
                Home
              </a>
              <a className="menu-items" href="/about">
                About me
              </a>
              <a className="menu-items" href="/resume">
                Resume
              </a>
              <a className="menu-items" href="/frontapps">
                Front End
              </a>
              <a className="menu-items" href="/reactapps">
                React Apps
              </a>
              <a className="menu-items" href="/games">
                Games
              </a>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Nav;
