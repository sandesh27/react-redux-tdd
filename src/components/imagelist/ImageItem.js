import React, { Component } from "react";
import { HREF_LINK } from "../../constants";

export default class ImageItem extends Component {
  render() {
    return (
      <div className="item">
        <a href={HREF_LINK} className="ui tiny image">
          <img alt="" src={this.props.photo.src.small} />
        </a>
        <div className="content">
          <a href={HREF_LINK} className="header">
            {this.props.photo.photographer}
          </a>
          <div className="description">
            <p>{this.props.photo.id}</p>
          </div>
        </div>
      </div>
    );
  }
}
