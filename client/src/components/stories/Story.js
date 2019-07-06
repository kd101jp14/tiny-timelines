import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Story.css";

class Story extends Component {
  render() {
    return (
      <div className="story-container">
        <div className="date-container">
          <span>Created on: {this.props.date}</span>
        </div>
        <div className="content-container">
          {this.props.content}
        </div>
      </div>
    );
  }
}

Story.propTypes = {
  story: PropTypes.object.isRequired
};

export default Story;
