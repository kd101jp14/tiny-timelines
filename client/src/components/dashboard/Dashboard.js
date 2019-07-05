import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import { submitForm } from "../../actions/formActions";
import { submitWeight } from "../../actions/weightActions";
import Tracker from "../trackers/WeightTracker";
import TwoColumnLayout from "../layout/TwoColumn";
import TitleSection from "../layout/TitleSection";
import StoryForm from "../forms/StoryForm";
import ImageUpload from "../imageUpload/imageUpload";
import WeightEntry from "../weightEntry/WeightEntry";
import S3 from "aws-s3";
import * as Keys from "../../keys";
import { postingPictures } from "../../actions/photoActions";
import axios from "axios";

class Dashboard extends Component {
  state = {
    AWS_BUCKET_ID: "",
    AWS_BUCKET_NAME: "",
    AWS_BUCKET_REGION: "",
    AWS_BUCKET_SECRET_KEY: ""
  };

  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

  getKeys = () => {
    axios.get("/api/photos/keys").then(res => {
      const keys = res.data[0];
      this.setState({
        AWS_BUCKET_ID: keys.AWS_BUCKET_ID,
        AWS_BUCKET_NAME: keys.AWS_BUCKET_NAME,
        AWS_BUCKET_REGION: keys.AWS_BUCKET_REGION,
        AWS_BUCKET_SECRET_KEY: keys.AWS_BUCKET_SECRET_KEY
      });
    });
  };

  componentDidMount() {
    this.getKeys();
  }

  storySubmit = inputVal => {
    console.log("Auth State", this.props.auth);
    this.props.submitForm(inputVal, this.props.auth.user);
  };

  weightSubmit = weightVal => {
    console.log("Weight submitted!");
    this.props.submitWeight(weightVal, this.props.auth.user);
  };

  pictureSubmit = pictures => {
    console.log("Dashboard callback", pictures);
    // this.props.postingPictures(pictures, this.props.auth.user);

    const config = {
      bucketName: this.state.AWS_BUCKET_NAME,
      // Photos are stored in folders that are distingished by email
      dirName: this.props.auth.user.email,
      region: this.state.AWS_BUCKET_REGION,
      accessKeyId: this.state.AWS_BUCKET_ID,
      secretAccessKey: this.state.AWS_BUCKET_SECRET_KEY
    };

    const S3Client = new S3(config);

    for (let i = 0; i < pictures.length; i++) {
      S3Client.uploadFile(pictures[i])
        .then(data => {
          console.log("data!", data);
          // data.location
        })
        .catch(err => console.error("error!", err));
    }
  };

  render() {
    const { user } = this.props.auth;
    console.log(user);
    return (
      <div>
        <TwoColumnLayout>
          <TitleSection
            title={"Welcome, " + user.firstName.split(" ")[0] + "!"}
          />
          <TitleSection
            title={"What's new with " + user.babyName.split(" ")[0] + "?"}
          >
            <StoryForm onSubmit={this.storySubmit} />
          </TitleSection>

          <TitleSection title="Photo Upload">
            <ImageUpload onSubmit={this.pictureSubmit} />
          </TitleSection>

          <TitleSection title="Weight Entry">
            <WeightEntry onSubmit={this.weightSubmit} />
          </TitleSection>
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
    submitForm: (story, user, date) =>
      dispatch(submitForm(story, user.email, date)),
    submitWeight: (weight, user, date) =>
      dispatch(submitWeight(weight, user.email, date))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
  //{ logoutUser }
)(Dashboard);
