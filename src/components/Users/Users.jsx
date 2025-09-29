import { Link, useLoaderData } from "react-router";

const Users = () => {
  const users = useLoaderData();

  return (
    <div>
      {users.map((user) => (
        <div className=" border  m-4 p-2" key={user.id}>
          <h2>{user.name}</h2>
          <p>{user.email}</p>
          <Link to={`/user/${user.id}`}>show Details</Link>
        </div>
      ))}
    </div>
  );
};

export default Users;
