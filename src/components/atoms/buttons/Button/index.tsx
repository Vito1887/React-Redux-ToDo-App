import classNames from 'classnames';
import React from 'react';

import styles from './styles.module.css';

type Props = {
  children: React.ReactNode;
  onClick: () => void;
  style?: React.CSSProperties | string;
};

export const Button: React.FC<Props> = ({ children, onClick, style }) => (
  <button onClick={onClick} className={classNames(styles.button, style)}>
    {children}
  </button>
);
