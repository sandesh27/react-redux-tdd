import React from "react";
import "./CommentDetail.css";

const hrefLink = "#";

const CommentDetail = ({ name, timeAgo, comment }) => {
  return (
    <div className="ui comments">
      <h3 className="ui dividing header">Comments</h3>
      <div className="comment">
        <a href={hrefLink} className="avatar">
          <img alt="Test Logo" src="/images/avatar/small/matt.jpg" />
        </a>
        <div className="content">
          <a href={hrefLink} className="author">
            {name}
          </a>
          <div className="metadata">
            <span className="date">{timeAgo}</span>
          </div>
          <div className="text">{comment}</div>
          <div className="actions">
            <a href={hrefLink} className="reply">
              Reply
            </a>
          </div>
        </div>
        <div className="comments">
          <div className="comment">
            <a href={hrefLink} className="avatar">
              <img alt="Test Logo" src="/images/avatar/small/jenny.jpg" />
            </a>
            <div className="content">
              <a href={hrefLink} className="author">
                {name}
              </a>
              <div className="metadata">
                <span className="date">{timeAgo}</span>
              </div>
              <div className="text">{comment}</div>
              <div className="actions">
                <a href={hrefLink} className="reply">
                  Reply
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommentDetail;
