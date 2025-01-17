import { Input } from 'src/components/atoms/Input';
import { Button } from 'src/components/atoms/buttons/Button';
import { Post } from 'src/types.ts';

import React, { useState } from 'react';

type Props = {
  update: (post: Post) => void;
  setModal: (modal: boolean) => void;
  isEdit?: boolean;
  selectedPost?: Post;
};

export const PostForm: React.FC<Props> = ({
  update,
  setModal,
  isEdit = false,
  selectedPost,
}) => {
  const [post, setPost] = useState({
    title: selectedPost?.title || '',
    body: selectedPost?.body || '',
  });

  const updatePost = () => {
    if (!isEdit) {
      const newPost = {
        ...post,
        id: Date.now(),
      };

      update(newPost);

      setPost({ title: '', body: '' });
    } else {
      update({ ...selectedPost, title: post?.title, body: post?.body });
    }

    setModal(false);
  };

  return (
    <>
      <Input
        value={post.title}
        onChange={(e) => setPost({ ...post, title: e.target.value })}
        type="text"
        placeholder="Название заметки"
      />

      <Input
        value={post.body}
        onChange={(e) => setPost({ ...post, body: e.target.value })}
        type="text"
        placeholder="Описание заметки"
      />

      <Button onClick={updatePost}>Сохранить</Button>
    </>
  );
};
