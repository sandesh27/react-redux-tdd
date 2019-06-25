import React, { Component } from "react";
import { getImageApiInstance } from "../../utils";
import ImageList from "../imagelist/ImageList";
import { PEXELS_PER_PAGE_IMAGES } from "../../constants";
import "./SearchBar.css";

export default class SearchBar extends Component {
  state = {
    api_result: "",
    photos: []
  };

  updateSearchQuery = e => {
    this.setState({ searchQuery: e.target.value });
  };

  onSearchSubmitted = e => {
    e.preventDefault();
    const axiosInstance = getImageApiInstance();
    const searchQuery = `search?query=${
      this.state.searchQuery
    }&per_page=${PEXELS_PER_PAGE_IMAGES}&page=1`;

    axiosInstance
      .get(searchQuery)
      .then(response => {
        // handle success
        response.data.photos.length > 0
          ? this.setState({
              api_result: "success",
              photos: response.data.photos
            })
          : this.setState({
              api_result: "blank"
            });
      })
      .catch(error => {
        // handle error
        this.setState({
          api_result: "error"
        });
        console.log(error);
      });
  };

  render() {
    return (
      <div className="ui form">
        <form className="ui form">
          <div className="field">
            <h3 className="ui dividing header">Search Images: </h3>
            <input
              type="text"
              name="search"
              placeholder="Search Image"
              onChange={this.updateSearchQuery}
            />
          </div>
          <button
            className="ui button"
            type="submit"
            onClick={this.onSearchSubmitted}
          >
            Submit
          </button>
        </form>
        <ImageList
          photos={this.state.photos}
          api_result={this.state.api_result}
        />
      </div>
    );
  }
}
