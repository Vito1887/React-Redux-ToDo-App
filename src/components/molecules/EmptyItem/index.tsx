import { Button } from 'src/components/atoms/buttons/Button';
import { PostForm } from 'src/components/organisms/forms/PostForm';
import { CreatePost } from 'src/components/routes/modals/CreatePost';
import { Post } from 'src/types.ts';

import React from 'react';

import styles from './styles.module.css';

type Props = {
  create: (post: Post) => void;
  modal: boolean;
  setModal: (modal: boolean) => void;
};

export const EmptyItem: React.FC<Props> = ({
  create,
  modal = false,
  setModal,
}) => (
  <div className={styles.container}>
    <Button style={styles.button} onClick={() => setModal(true)}>
      ➕ Добавить заметку
    </Button>

    <CreatePost visible={modal} setVisible={setModal}>
      <PostForm update={create} setModal={setModal} />
    </CreatePost>
  </div>
);
