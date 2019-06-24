import React from "react";
import "./CommentDetail.css";
import { HREF_LINK } from "../../constants";

const CommentDetail = ({ name, timeAgo, comment }) => {
  return (
    <div className="ui comments">
      <h3 className="ui dividing header">Comments</h3>
      <div className="comment">
        <a href={HREF_LINK} className="avatar">
          <img alt="Test Logo" src="/images/avatar/small/matt.jpg" />
        </a>
        <div className="content">
          <a href={HREF_LINK} className="author">
            {name}
          </a>
          <div className="metadata">
            <span className="date">{timeAgo}</span>
          </div>
          <div className="text">{comment}</div>
          <div className="actions">
            <a href={HREF_LINK} className="reply">
              Reply
            </a>
          </div>
        </div>
        <div className="comments">
          <div className="comment">
            <a href={HREF_LINK} className="avatar">
              <img alt="Test Logo" src="/images/avatar/small/jenny.jpg" />
            </a>
            <div className="content">
              <a href={HREF_LINK} className="author">
                Jenny
              </a>
              <div className="metadata">
                <span className="date">2 mins ago</span>
              </div>
              <div className="text">{comment}</div>
              <div className="actions">
                <a href={HREF_LINK} className="reply">
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
