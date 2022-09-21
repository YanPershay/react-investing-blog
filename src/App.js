import React, {useState} from "react";
import NewPostForm from "./components/NewPostForm";
import PostsList from "./components/PostsList";
import "./styles/App.css";

function App() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "Brent has grown 21.09.2022",
      text: "Brent oil has grown 21.09.2022 after long failing. Now it has price 106 per bar.",
    },
    {
      id: 2,
      title: "Financial market still falling down",
      text: "Yan Pershay has a chance to buy shares on bears market.",
    },
  ]);

  return (
    <div className="App">
      <NewPostForm/>
      <PostsList title={"Main news"} posts={posts} />
    </div>
  );
}

export default App;
