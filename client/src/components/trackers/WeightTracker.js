import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import { getWeights } from "../../actions/trackerActions";
import "./WeightTracker.css";
import { Line, defaults } from "react-chartjs-2";
import TwoColumnLayout from "../layout/TwoColumn";
import TitleSection from "../layout/TitleSection";

defaults.global.maintainAspectRatio = false;

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

    const data = {
      labels: this.props.weights.weights.map(weight => {
        return weight.date;
      }),
      datasets: [
        {
          label: user.babyName.split(" ")[0] + "'s weight",
          data: this.props.weights.weights.map(weight => {
            return weight.weight;
          }),
          fill: false, // Don't fill area under the line
          borderColor: "rgba(237, 113, 138, 1)" // Line color
        }
      ]
    };

    return (
      <div>
        <TwoColumnLayout>
          <TitleSection
            title={user.babyName.split(" ")[0] + "'s growth over time"}
          />

          <div className="Chart">
            <article className="canvas-container">
              <Line data={data} height={500} />
            </article>
          </div>
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
  mapDispatchToProps
  // { logoutUser }
)(Weights);
