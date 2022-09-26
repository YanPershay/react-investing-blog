import React from "react";
import CustomImage from "./UI/image/CustomImage";
import classes from "../styles/PhotoItem.module.css";

const PhotoItem = (props) => {
  return (
    <div className={classes.photoItem}>
      {/* TODO: CSS styles */}
      <div onClick={() => props.openModal(props.photo)}>
        <CustomImage url={props.photo.thumbnailUrl} />
      </div>
      <div>
        {props.photo.id}. {props.photo.title}
      </div>
    </div>
  );
};

export default PhotoItem;
