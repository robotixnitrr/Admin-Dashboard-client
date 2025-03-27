import { Navigate, Route, Routes } from "react-router-dom";
// import Sidebar from "../../components/Sidebar";
import Sidebar from "../../components/Sidebar";
import { endpoints } from "../../endPoints";
import HomePage from "./homePage/HomePage";
import ManageBlogs from "./manageBlogs/ManageBlogs";
import ManageEvents from "./manageEvents/ManageEvents";
import { motion } from 'motion/react'
import ManageUsers from "./manageUsers/ManageUsers";
import CreateBlogPage from "./manageBlogs/CreateBlogPage";


function Dashboard() {
  return (
    <div className="container-fluid pt-3">
      <div className="row">
        <Sidebar />
        <motion.div animate={{ opacity: 1, transition: { duration: 0.5 } }} initial={{ opacity: 0 }} className="container-fluid col mx-auto rounded-4">
          <Routes>
            <Route path={"/*"} element={<Navigate to={endpoints.dashboard} />} />
            <Route index element={<HomePage />} />
            <Route path={endpoints.dashboardPaths.manageBlogs} element={<ManageBlogs />} />
            <Route path={endpoints.dashboardPaths.manageEvents} element={<ManageEvents />} />
            <Route path={endpoints.dashboardPaths.manageUsers} element={<ManageUsers />} />
            <Route path={endpoints.dashboardPaths.createBlog} element={<CreateBlogPage />} />
          </Routes>
        </motion.div>
      </div>
    </div>
  );
}
export default Dashboard;
