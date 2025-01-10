import React from "react";

export const Box = ({ children, className, visible = true }) =>
  visible ? <div className={className}>{children}</div> : null;
