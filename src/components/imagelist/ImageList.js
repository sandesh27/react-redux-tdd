<<<<<<< HEAD
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
=======
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
>>>>>>> 3873952ff84ed389af51cc2ad37060b888572b38
