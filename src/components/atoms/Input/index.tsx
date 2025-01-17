import React from 'react';

import styles from './styles.module.css';

type Props = {
  type: React.HTMLInputTypeAttribute;
  value?: string;
  placeholder: string;
  onChange: (value: { target: { value: string } }) => void;
};

export const Input: React.FC<Props> = ({
  type,
  value = '',
  onChange,
  placeholder,
}) => (
  <input
    className={styles.input}
    type={type}
    value={value}
    onChange={onChange}
    placeholder={placeholder}
  />
);
