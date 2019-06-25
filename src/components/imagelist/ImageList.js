import React, { Component } from "react";
import ImageItem from "./ImageItem";
import "./ImageList.css";

export default class ImageList extends Component {
  showImages = () => {
    const imageItems = this.props.photos.map(photo => {
      return <ImageItem photo={photo} key={photo.id} />;
    });
    return imageItems;
  };

  render() {
    return <div className="ui five column grid">{this.showImages()}</div>;
  }
}
