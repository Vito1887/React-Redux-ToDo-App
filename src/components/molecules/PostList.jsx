import React from "react";
import { PostItem } from "src/components/molecules/PostItem";
import { CSSTransition, TransitionGroup } from "react-transition-group";

export const PostList = ({ posts, title, remove }) => {
  if (!posts.length) {
    return (
      <h1 style={{ textAlign: "center" }}>
        Заметки были удалены либо ничего не найдено🤷‍♀️
      </h1>
    );
  }

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>{title}</h1>

      <TransitionGroup>
        {posts?.map((post, index) => (
          <CSSTransition key={post.id} timeout={500} classNames="post">
            <PostItem remove={remove} number={index + 1} post={post} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  );
};
