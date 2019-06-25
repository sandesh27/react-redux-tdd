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
  }

  getLocationInfo() {
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

  componentWillMount() {
    this.getLocationInfo();
    console.log("Inside GeoLocation => componentWillMount");
  }

  componentDidMount() {
    console.log("Inside GeoLocation => componentDidMount");
  }

  componentWillUpdate() {
    console.log("Inside GeoLocation => componentWillUpdate");
  }

  componentDidUpdate() {
    console.log("Inside GeoLocation => componentDidUpdate");
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
