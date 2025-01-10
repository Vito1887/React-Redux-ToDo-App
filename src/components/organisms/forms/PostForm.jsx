import React, { useState } from "react";
import { Input } from "src/components/atoms/Input";
import { Button } from "src/components/atoms/buttons/Button";

export const PostForm = ({ update, setModal }) => {
  const [post, setPost] = useState({ title: "", body: "" });

  const updatePost = (e) => {
    e.preventDefault();

    const newPost = {
      ...post,
      id: Date.now(),
    };

    update(newPost);

    setPost({ title: "", body: "" });

    setModal(false);
  };

  return (
    <form>
      <Input
        value={post.title}
        onChange={(e) => setPost({ ...post, title: e.target.value })}
        type="text"
        placeholder="Название поста"
      />

      <Input
        value={post.body}
        onChange={(e) => setPost({ ...post, body: e.target.value })}
        type="text"
        placeholder="Описание поста"
      />

      <Button onClick={updatePost}>Сохранить</Button>
    </form>
  );
};
