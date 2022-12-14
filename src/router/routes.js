import About from "../pages/About";
import Login from "../pages/Login";
import Photos from "../pages/Photos";
import Post from "../pages/Post";
import Posts from "../pages/Posts";

export const privateRoutes = [
  { path: "/posts", component: <Posts />, exact: false },
  { path: "/photos", component: <Photos />, exact: false },
  { path: "/about", component: <About />, exact: true },
  { path: "/posts/:id", component: <Post />, exact: true },
];

export const publicRoutes = [
    { path: "/login", component: <Login />, exact: false },
  ];
