import React, { Component } from "react";
import PropTypes from "prop-types";
import "./TitleSection.css";

class TitleSection extends Component {
  render() {
    return (
      <div className="title-section-container">
        <div className="title-container">
          <h5>{this.props.title}</h5>
        </div>
        <div className="content-container">
          {this.props.children}
        </div>
      </div>
    );
  }
}

TitleSection.propTypes = {
  title: PropTypes.string.isRequired
};

export default TitleSection;
