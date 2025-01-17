import { Button } from 'src/components/atoms/buttons/Button';
import { PostForm } from 'src/components/organisms/forms/PostForm';
import { CreatePost } from 'src/components/routes/modals/CreatePost';
import { Post } from 'src/types.ts';

import React from 'react';

import styles from './styles.module.css';

type Props = {
  update: (post: Post) => void;
  remove: (postId?: number) => void;
  number: number;
  post: Post;
};

export const PostItem: React.FC<Props> = ({ update, remove, number, post }) => {
  const [modal, setModal] = React.useState(false);

  const onClickClear = () => {
    if (window.confirm('Вы действительно хотите удалить эту заметку?')) {
      remove(post?.id || 0);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.textBlock}>
        <p>
          {number || 0}. {post?.title || ''}
        </p>

        <p>{post?.body || ''}</p>
      </div>

      <div className={styles.buttonsBlock}>
        <Button onClick={() => setModal(true)}>Редактировать</Button>

        <Button onClick={onClickClear}>Удалить</Button>
      </div>

      <CreatePost visible={modal} setVisible={setModal}>
        <PostForm
          update={update}
          setModal={setModal}
          isEdit
          selectedPost={post}
        />
      </CreatePost>
    </div>
  );
};
