import { Input } from 'src/components/atoms/Input';
import { Button } from 'src/components/atoms/buttons/Button';

import React, { useState } from 'react';

export const PostForm = ({ update, setModal, isEdit, selectedPost }) => {
  const [post, setPost] = useState({
    title: selectedPost?.title || '',
    body: selectedPost?.body || '',
  });

  const updatePost = (e) => {
    e.preventDefault();

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
    <form>
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
    </form>
  );
};
