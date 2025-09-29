import React from "react";
import { useLoaderData, useNavigate } from "react-router";

const User = () => {
  const user = useLoaderData();
  console.log(user);
  const navigate = useNavigate();

  return (
    <div>
      <h1>hello {user.name}</h1>
      <h1>{user.username}</h1>
      <p>{user.website}</p>
      <button onClick={() => navigate(-1)}>back users</button>
    </div>
  );
};

export default User;
