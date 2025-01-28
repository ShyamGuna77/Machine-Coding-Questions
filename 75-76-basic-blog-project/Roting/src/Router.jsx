import PostList from "./components/PostList";
import UserList from "./components/UserList";
import TodoList from "./components/TodoList";
import RootLayout from "./components/RootLayout";
import { createBrowserRouter, Navigate } from "react-router-dom";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {index: true, element: <Navigate to="/posts" /> }, // Redirect to /posts
      { path: "/posts", element: <PostList /> },
      { path: "/users", element: <UserList /> },
      { path: "/todos", element: <TodoList /> },
    ],
  },
]);
