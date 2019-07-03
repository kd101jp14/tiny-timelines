import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import { getStories } from "../../actions/storyActions";
import TwoColumnLayout from "../layout/TwoColumn";
import TitleSection from "../layout/TitleSection";

class Stories extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

  componentDidMount() {
    const { user } = this.props.auth;
    this.props.getStories(user.email);
  }

  renderStories = stories => {
    let storiesElement = [];
    for (let i = 0; i < stories.length; i++) {
      storiesElement.push(
        <div>
          {stories[i].content} - {stories[i].createDate}
        </div>
      );
    }
  };

  render() {
    const { user } = this.props.auth;
    // console.log(user);
    // console.log("stories: ", this.props.stories);
    return (
      <div>
        <TwoColumnLayout>
          <TitleSection
            title={"Here are " + user.babyName.split(" ")[0] + "'s stories!"}
          />
          {this.renderStories(this.props.stories)}
          {this.props.stories.stories.reverse().map(story => {
            return (
              <div
                className="stories-container"
                style={{
                  backgroundColor: "rgba(77, 182, 172, 0.5)",
                  color: "rgba(1, 55, 105, 1)"
                }}
              >
                <div>
                  <p>
                    {story.content}
                    {<br />}
                    {"Created on: "}
                    {story.createDate}
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
