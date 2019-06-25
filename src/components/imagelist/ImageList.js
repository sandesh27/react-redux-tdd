import React, { Component } from "react";
import ImageItem from "./ImageItem";

export default class ImageList extends Component {
  showImages = () => {
    const imageItems = this.props.photos.map(photo => {
      return <ImageItem photo={photo} key={photo.id} />;
    });
    return imageItems;
  };

  render() {
    return <div className="ui items">{this.showImages()}</div>;
  }
}
