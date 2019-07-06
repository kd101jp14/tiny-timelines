import React, { Component } from "react";
import PropTypes from "prop-types";

class TimelineItem extends Component {
  render() {
    return (
      <div className="timeline-item">
        <div className="timeline-item-content">
          <time>{this.props.date}</time>
          <p>{this.props.text}</p>
          <span className="circle" />
        </div>
      </div>
    );
  }
}

TimelineItem.propTypes = {
  date: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};

export default TimelineItem;