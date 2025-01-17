import { Button } from 'src/components/atoms/buttons/Button';
import { EmptyItem } from 'src/components/molecules/EmptyItem';
import { PostFilter } from 'src/components/molecules/PostFilter';
import { PostList } from 'src/components/molecules/PostList';
import { PostForm } from 'src/components/organisms/forms/PostForm';
import { CreatePost } from 'src/components/routes/modals/CreatePost';
import { usePosts } from 'src/hooks/usePosts';
import { ReduxState } from 'src/redux/reducers';
import {
  addItem,
  clearItems,
  removeItem,
  updateItem,
} from 'src/redux/reducers/posts';
import 'src/styles/App.css';
import { Post } from 'src/types.ts';

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export const App: React.FC = () => {
  const dispatch = useDispatch();

  const { items, totalCount } = useSelector((state: ReduxState) => state.posts);

  const posts = items || [];

  const [filter, setFilter] = useState({ sort: '', query: '' });

  const [modal, setModal] = useState(false);

  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

  const createPost = (newPost: Post) => {
    const updatingPosts = [...posts, newPost];

    dispatch(addItem(updatingPosts));

    setModal(false);
  };

  const updatePost = (post: Post) => {
    dispatch(updateItem(post));

    setModal(false);
  };

  const removePost = (id?: number) => dispatch(removeItem(id));

  const clearAll = () => dispatch(clearItems());

  return (
    <div className="app" data-testid="page">
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
        <EmptyItem create={createPost} modal={modal} setModal={setModal} />
      </div>

      <CreatePost visible={modal} setVisible={setModal}>
        <PostForm update={createPost} setModal={setModal} />
      </CreatePost>
    </div>
  );
};
