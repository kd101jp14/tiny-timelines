import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import { submitForm } from "../../actions/formActions";
import { postingPictures } from "../../actions/photoActions";
import { submitWeight } from "../../actions/weightActions";
import TwoColumnLayout from "../layout/TwoColumn";
import TitleSection from "../layout/TitleSection";
import StoryForm from "../forms/StoryForm";
import ImageUpload from "../imageUpload/imageUpload";
import WeightEntry from "../weightEntry/WeightEntry";
import moment from "moment";


class Dashboard extends Component {

  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

  componentDidMount() {
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


    let formData = new FormData()
    pictures.forEach((file, i) => {
      formData.append(i, file)
    });

    formData.append("EMAIL", this.props.auth.user.email)
    formData.append("date", moment());

    console.log("Form Data", formData);

    fetch(`http://localhost:5000/api/photos/post`, {
      method: 'POST',
      body: formData
    })
    .then(res => {
      return res.json();
    })
    .then(images => {
      console.log("Success 2", images);
    }).catch(err => {
      console.log("Error", err);
    });
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
