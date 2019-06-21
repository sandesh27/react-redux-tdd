import React from "react";
import CommentDetail from "./comments/CommentDetail";
import GeoLocation from "./geolocation/GeoLocation";

class App extends React.Component {
  constructor(props) {
    console.log("Inside App constructor");
    super(props);
  }
  render() {
    console.log("Inside App render");
    return (
      <div>
        <CommentDetail
          name="Elliot"
          timeAgo="Just now"
          comment="Elliot you are always so right :)"
        />
        <GeoLocation />
      </div>
    );
  }
}

export default App;
