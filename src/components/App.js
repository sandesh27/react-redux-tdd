import React from "react";
import CommentDetail from "./comments/CommentDetail";

const App = () => {
  return (
    <div>
      <CommentDetail
        name="Sandy"
        timeAgo="2 days ago"
        comment="How artistic!"
      />
      <CommentDetail
        name="Jenny"
        timeAgo="Just now"
        comment="Elliot you are always so right :)"
      />
    </div>
  );
};

export default App;
