import React from "react";
import "../styles/PostItem.css";

const PostItem = (props) => {
  return (
    <div className="post">
      <div className="post-content">
        <strong>
          {props.post.id}. {props.post.title}
        </strong>
        <div>{props.post.text}</div>
      </div>
      <div className="post-btns">
        <button>Remove</button>
      </div>
    </div>
  );
};

export default PostItem;
