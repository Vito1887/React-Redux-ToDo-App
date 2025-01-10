import React, { useState } from "react";
import { Button } from "src/components/atoms/buttons/Button";
import { Box } from "src/components/atoms/Box";
import { PostForm } from "src/components/organisms/forms/PostForm";
import { CreatePost } from "src/components/routes/modals/CreatePost";

import styles from "./styles.module.css";

export const PostItem = ({ remove, number, post }) => {
  const [modal, setModal] = useState(false);

  const onClickClear = () => {
    if (window.confirm("Вы действительно хотите удалить эту заметку?")) {
      remove(post);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.textBlock}>
        <p>
          {number || 0}. {post?.title || ""}
        </p>

        <p>{post?.body}</p>
      </div>

      <CreatePost visible={modal} setVisible={setModal}>
        <PostForm update={() => {}} />
      </CreatePost>

      <Box visible={!!remove} className={styles.buttonsBlock}>
        <Button onClick={setModal}>Редактировать</Button>

        <Button onClick={onClickClear}>Удалить</Button>
      </Box>
    </div>
  );
};
