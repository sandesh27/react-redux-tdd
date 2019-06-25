import React from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
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
          <div className="four wide column">
            <div className="ui vertical fluid tabular menu">
              <NavLink to="/comments" className="item">
                Comments
              </NavLink>
              <NavLink to="/geolocation" className="item">
                Geolocation
              </NavLink>
              <NavLink to="/images" className="item">
                Images
              </NavLink>
            </div>
          </div>
          <div className="twelve wide stretched column">
            <div className="ui segment">
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
            </div>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
