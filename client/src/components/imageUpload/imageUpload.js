import React, { Component } from "react";
import PropTypes from "prop-types";
import ImageUploader from 'react-images-upload';

class ImageUpload extends Component {

    constructor(props){
        super(props);

        this.state= {
            photos: []
        }
    }

    onImageChange = photo => {
        console.log("photo", photo);
        this.setState({photos: photo})
    }

    postPhotos = () => {
        console.log("Clicked!", this.state.photos);
        this.props.onSubmit(this.state.photos);
        // Clear out photos right after being submitted
        // this.setState({ photos: [] });
        
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
                <button className="btn" onClick={this.postPhotos}>
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
