import React from "react";
import cl from "./styles.module.css";

export const CreatePost = ({ children, visible, setVisible }) => {
  const rootClasses = [cl.modal];

  if (visible) {
    rootClasses.push(cl.active);
  }

  return (
    <div className={rootClasses.join(" ")} onClick={() => setVisible(false)}>
      <div className={cl.content} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};
