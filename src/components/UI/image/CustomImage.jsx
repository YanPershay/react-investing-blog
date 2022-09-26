import React from "react";
import classes from "./CustomImage.module.css";

const CustomImage = ({ url }) => {
  return (
    <div className={classes.image}>
      <img src={url} alt="Image issue" />
    </div>
  );
};

export default CustomImage;
