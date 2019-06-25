import React, { Component } from "react";
import { HREF_LINK } from "../../constants";
import ImageDetails from "./ImageDetails";

export default class ImageItem extends Component {
  showImage = imageId => {
    console.log("imageId: ", imageId);
    // this.props.history.push(`images/${imageId}`);
    return <ImageDetails />;
  };

  render() {
    const { photo } = this.props;
    return (
      <div className="column">
        <a href={HREF_LINK} className="ui image">
          <img alt="" src={photo.src.large} />
        </a>
        <div className="content">
          <a href={HREF_LINK} className="header">
            {photo.photographer}
          </a>
          <div className="description">
            <p>{photo.id}</p>
            <div
              className="ui button green"
              onClick={() => {
                this.showImage(photo.id);
              }}
            >
              Show
            </div>
          </div>
        </div>
      </div>
    );
  }
}
