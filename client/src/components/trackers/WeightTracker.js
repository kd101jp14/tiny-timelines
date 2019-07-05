import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import { getWeights } from "../../actions/trackerActions";
import "./WeightTracker.css";
// import { Line, defaults } from "react-chartjs-2";
import TwoColumnLayout from "../layout/TwoColumn";
import TitleSection from "../layout/TitleSection";

// defaults.global.maintainAspectRatio = false

class Weights extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

  componentDidMount() {
    const { user } = this.props.auth;
    this.props.getWeights(user.email);
  }

  render() {
    const { user } = this.props.auth;
    console.log(user);
    console.log("weights: ", this.props.weights);

    return (
      <div>
        <TwoColumnLayout>
          <TitleSection
            title={"Here are " + user.babyName.split(" ")[0] + "'s weights!"}
          />
          {this.props.weights.weights.map(weight => {
            return (
              <div
                className="weights-container"
                style={{
                  backgroundColor: "rgba(77, 182, 172, 0.5)",
                  color: "rgba(1, 55, 105, 1)"
                }}
              >
                <div>
                  <p>
                    {weight.weight}
                    {<br />}
                    {"Created on: "}
                    {weight.date}
                  </p>
                </div>
              </div>
            );
          })}
        </TwoColumnLayout>
      </div>
    );
  }
}

Weights.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  weights: state.weights
});

const mapDispatchToProps = dispatch => {
  return {
    logoutUser: () => dispatch(logoutUser()),
    getWeights: userEmail => dispatch(getWeights(userEmail))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  // { logoutUser }
)(Weights);
