import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import { submitForm } from "../../actions/formActions";
import Tracker from "../trackers/Trackers";
import TwoColumnLayout from "../layout/TwoColumn";
import TitleSection from "../layout/TitleSection";
import StoryForm from "../forms/StoryForm";
import "./Dashboard.css";

class Dashboard extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };


  submit = (inputVal) => {
    console.log("Auth State", this.props.auth);
    this.props.submitForm(inputVal, this.props.auth.user);
  }

  render() {
    const { user } = this.props.auth;
    console.log(user);
    return (
      <div>
        <TwoColumnLayout>
          <TitleSection title={"Hello, " + user.firstName.split(" ")[0] + "!"} />
          <TitleSection
            title={"What's new with " + user.babyName.split(" ")[0] + "?"}
          >
            <StoryForm onSubmit={this.submit} />
          </TitleSection>
          <div className="row">
            <div className="col s12 center-align blue-grey-text text-darken-4">
              <button
                style={{
                  width: "150px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px",
                  marginTop: "1rem"
                }}
                onClick={this.onLogoutClick}
                className="btn btn-large waves-effect waves-light hoverable blue accent-3"
              >
                Logout
              </button>
            </div>
          </div>
        </TwoColumnLayout>
      </div>
    );
  }
}

Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

const mapDispatchToProps = dispatch => {
  return {
    logoutUser: () => dispatch(logoutUser()),
    submitForm: (story, user, date) => dispatch(submitForm(story, user.email, date))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
  //{ logoutUser }
)(Dashboard);
