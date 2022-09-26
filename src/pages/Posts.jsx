import React, { useEffect, useRef, useState } from "react";
import NewPostForm from "../components/NewPostForm";
import PostsFilter from "../components/PostsFilter";
import PostsList from "../components/PostsList";
import CustomButton from "../components/UI/button/CustomButton";
import ModalWindow from "../components/UI/modal/ModalWindow";
import { usePosts } from "../hooks/usePosts";
import PostService from "../api/PostService";
import "./Posts.css";
import Spinner from "../components/UI/spinner/Spinner";
import { useFetching } from "../hooks/useFetching";
import { getPagesCount } from "../utils/pages";
import Pagination from "../components/UI/pagination/Pagination";
import { useObserver } from "../hooks/useObserver";
import CustomSelect from "../components/UI/select/CustomSelect";

function Posts() {
  const [posts, setPosts] = useState("");
  const [filter, setFilter] = useState({ sort: "", query: "" });
  const [modal, setModal] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [fetchPosts, isLoading, error] = useFetching(async () => {
    const response = await PostService.getPosts(limit, currentPage);
    setPosts([...posts, ...response.data]);
    const totalCount = response.headers["x-total-count"];
    setTotalPages(getPagesCount(totalCount, limit));
  });
  const lastElement = useRef();

  const searchedAndSortedPosts = usePosts(posts, filter.sort, filter.query);

  const canLoadPosts = currentPage < totalPages;

  useObserver(lastElement, canLoadPosts, isLoading, () => {
    setCurrentPage(currentPage + 1);
  });

  useEffect(() => {
    fetchPosts(limit, currentPage);
  }, [currentPage, limit]);

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
      <CustomSelect
        value={limit}
        onChange={(value) => setLimit(value)}
        defaultOption="Number of items per page"
        options={[
          { value: 5, name: "5" },
          { value: 10, name: "10" },
          { value: 20, name: "20" },
          { value: -1, name: "All" },
        ]}
      />
      {error && <h1>An error has occured: ${error}</h1>}
      <PostsList
        remove={removePost}
        title={"Main news"}
        posts={searchedAndSortedPosts}
      />
      <div ref={lastElement} style={{ height: 20, background: "red" }}></div>
      {isLoading && (
        <div className="spinner">
          <Spinner />
        </div>
      )}
      <Pagination
        currentPage={currentPage}
        changePage={changePage}
        totalPages={totalPages}
      />
    </div>
  );
}

export default Posts;
