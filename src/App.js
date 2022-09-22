import React, { useEffect, useState } from "react";
import NewPostForm from "./components/NewPostForm";
import PostsFilter from "./components/PostsFilter";
import PostsList from "./components/PostsList";
import CustomButton from "./components/UI/button/CustomButton";
import ModalWindow from "./components/UI/modal/ModalWindow";
import { usePosts } from "./hooks/usePosts";
import PostService from "./api/PostService";
import "./styles/App.css";
import Spinner from "./components/UI/spinner/Spinner";

function App() {
  const [posts, setPosts] = useState("");
  const [filter, setFilter] = useState({ sort: "", query: "" });
  const [modal, setModal] = useState(false);
  const [isLoading, setLoading] = useState("false");

  const searchedAndSortedPosts = usePosts(posts, filter.sort, filter.query);

  useEffect(() => {
    fetchPosts();
  }, []);

  async function fetchPosts() {
    setLoading(true);
    setTimeout(async () => {
      const posts = await PostService.getPosts();
      setPosts(posts);
      setLoading(false);
    }, 1000);
  }

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  };

  const removePost = (selectedPost) => {
    setPosts(posts.filter((post) => post.id !== selectedPost.id));
  };

  const openModal = () => {
    setModal(true);
  };

  return (
    <div className="App">
      {/* TODO: add necessary margins */}
      <CustomButton onClick={openModal}>Create new post</CustomButton>
      <ModalWindow visibility={modal} setVisibility={setModal}>
        <NewPostForm create={createPost} />
      </ModalWindow>
      <PostsFilter filter={filter} setFilter={setFilter} />
      {isLoading ? (
        <div className="spinner"><Spinner/></div>
      ) : (
        <PostsList
          remove={removePost}
          title={"Main news"}
          posts={searchedAndSortedPosts}
        />
      )}
    </div>
  );
}

export default App;
