import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import axios from "axios";
import $ from "jquery";
import TwoColumnLayout from "../layout/TwoColumn";
import TitleSection from "../layout/TitleSection";
import { logoutUser } from "../../actions/authActions";

class Photos extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

  render() {
    const { user } = this.props.auth;
    return (
      <div>
        <TwoColumnLayout>
          <TitleSection
            title={"Here are " + user.babyName.split(" ")[0] + "'s photos!"}
          />
        </TwoColumnLayout>
      </div>
    );
  }
}

Photos.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  stories: state.stories
});

const mapDispatchToProps = dispatch => {
  return {
    logoutUser: () => dispatch(logoutUser())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
  //{ logoutUser }
)(Photos);
