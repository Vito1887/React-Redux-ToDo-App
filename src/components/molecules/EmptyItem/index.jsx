import React, { useState } from "react";
import { PostForm } from "src/components/organisms/forms/PostForm";
import { CreatePost } from "src/components/routes/modals/CreatePost";

import styles from "./styles.module.css";
import { Button } from "src/components/atoms/buttons/Button";

export const EmptyItem = ({ create }) => {
  const [modal, setModal] = useState(false);

  return (
    <div className={styles.container}>
      <Button styles={styles.button} onClick={() => setModal(true)}>
        ➕ Добавить заметку
      </Button>

      <CreatePost visible={modal} setVisible={setModal}>
        <PostForm update={create} setModal={setModal} />
      </CreatePost>
    </div>
  );
};
