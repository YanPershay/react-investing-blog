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
import { useFetching } from "./hooks/useFetching";
import { getPagesArray, getPagesCount } from "./utils/pages";
import Pagination from "./components/UI/pagination/Pagination";

function App() {
  const [posts, setPosts] = useState("");
  const [filter, setFilter] = useState({ sort: "", query: "" });
  const [modal, setModal] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [fetchPosts, isLoading, error] = useFetching(async () => {
    const response = await PostService.getPosts(limit, currentPage);
    setPosts(response.data);
    const totalCount = response.headers["x-total-count"];
    setTotalPages(getPagesCount(totalCount, limit));
  });

  const searchedAndSortedPosts = usePosts(posts, filter.sort, filter.query);

  useEffect(() => {
    fetchPosts();
  }, [currentPage]);

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

  const changePage = (page) => {
    setCurrentPage(page);
    fetchPosts();
  };

  return (
    <div className="App">
      {/* TODO: add necessary margins */}
      <CustomButton onClick={openModal}>Create new post</CustomButton>
      <ModalWindow visibility={modal} setVisibility={setModal}>
        <NewPostForm create={createPost} />
      </ModalWindow>
      <PostsFilter filter={filter} setFilter={setFilter} />
      {error && <h1>An error has occured: ${error}</h1>}
      {isLoading ? (
        <div className="spinner">
          <Spinner />
        </div>
      ) : (
        <PostsList
          remove={removePost}
          title={"Main news"}
          posts={searchedAndSortedPosts}
        />
      )}
      <Pagination
        currentPage={currentPage}
        changePage={changePage}
        totalPages={totalPages}
      />
    </div>
  );
}

export default App;
