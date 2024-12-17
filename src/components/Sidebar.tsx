import profileImage from "../assets/profile.webp";
import Logout from "../assets/logout.svg?react";
import DashboardSvg from "../assets/dashboard.svg?react";
import BlogSvg from "../assets/blogs.svg?react";
import EventSvg from "../assets/events.svg?react";
import UserSvg from "../assets/users.svg?react";
import NewsLetterSvg from "../assets/newsletter.svg?react";
import { NavLink, useNavigate } from "react-router-dom";
import { endpoints } from "../endPoints";

function Sidebar() {
  const navigate = useNavigate();
  function logout() {
    sessionStorage.removeItem("user");
    navigate(endpoints.login);
  }
  return (
    <div
      className="collapse navbar-md-collapse d-lg-block mb-3 col-lg-3 col-xl-2"
      id="navbarSupportedContent"
    >
      <div className="rounded-pill border border-1 shadow-sm border-secondary d-flex align-items-center justify-content-between p-1">
        <div className="d-flex align-items-center">
          <img
            src={profileImage}
            alt="profile image"
            width={40}
            height={40}
            className="rounded-circle img-fluid"
          />
          <p className="fs-6 my-0 ms-2">Amrit Utsav</p>
        </div>
        <button
          onClick={() => logout()}
          className="btn border-0 rounded-circle"
        >
          <Logout height={30} width={30} />
        </button>
      </div>
      {/* sidebar */}
      <div
        className="list-group rounded-5 border-0 shadow-sm mt-4 p-3"
        style={{ backgroundColor: "#f0f0f0" }}
      >
        <NavLink
          to={`${endpoints.dashboard}`}
          className=" px-3 list-item list-item-active text-decoration-none text-dark py-3 rounded-4"
          style={({ isActive }) => {
            return {
              backgroundColor: isActive ? "white" : "",
            };
          }}
        >
          <DashboardSvg height={22} width={22} className="me-2" />
          Dashboard
        </NavLink>
        <NavLink
          to={`${endpoints.dashboard}${endpoints.dashboardPaths.manageBlogs}`}
          style={({ isActive }) => {
            return {
              backgroundColor: isActive ? "white" : "",
            };
          }}
          className=" px-3 list-item list-item-active text-decoration-none text-dark py-3 rounded-4"
          //   style={{ backgroundColor: "#f0f0f0" }}
        >
          <BlogSvg height={22} width={22} className="me-2" />
          Manage Blogs
        </NavLink>
        <NavLink
          to={`${endpoints.dashboard}${endpoints.dashboardPaths.manageEvents}`}
          style={({ isActive }) => {
            return {
              backgroundColor: isActive ? "white" : "",
            };
          }}
          className=" px-3 list-item list-item-active text-decoration-none text-dark py-3 rounded-4"
          //   style={{ backgroundColor: "#f0f0f0" }}
        >
          <EventSvg height={22} width={22} className="me-2" />
          Manage Events
        </NavLink>
        <NavLink
          to={`${endpoints.dashboard}${endpoints.dashboardPaths.manageUsers}`}
          style={({ isActive }) => {
            return {
              backgroundColor: isActive ? "white" : "",
            };
          }}
          className=" px-3 list-item list-item-active text-decoration-none text-dark py-3 rounded-4"
          //   style={{ backgroundColor: "#f0f0f0" }}
        >
          <UserSvg height={22} width={22} className="me-2" />
          Manage Users
        </NavLink>
        <NavLink
          to={endpoints.dashboardPaths.home}
          style={({ isActive }) => {
            return {
              backgroundColor: isActive ? "white" : "",
            };
          }}
          className=" px-3 list-item list-item-active text-decoration-none text-dark py-3 rounded-4"
          //   style={{ backgroundColor: "#f0f0f0" }}
        >
          <NewsLetterSvg height={22} width={22} className="me-2" />
          Send Newsletters
        </NavLink>
      </div>
    </div>
  );
}

export default Sidebar;
