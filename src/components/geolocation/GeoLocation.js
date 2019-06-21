import React from "react";
import DisplayGeoInfo from "./DisplayGeoInfo";

class GeoLocation extends React.Component {
  constructor(props) {
    console.log("Inside GeoLocation constructor");
    super(props);
    this.state = {
      latitude: null,
      longitude: null
    };

    window.navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        });
      },
      error => {
        console.log(error);
      }
    );
  }
  render() {
    console.log("Inside GeoLocation render");
    return (
      <div className="ui comments">
        <h3 className="ui dividing header">GeoLocation Details: </h3>
        <DisplayGeoInfo
          latitude={this.state.latitude}
          longitude={this.state.longitude}
        />
      </div>
    );
  }
}

export default GeoLocation;
