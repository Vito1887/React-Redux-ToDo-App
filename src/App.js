import React, { useState } from "react";
import "./styles/App.css";
import { PostList } from "src/components/molecules/PostList";
import { Button } from "src/components/atoms/buttons/Button";
import { PostForm } from "src/components/organisms/forms/PostForm";
import { PostFilter } from "src/components/molecules/PostFilter";
import { CreatePost } from "src/components/routes/modals/CreatePost";
import { usePosts } from "src/hooks/usePosts";
import { EmptyItem } from "src/components/molecules/EmptyItem";

function App() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "Купить молоко",
      body: "Потребуется 2 литра молока.",
    },
    {
      id: 2,
      title: "Купить муку",
      body: "Для приготовления яблочного пирога необходима мука (1 пачка).",
    },
    {
      id: 3,
      title: "Купить творог",
      body: "На завтрак.",
    },
    {
      id: 4,
      title: "Купить сметану и сахар",
      body: "Для творога.",
    },
  ]);

  const [filter, setFilter] = useState({ sort: "", query: "" });

  const [modal, setModal] = useState(false);

  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  };

  const removePost = (post) => {
    setPosts(posts?.filter((p) => p.id !== post.id));
  };

  return (
    <div className="App">
      <div style={{ marginTop: 30 }}>
        <Button onClick={() => setModal(true)}>Добавить заметку</Button>
      </div>

      <CreatePost visible={modal} setVisible={setModal}>
        <PostForm update={createPost} setModal={setModal} />
      </CreatePost>

      <hr style={{ margin: "15px 0" }} />

      <PostFilter filter={filter} setFilter={setFilter} />

      <PostList
        remove={removePost}
        posts={sortedAndSearchedPosts}
        title="Мои заметки"
      />

      <EmptyItem create={createPost} setModal={setModal} />
    </div>
  );
}

export default App;
