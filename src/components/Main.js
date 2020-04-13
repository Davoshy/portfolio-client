import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

//components
import Nav from "./Nav";

// Icons
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
  faProjectDiagram,
  faPhoneSquare,
  faEnvelope
} from "@fortawesome/free-solid-svg-icons";

class Main extends React.Component {
  state = {
    classContact: "",
    classProjects: ""
  };
  showContact = () => {
    if (this.state.classContact == "") {
      this.setState({
        classContact: "show"
      });
    } else {
      this.setState({
        classContact: ""
      });
    }
  };

  showProjects = () => {
    if (this.state.classProjects == "") {
      this.setState({
        classProjects: "show"
      });
    } else {
      this.setState({
        classProjects: ""
      });
    }
    console.log(this.state.classProjects);
  };
  render() {
    return (
      <>
        <Nav />
        <div className="body">
          <header className="showcase">
            <button onClick={this.showContact} id="btn-contact">
              Contact Me
            </button>
            <div className={`contact-form fadeIn ${this.state.classContact}`}>
              <div className="contact-info">
                <h3>Contact Me </h3>
                <FontAwesomeIcon
                  className="icon"
                  icon={faPhoneSquare}
                  size="2x"
                  style={{ color: "#3a3664" }}
                />
                <span>(+49) 1522 399 4176 </span>
                <br />
                <FontAwesomeIcon
                  className="icon"
                  icon={faEnvelope}
                  size="2x"
                  style={{ color: "#3a3664" }}
                />
                <span>david.doan1989@gmail.com </span>
                <br />
                <FontAwesomeIcon
                  className="icon"
                  icon={faLinkedin}
                  size="2x"
                  style={{ color: "#3a3664" }}
                />
                <span> linkedin.com/in/ddoan89/ </span>
              </div>
              <div className="bubble-arrow-border"></div>
              <div className="bubble-arrow"></div>
            </div>
            <div className="content">
              <img
                src="https://imagehost.imageupload.net/2020/03/30/logo_D_D.png"
                className="logo"
                alt="Media"
              />
              <div className="title">David Doan</div>
              <div className="text"> MERN Stack Web Developer</div>
              <div className="icons">
                <a href="https://www.linkedin.com/in/ddoan89/" target="_blank">
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
                <a href="/about">
                  <FontAwesomeIcon
                    className="icon"
                    icon={faClipboard}
                    size="2x"
                    style={{ color: "#3a3664" }}
                  />
                </a>
              </div>
            </div>
            <div className={`project-form ${this.state.classProjects}`}>
              <h3> Projects </h3>
              <a href="/frontapps" alt="front projects">
                {" "}
                Front End
              </a>
              <a href="/reactapps" alt="react projects">
                {" "}
                React Apps
              </a>
              <a href="/games" alt="game projects">
                {" "}
                Games
              </a>

              <div className="bubble-arrow-border"></div>
              <div className="bubble-arrow"></div>
            </div>
            <button onClick={this.showProjects} id="btn-projects">
              {" "}
              Projects{" "}
            </button>
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
          <footer className="center bg-dark">
            <p>David Doan &copy; 2020</p>
          </footer>
        </div>
      </>
    );
  }
}

export default Main;
