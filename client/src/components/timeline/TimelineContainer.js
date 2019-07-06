import React, { Component } from "react";
import PropTypes from "prop-types";
import TimelineItem from "./TimelineItem"
import "./Timeline.css";

class Timeline extends Component {
  render() {
    if (this.props.data.length === 0) {
      return null;
    }

    return (
      <div className="timeline-container">
        {this.props.data.map((entry, idx) => (
          <TimelineItem date={entry.date} text={entry.text} key={idx} />
        ))}
      </div>
    );
  }
}

Timeline.propTypes = {
  data: PropTypes.array.isRequired
};

export default Timeline;
