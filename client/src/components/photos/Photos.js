import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import axios from "axios";
import $ from "jquery";
import TwoColumnLayout from "../layout/TwoColumn";
import TitleSection from "../layout/TitleSection";
import { logoutUser } from "../../actions/authActions";
import {gettingPictures} from "../../actions/photoActions";
import "./Photos.css";

class Photos extends Component {
  componentDidMount(){
    this.props.getPhotos(this.props.auth.user.email);
  }

  render() {
    const { user } = this.props.auth;
    console.log("Photos", this.props.photos);
    return (
      <div className="photos-container">
        <TwoColumnLayout>
          <TitleSection
            title={"Here are " + user.babyName.split(" ")[0] + "'s photos!"}
          />

          {this.props.photos.results.map((item, index) => {
            return (
              <img src={item.url} key={index} />
            )
          })}
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
  photos: state.photos
});

const mapDispatchToProps = dispatch => {
  return {
    logoutUser: () => dispatch(logoutUser()),
    getPhotos: (userEmail) => dispatch(gettingPictures(userEmail))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
  //{ logoutUser }
)(Photos);
