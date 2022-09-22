import React from "react";
import classes from "./ModalWindow.module.css";

const ModalWindow = ({ children, visibility, setVisibility }) => {
  const rootClasses = [classes.modal];
  if (visibility) {
    rootClasses.push(classes.active);
  }

  return (
    <div className={rootClasses.join(" ")} onClick={() => setVisibility(false)}>
      <div className={classes.modalContent} onClick={(e) => e.stopPropagation()}>{children}</div>
    </div>
  );
};

export default ModalWindow;
