import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import CommentDetail from "./comments/CommentDetail";
import GeoLocation from "./geolocation/GeoLocation";
import SearchBar from "./search/SearchBar";

class App extends React.Component {
  constructor(props) {
    console.log("Inside App constructor");
    super(props);
  }
  render() {
    console.log("Inside App render");
    return (
      <div className="ui grid">
        <div className="four wide column">
          <div className="ui vertical fluid tabular menu">
            <a href="/" className="active item">
              Home
            </a>
            <a href="/comments" className="item">
              Comments
            </a>
            <a href="/geolocation" className="item">
              Geolocation
            </a>
            <a href="/images" className="item">
              Images
            </a>
          </div>
        </div>
        <div className="twelve wide stretched column">
          <div className="ui segment">
            <Router>
              <Route
                exact
                path="/comments"
                render={props => (
                  <CommentDetail
                    {...props}
                    name="Elliot"
                    timeAgo="Just now"
                    comment="How artistic!"
                  />
                )}
              />
              <Route exact path="/geolocation" component={GeoLocation} />
              <Route exact path="/images" component={SearchBar} />
            </Router>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
