import React, { useState, useRef } from "react";
import CustomButton from "./UI/button/CustomButton";
import CustomInput from "./UI/input/CustomInput";

const NewPostForm = () => {
  const [title, setTitle] = useState("");
  const textInputRef = useRef();

  const addNewPost = (e) => {
    e.preventDefault();
    console.log(title);
    console.log(textInputRef.current.value);
  };

  return (
    <div>
      <CustomInput
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        type="text"
        placeholder="Enter title..."
      />
      <CustomInput ref={textInputRef} type="text" placeholder="Enter text..." />
      <CustomButton onClick={addNewPost}>Create</CustomButton>
    </div>
  );
};

export default NewPostForm;
