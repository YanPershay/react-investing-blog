import React from "react";
import PostItem from "./PostItem";

const PostsList = ({ posts, title, remove }) => {
  return (
    <div>
      <h1>{title}</h1>
      {posts.map((post, index) => (
        <PostItem remove={remove} number={index + 1} post={post} key={post.id} />
      ))}
    </div>
  );
};

export default PostsList;
