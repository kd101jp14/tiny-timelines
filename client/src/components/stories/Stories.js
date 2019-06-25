import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import { getStories } from "../../actions/storyActions";
import TwoColumnLayout from "../layout/TwoColumn";
import TitleSection from "../layout/TitleSection";
import StoryForm from "../forms/StoryForm";

class Stories extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

  componentDidMount() {
    const { user } = this.props.auth;
    this.props.getStories(user.email);
  }

  renderStories = (stories) => {
    let storiesElement = [];
    for(let i = 0; i < stories.length; i ++){
      storiesElement.push(<div>{stories[i].content} - {stories[i].createDate}</div>)
    }
  }

  render() {
    const { user } = this.props.auth;
    console.log(user);
    console.log("stories: ", this.props.stories);
    return (
      <div>
        <TwoColumnLayout>
          <TitleSection title={"Hello," + user.firstName.split(" ")[0] + "!"} />
          <TitleSection
            title={"How's little" + user.babyName.split(" ")[0] + "?"}
          >
            <StoryForm onSubmit={this.submit} />
          </TitleSection>
          {this.renderStories(this.props.stories)}
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
    getStories: (userEmail) => dispatch(getStories(userEmail))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
  //{ logoutUser }
)(Stories);
