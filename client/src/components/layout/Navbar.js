import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <div className="navbar-fixed">
        <nav className="z-depth-0">
          <div className="nav-wrapper teal lighten-2">
            <Link
              to="/"
              style={{
                fontFamily: "monospace"
              }}
              className="col s5 brand-logo center white-text"
            >
              <i class="fas fa-baby-carriage"> Tiny Timelines </i>
            </Link>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;