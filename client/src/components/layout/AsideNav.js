
import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./AsideNav.css";

class AsideNav extends Component {

  render() {
    return (
      <div className="aside-navigation-container">
          <div className="col s6">
            <Link
              to="/dashboard"
              className="nav-btn btn btn-large waves-effect waves-light hoverable teal lighten-2"
            >
              Home
            </Link>
          </div>
          <div className="col s6">
            <Link
              to="/stories"
              className="nav-btn btn btn-large waves-effect waves-light hoverable teal lighten-2"
            >
              Stories
            </Link>
          </div>
          <div className="col s6">
            <Link
              to="/photos"
              className="nav-btn btn btn-large waves-effect waves-light hoverable teal lighten-2"
            >
              Photos
            </Link>
          </div>
          <div className="col s6">
            <Link
              to="/weights"
              className="nav-btn btn btn-large waves-effect waves-light hoverable teal lighten-2"
            >
              Weights
            </Link>
          </div>
      </div>
    );
  }
}

AsideNav.propTypes = {
};

export default AsideNav;



