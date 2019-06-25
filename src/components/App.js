import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./header/Header";
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
        <Router>
          <Header />
          <div className="twelve wide stretched column">
            <div className="ui segment">
              <Route
                exact
                path="/"
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
            </div>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
