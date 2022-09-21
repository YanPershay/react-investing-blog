import React from "react";
import "../styles/PostItem.css";
import CustomButton from "./UI/button/CustomButton";

const PostItem = (props) => {
  return (
    <div className="post">
      <div className="post-content">
        <strong>
          {props.number}. {props.post.title}
        </strong>
        <div>{props.post.body}</div>
      </div>
      <div className="post-btns">
        <CustomButton onClick={() => props.remove(props.post)}>
          Remove
        </CustomButton>
      </div>
    </div>
  );
};

export default PostItem;
