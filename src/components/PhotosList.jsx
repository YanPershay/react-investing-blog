import React from "react";
import PhotoItem from "./PhotoItem";

const PhotosList = ({ photos, title, openModal }) => {
  if (!photos.length) {
    return <h1>No photos</h1>;
  }

  return (
    <div>
      <h1>{title}</h1>
      {photos.map((ph, index) => (
        <PhotoItem
          photo={ph}
          key={ph.id}
          number={index + 1}
          openModal={openModal}
        />
      ))}
    </div>
  );
};

export default PhotosList;
