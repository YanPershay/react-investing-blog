import React, { useState, useRef } from "react";
import CustomButton from "./UI/button/CustomButton";
import CustomInput from "./UI/input/CustomInput";

const NewPostForm = ({ create }) => {
  const [post, setPost] = useState({ title: "", body: "" });

  const addNewPost = (e) => {
    const newPost = {
      ...post,
      id: Date.now(),
    };
    create(newPost);
    setPost({ title: "", body: "" });
  };

  return (
    <div>
      <CustomInput
        value={post.title}
        onChange={(e) => setPost({ ...post, title: e.target.value })}
        type="text"
        placeholder="Enter title..."
      />
      <CustomInput
        value={post.body}
        type="text"
        onChange={(e) => setPost({ ...post, body: e.target.value })}
        placeholder="Enter text..."
      />
      <CustomButton onClick={addNewPost}>Create</CustomButton>
    </div>
  );
};

export default NewPostForm;
