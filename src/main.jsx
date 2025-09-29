import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import Root from "./components/Root/Root.jsx";
import Users from "./components/Users/Users.jsx";
import User from "./components/Users/User.jsx";

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
