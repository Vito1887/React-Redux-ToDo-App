import React from "react";
import classes from "./styles.module.css";

export const Input = React.forwardRef((props, ref) => {
  return <input ref={ref} className={classes.input} {...props} />;
});
