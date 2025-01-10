import React from "react";
import classes from "./styles.module.css";
import classNames from "classnames";

export const Button = ({ children, onClick, styles }) => (
  <button onClick={onClick} className={classNames(classes.button, styles)}>
    {children}
  </button>
);
