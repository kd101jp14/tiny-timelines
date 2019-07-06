import React, { Component } from "react";
import AsideNav from "./AsideNav";
import "./TwoColumn.css";

class TwoColumnLayout extends Component {
  render() {
    return (
      <div className="two-column-container">
        <div className="left-column">
          <AsideNav />
        </div>
        <div className="right-column">{this.props.children}</div>
      </div>
    );
  }
}

export default TwoColumnLayout;
