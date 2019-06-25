import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./TwoColumn.css";

class TwoColumnLayout extends Component {
  render() {
    return (
      <div className="two-column-container">
        <div className="left-column">
        <div className="col s6">
            <Link
              to="/dashboard"
              style={{
                width: "140px",
                borderRadius: "3px",
                letterSpacing: "1.5px"
              }}
              className="nav-btn btn btn-large waves-effect waves-light hoverable teal lighten-2"
            >
              Home
            </Link>
          </div>
          <div className="col s6">
            <Link
              to="/stories"
              style={{
                width: "140px",
                borderRadius: "3px",
                letterSpacing: "1.5px"
              }}
              className="nav-btn btn btn-large waves-effect waves-light hoverable teal lighten-2"
            >
              Stories
            </Link>
          </div>
          <div className="col s6">
            <Link
              to="/photos"
              style={{
                width: "140px",
                borderRadius: "3px",
                letterSpacing: "1.5px"
              }}
              className="nav-btn btn btn-large waves-effect waves-light hoverable teal lighten-2"
            >
              Photos
            </Link>
          </div>
          <div className="col s6">
            <Link
              to="/trackers"
              style={{
                width: "140px",
                borderRadius: "3px",
                letterSpacing: "1.5px"
              }}
              className="nav-btn btn btn-large waves-effect waves-light hoverable teal lighten-2"
            >
              Trackers
            </Link>
          </div>
        </div>
        <div className="right-column">{this.props.children}</div>
      </div>
    );
  }
}

export default TwoColumnLayout;
