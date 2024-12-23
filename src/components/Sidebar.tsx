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

  // Function to handle user logout
  const logout = () => {
    sessionStorage.removeItem("user");
    navigate(endpoints.login);
  };

  return (
    <div className="w-64 h-full p-6 rounded-4 shadow-lg" aria-label="Sidebar Navigation">
      <div className="flex items-center mb-6">
        {/* <img src={profileImage} alt="Profile of Amrit Utsav" className="rounded-full w-16 h-16 border-2 border-gray-700 shadow-md" /> */}
        <p className="text-xl font-bold ml-4">Hello Admin!</p>
        <button onClick={logout} className="ml-auto p-2 hover:bg-gray-400 rounded-full transition duration-200" aria-label="Logout">
          <Logout className="h-6 w-6" />
        </button>
      </div>
      <div className="flex flex-col space-y-3">
        {[
          { to: endpoints.dashboard, label: "Dashboard", icon: <DashboardSvg className="h-6 w-6" /> },
          { to: `${endpoints.dashboard}${endpoints.dashboardPaths.manageBlogs}`, label: "Manage Blogs", icon: <BlogSvg className="h-6 w-6" /> },
          { to: `${endpoints.dashboard}${endpoints.dashboardPaths.manageEvents}`, label: "Manage Events", icon: <EventSvg className="h-6 w-6" /> },
          { to: `${endpoints.dashboard}${endpoints.dashboardPaths.manageUsers}`, label: "Manage Users", icon: <UserSvg className="h-6 w-6" /> },
          // { to: endpoints.dashboardPaths.home, label: "Send Newsletters", icon: <NewsLetterSvg className="h-6 w-6" /> },
        ].map(({ to, label, icon }) => (
          <NavLink
            key={label}
            to={to}
            className={({ isActive }) => 
              `flex items-center p-3 rounded-lg text-md transition-colors duration-300 ${isActive ? 'bg-gray-700 text-white' : 'hover:bg-gray-700 hover:text-white'}`
            }
            end={to === endpoints.dashboard}
          >
            {icon}
            <span className="ml-3 font-medium text-md">{label}</span>
          </NavLink>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;