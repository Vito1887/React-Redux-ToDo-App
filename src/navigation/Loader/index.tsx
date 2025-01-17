import Spin from 'antd/lib/spin';
import React from 'react';

import styles from './styles.module.css';

export const Loader: React.FC = () => (
  <div className={styles.loader}>
    <Spin />
  </div>
);
