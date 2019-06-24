import React, { Component } from "react";
import { getImageApiInstance } from "../../utils";
import ImageList from "../imagelist/ImageList";

export default class SearchBar extends Component {
  state = {
    searchQuery: "",
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
    }&per_page=15&page=1`;

    axiosInstance
      .get(searchQuery)
      .then(response => {
        // handle success
        this.setState({
          photos: response.data.photos
        });
      })
      .catch(error => {
        // handle error
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
        <ImageList photos={this.state.photos} />
      </div>
    );
  }
}
