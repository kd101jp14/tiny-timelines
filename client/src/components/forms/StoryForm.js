import React, { Component } from "react";
import PropTypes from "prop-types";

class StoryForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputVal: ""
    };
  }

  valueChange = event => {
    this.setState({ inputVal: event.target.value });
  };

  submitForm = () => {
    console.log("Clicked!", this.state.inputVal);
    this.props.onSubmit(this.state.inputVal);
    this.setState({ inputVal: "" });
  };

  render() {
    return (
      <div className="story-form-container">
        <div>
          <input
            type="text"
            placeholder="Today..."
            onChange={this.valueChange}
            value={this.state.inputVal}
            style={{
              color: "rgba(1, 55, 105, 1)",
              fontSize: "20px"
            }}
          />
        </div>
        <div>
          <button className="btn" onClick={this.submitForm}>
            Submit
          </button>
        </div>
      </div>
    );
  }
}

StoryForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
};

export default StoryForm;
