import React from "react";
// import { BrowserRouter as Router, Route } from "react-router-dom";
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
      // <div className="ui secondary  menu">
      //   <a href="/" className="active item">
      //     Home
      //   </a>
      //   <a href="/comments" className="item">
      //     Comments
      //   </a>
      //   <a href="/geolocation" className="item">
      //     Geolocation
      //   </a>
      //   <a href="images" className="item">
      //     Images
      //   </a>
      //   <div class="right menu">
      //     <div class="item">
      //       <div class="ui icon input">
      //         <input type="text" placeholder="Search..." />
      //         <i aria-hidden="true" class="search icon" />
      //       </div>
      //     </div>
      //     <a href="/" className="item" />
      //   </div>
      //   <Router>
      //     <div>
      //       <Route
      //         path="/comments"
      //         render={props => (
      //           <CommentDetail
      //             {...props}
      //             name="Elliot"
      //             timeAgo="Just now"
      //             comment="Elliot you are always so right :)"
      //           />
      //         )}
      //       />
      //       <Route path="/geolocation" component={GeoLocation} />
      //       <Route path="/images" component={SearchBar} />
      //     </div>
      //   </Router>
      // </div>
      <div>
        <CommentDetail
          name="Elliot"
          timeAgo="Just now"
          comment="Elliot you are always so right :)"
        />
        <GeoLocation />
        <SearchBar />
      </div>
    );
  }
}

export default App;
