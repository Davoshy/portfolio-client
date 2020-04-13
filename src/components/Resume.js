import React from "react";
import PropTypes from "prop-types";
import Nav from "./Nav";

class Resume extends React.Component {
  render() {
    return (
      <>
        <Nav />
        <div className="resume-container">
          <iframe
            allowFullScreen="true"
            src="https://res.cloudinary.com/ddsum0sbh/image/upload/v1586703215/Lebenslauf_David_Doan_2020_deutsch_zetwvo.pdf"
          ></iframe>
        </div>
      </>
    );
  }
}

export default Resume;
