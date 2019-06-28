import React, { Component } from "react";
import PropTypes from "prop-types";
import ImageUploader from 'react-images-upload';

class ImageUpload extends Component {

    constructor(props){
        super(props);

        this.state= {
            pictures: []
        }
    }

    onImageChange = picture => {
        console.log("Picture", picture);
        this.setState({pictures: picture})
    }

    postPictures = () => {
        console.log("Clicked!", this.state.pictures);
        this.props.onSubmit(this.state.pictures);
        // Clear out pictures right after being submitted
        this.setState({ pictures: [] });
    }

  render() {
    return (
      <div className="image-upload-container">
          <ImageUploader
                withIcon={true}
                buttonText='Choose images'
                onChange={this.onImageChange}
                withPreview={true}
                imgExtension={['.jpg', '.gif', '.png', '.jpeg']}
                maxFileSize={5242880}
            />

            <div>
                <button className="btn" onClick={this.postPictures}>
                    Submit
                </button>
            </div>
      </div>
    );
  }
}

ImageUpload.propTypes = {
    onSubmit: PropTypes.func.isRequired
};

export default ImageUpload;
