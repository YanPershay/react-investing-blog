import React from "react";
import "../styles/PostItem.css";
import CustomButton from "./UI/button/CustomButton";
import { useNavigate } from 'react-router-dom'

const PostItem = (props) => {
  const navigate = useNavigate()
  return (
    <div className="post">
      <div>
        <strong>
          {props.post.id}. {props.post.title}
        </strong>
        <div>{props.post.body}</div>
      </div>
      <div className="postBtns">
        <CustomButton onClick={() => navigate(`/posts/${props.post.id}`)}>
          Open
        </CustomButton>
        <CustomButton onClick={() => props.remove(props.post)}>
          Remove
        </CustomButton>
      </div>
    </div>
  );
};

export default PostItem;
