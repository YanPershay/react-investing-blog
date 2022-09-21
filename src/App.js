import React, { useState } from "react";
import NewPostForm from "./components/NewPostForm";
import PostsList from "./components/PostsList";
import CustomSelect from "./components/UI/CustomSelect";
import "./styles/App.css";

function App() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "Brent has grown 21.09.2022",
      body: "Brent oil has grown 21.09.2022 after long failing. Now it has price 106 per bar.",
    },
    {
      id: 2,
      title: "Financial market still falling down",
      body: "Yan Pershay has a chance to buy shares on bears market.",
    },
  ]);

  const [selectedSort, setSelectedSort] = useState("");

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  const removePost = (selectedPost) => {
    setPosts(posts.filter((post) => post.id !== selectedPost.id));
  };

  const sortPosts = (sortType) => {
    setSelectedSort(sortType);
    setPosts([...posts].sort((a, b) => a[sortType].localeCompare(b[sortType])));
  };

  return (
    <div className="App">
      <NewPostForm create={createPost} />
      {/* TODO: Add margins via bootstrap */}
      <hr />
      <CustomSelect
        defaultOption="Sort by..."
        value={selectedSort}
        onChange={sortPosts}
        options={[
          { value: "title", name: "By title" },
          { value: "body", name: "By text" },
        ]}
      />
      {posts.length === 0 ? (
        <h1>No posts</h1>
      ) : (
        <PostsList remove={removePost} title={"Main news"} posts={posts} />
      )}
    </div>
  );
}

export default App;
