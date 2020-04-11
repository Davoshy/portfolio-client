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
    console.log(this.state.classContact);
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
        <nav>
          <div>
            <div className="logo"></div>
            <span>Portfolio Page</span>
          </div>
          <div className="nav-pages">
            <a href="/">Home</a>
            <a href="/about">About Me</a>
            <a href="/resume">Resume</a>
            <a href="/contact">Contact</a>
            <a href="/projects">Projects</a>
          </div>
        </nav>
        <div className="body">
          <header className="showcase">
            <button onClick={this.showContact} id="btn-contact">
              {" "}
              Contact Me
            </button>
            <div className={`contact-form fadeIn ${this.state.classContact}`}>
              <div className="contact-info">
                <h3>Contact Me </h3>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatem nesciunt commodi quidem quam iste eos illo molestias,
                sit, ut at officiis qui! Rerum, atque? Vel iste, expedita
                impedit minima asperiores, similique illo ducimus, nemo aut
                atque voluptates distinctio iusto consequuntur.
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
            <div className={`project-form ${this.state.classProjects}`}>
              <div>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Accusantium, tenetur, deserunt. Dignissimos dolores ut tenetur
                enim ipsum, deleniti autem temporibus quos numquam, nihil
                commodi. Magni animi modi eos quaerat nulla, est, odit similique
                commodi maxime at, nesciunt, vel delectus libero!
              </div>
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
