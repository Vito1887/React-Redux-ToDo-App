import { PostItem } from 'src/components/molecules/PostItem';

import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import styles from './styles.module.css';

export const PostList = ({ posts, title, update, remove }) => {
  if (!posts.length) {
    return (
      <h1 className={styles.title}>
        Заметки были удалены либо ничего не найдено🤷‍♀️
      </h1>
    );
  }

  return (
    <div>
      <h1 className={styles.title}>{title}</h1>

      <TransitionGroup>
        {(posts || [])?.map((post, index) => (
          <CSSTransition key={post.id} timeout={500} classNames="post">
            <PostItem
              update={update}
              remove={remove}
              number={index + 1}
              post={post}
            />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  );
};
