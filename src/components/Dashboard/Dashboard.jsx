import { NavLink, Outlet } from "react-router";

const Dashboard = () => {
  return (
    <div className="flex justify-between items-center gap-12">
      <aside className="flex flex-col">
        <NavLink to={"/dashboard/profile"}>Profile</NavLink>
        <NavLink to={"/dashboard/post"}>Post</NavLink>
        <NavLink to={"/dashboard/blog"}>Blog</NavLink>
        <NavLink to={"/info"}>Personal Info</NavLink>
      </aside>
      <Outlet></Outlet>
    </div>
  );
};

export default Dashboard;
