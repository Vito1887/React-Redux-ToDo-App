import { Box } from 'src/components/atoms/Box';

import classNames from 'classnames';
import React from 'react';

import styles from './styles.module.css';

type Props = {
  children: React.ReactNode;
  visible: boolean;
  setVisible: (visible: boolean) => void;
};

export const CreatePost: React.FC<Props> = ({
  children,
  visible,
  setVisible,
}) => {
  return (
    <Box
      onClick={() => setVisible(false)}
      visible={visible}
      className={classNames(styles.modal, {
        [styles.active]: visible,
      })}
    >
      <div className={styles.content} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </Box>
  );
};
