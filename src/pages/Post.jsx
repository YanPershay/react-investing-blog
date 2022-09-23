import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PostService from "../api/PostService";
import Spinner from "../components/UI/spinner/Spinner";
import { useFetching } from "../hooks/useFetching";
import classes from "./Post.module.css";

const Post = () => {
  const params = useParams();
  const [post, setPost] = useState("");
  const [comments, setComments] = useState([]);
  const [fetchPostById, isLoading, error] = useFetching(async () => {
    const post = await PostService.getPostById(params.id);
    setPost(post);
  });
  const [fetchComments, isComLoading, comError] = useFetching(async () => {
    const post = await PostService.getComments(params.id);
    setComments(post);
  });

  useEffect(() => {
    fetchPostById();
    fetchComments();
  }, []);

  return (
    <div>
      {isLoading ? (
        <Spinner />
      ) : (
        <div>
          <h1>
            {post.id}. {post.title}
          </h1>
          <p>{post.body}</p>
        </div>
      )}
      <h1>Comments</h1>
      {isComLoading ? (
        <Spinner />
      ) : (
        <div>
          {comments.map((c) => (
            <div className={classes.comment} key={c.id}>
              <h5>{c.email}</h5>
              <div>{c.body}</div>
              <hr />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Post;
