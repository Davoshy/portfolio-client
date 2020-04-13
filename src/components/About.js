import React from "react";
import PropTypes from "prop-types";
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

class About extends React.Component {
  state = {
    language: "english",
    classGer: "",
    classEng: ""
  };
  getLanguage = e => {
    this.setState({
      language: e.target.value
    });
  };
  showResume = () => {
    if (this.state.language == "english") {
      this.setState({
        classEng: "show",
        classGer: ""
      });
    } else if (this.state.language == "deutsch") {
      this.setState({
        classEng: "",
        classGer: "show"
      });
    }
  };
  hideResume = () => {
    this.setState({
      classEng: "",
      classGer: ""
    });
  };
  render() {
    return (
      <>
        <Nav />
        <div className="about-container">
          <div className="profile-container">
            <div className="about-image"></div>
            <div id="about-contact">
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
            </div>
          </div>
          <div className="about-content">
            <h2> Allow me to introduce myself... </h2>
            <p>
              My Name is <b>David Doan</b> and I am from <b>Berlin, Germany</b>.
              I studied Civil Engineering and worked as a{" "}
              <b>Structural Engineer for 3 years</b>. I always had a passion for
              building things where I can use my creativity for design and my
              critical thinking for problem solving. Now I want to move away
              from building houses and bridges and rather be part of digital
              creation.
            </p>
            <p>
              In my freetime I tought myself the basics of programming with
              Python and then <b>Javascript</b>. After I realized that I found
              my passion with coding I decided to take it more serious by
              attempting a career-switch. I finished a{" "}
              <b>Full Stack Web Development Bootcamp</b> learning the MERN Stack
              (MongoDB, Express.js, React.js, Node.js). I am also interested in
              Data Science, Data Analysis, and Machine Learning.
            </p>
            <p>
              I am very curious about the business world and new technologies. I
              consider myself a Life-long-learner and get excited when I get the
              opportunity to learn something new. My dream is to be part of a
              Start Up to grow and learn the fastest way possible to eventually
              be an Entrepreneur myself.
            </p>
          </div>
        </div>
      </>
    );
  }
}

export default About;
