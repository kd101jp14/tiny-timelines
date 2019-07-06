import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import { getStories } from "../../actions/storyActions";
import TwoColumnLayout from "../layout/TwoColumn";
import TitleSection from "../layout/TitleSection";
import Story from "./Story";
import Timeline from "../timeline/TimelineContainer";

class Stories extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

  componentDidMount() {
    const { user } = this.props.auth;
    this.props.getStories(user.email);
  }

  render() {
    const { user } = this.props.auth;
    console.log(user);
    console.log("stories: ", this.props.stories);

    if(this.props.stories === null 
      || this.props.stories.stories.length === 0){
      return null;
    }

    let timelineData = [];
    this.props.stories.stories.forEach(function(story){
      timelineData.push({
        date: story.createDate,
        text: story.content
      })
    });
    
    return (
      <div>
        <TwoColumnLayout>
          <TitleSection
            title={"Here are " + user.babyName.split(" ")[0] + "'s stories!"}
          />

          <Timeline data={timelineData} />
        </TwoColumnLayout>
      </div>
    );
  }
}

Stories.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  stories: state.stories
});

const mapDispatchToProps = dispatch => {
  return {
    logoutUser: () => dispatch(logoutUser()),
    getStories: userEmail => dispatch(getStories(userEmail))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
  //{ logoutUser }
)(Stories);
