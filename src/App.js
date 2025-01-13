import React, { useState } from "react";
import { PostList } from "src/components/molecules/PostList";
import { Button } from "src/components/atoms/buttons/Button";
import { PostForm } from "src/components/organisms/forms/PostForm";
import { PostFilter } from "src/components/molecules/PostFilter";
import { CreatePost } from "src/components/routes/modals/CreatePost";
import { usePosts } from "src/hooks/usePosts";
import { EmptyItem } from "src/components/molecules/EmptyItem";
import { useDispatch, useSelector } from "react-redux";
import {
  addItem,
  clearItems,
  removeItem,
  updateItem,
} from "src/redux/reducers/posts";

import "./styles/App.css";

function App() {
  const dispatch = useDispatch();

  const { items, totalCount } = useSelector((state) => state.posts);

  const posts = items || [];

  const [filter, setFilter] = useState({ sort: "", query: "" });

  const [modal, setModal] = useState(false);

  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

  const createPost = (newPost) => {
    const updatingPosts = [...posts, newPost];

    dispatch(addItem(updatingPosts));

    setModal(false);
  };

  const updatePost = (post) => {
    dispatch(updateItem(post));

    setModal(false);
  };

  const removePost = (id) => dispatch(removeItem(id));

  const clearAll = () => dispatch(clearItems());

  return (
    <div className="App">
      <div className="header">
        <Button onClick={() => setModal(true)}>Добавить заметку</Button>

        <Button onClick={clearAll}>Очистить все</Button>

        <h4>Всего заметок: {totalCount}</h4>
      </div>

      <hr className="hr" />

      <PostFilter filter={filter} setFilter={setFilter} />

      <PostList
        update={updatePost}
        remove={removePost}
        posts={sortedAndSearchedPosts}
        title="Мои заметки"
      />

      <div className="footer">
        <EmptyItem create={createPost} setModal={setModal} />
      </div>

      <CreatePost visible={modal} setVisible={setModal}>
        <PostForm update={createPost} setModal={setModal} />
      </CreatePost>
    </div>
  );
}

export default App;
