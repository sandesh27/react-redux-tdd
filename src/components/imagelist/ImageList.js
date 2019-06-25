import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import ImageItem from "./ImageItem";
import "./ImageList.css";

class ImageList extends Component {
  showImages = () => {
    const imageItems = this.props.photos.map(photo => {
      return <ImageItem photo={photo} key={photo.id} />;
    });
    return imageItems;
  };

  render() {
    return (
      <div className="ui five column grid">
        {this.props.api_result === "success"
          ? this.showImages()
          : this.props.api_result === "blank"
          ? "No results found!!"
          : ""}
      </div>
    );
  }
}

export default withRouter(ImageList);
