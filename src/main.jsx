import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import Root from "./components/Root/Root.jsx";
import Users from "./components/Users/Users.jsx";
import User from "./components/Users/User.jsx";
import Dashboard from "./components/Dashboard/Dashboard.jsx";
import Profile from "./components/Profile/Profile.jsx";

import Post from "./components/Post/Post.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: App },
      {
        path: "/users",
        loader: () => fetch("https://jsonplaceholder.typicode.com/users"),

        element: <Users></Users>,
      },
      {
        path: "/user/:id",
        loader: ({ params }) =>
          fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`),
        Component: User,
      },
      // {
      //   path: "blog",
      //   element: <Blog />,
      // },
      {
        path: "dashboard",
        Component: Dashboard,
        children: [
          { index: true, element: <Profile></Profile> },
          { path: "profile", element: <Profile /> },
          { path: "post", element: <Post /> },
        ],
      },
    ],
  },

  {
    path: "*",
    element: <h1>404!! you have to change route</h1>,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
