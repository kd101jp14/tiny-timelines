import React, { Component } from "react";
import PropTypes from "prop-types";

class WeightEntry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weightData: [
        {
          weight: "",
          date: ""
        }
      ]
    };
  }

  updateWeight = event => {
    this.setState({ weight: event.target.value });
  };

  submitWeight = () => {
    console.log("Clicked!", this.state.weight);
    this.props.onSubmit(this.state.weight);
    this.setState({ weight: "" });
  };

  render() {
    return (
      <div className="weight-entry-container">
        <div>
          <input
            type="text"
            placeholder="Please enter decimal. Ex: 9.6 for 9lbs 6oz"
            onChange={this.updateWeight}
            value={this.state.weight}
            style={{
              color: "rgba(1, 55, 105, 1)",
              fontSize: "20px"
            }}
          />
        </div>
        <div>
          <button className="btn" onClick={this.submitWeight}>
            Submit
          </button>
        </div>
      </div>
    );
  }
}

WeightEntry.propTypes = {
  onSubmit: PropTypes.func.isRequired
};

export default WeightEntry;
