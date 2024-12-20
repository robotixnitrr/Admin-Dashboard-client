import { useEffect, useState } from "react";
import CreateBlog from "../../../components/CreateBlog";
import CreateEvent from "../../../components/CreateEvent";
import api from "../../../api/axios";

interface stats {
  users: number,
  events: number,
  blogs: number,
  workshops: number,
  projects: number
}

function HomePage() {
  const [stats, setStats] = useState<stats>({ users: 0, events: 0, blogs: 0, workshops: 0, projects: 0 });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await api('/admin/stats');

        setStats(response.data);
      } catch (error) {
        console.error("Error fetching stats:", error);
      }
    };

    fetchStats();
  }, []);

  return (
    <div className="row">
      <div className="col-12 col-lg-6">
        <div className="row rounded-4 px-3 gap-3">
          <div
            className="col shadow-sm rounded-4 p-2"
            style={{ backgroundColor: "#F2D2BD" }}
          >
            <p className="display-2 fw-bold mb-0">{stats.users}</p>
            <p className="small text-nowrap">
              Total <span className="d-xl-inline-block d-none">Active</span>{" "}
              Users
            </p>
          </div>
          <div
            className="col shadow-sm rounded-4 p-2"
            style={{ backgroundColor: "#FAF7F0" }}
          >
            <p className="display-2 fw-bold mb-0">{stats.events}</p>
            <p className="small text-nowrap">Upcoming Events</p>
          </div>
          <div
            className="col shadow-sm rounded-4 p-2"
            style={{ backgroundColor: "#D8D2C2" }}
          >
            <p className="display-2 fw-bold mb-0">{stats.blogs}</p>
            <p className="small text-nowrap">Total Blog Posts</p>
          </div>
          <div
            className="col shadow-sm rounded-4 p-2"
            style={{ backgroundColor: "#F8EDED", width: "fit-content" }}
          >
            <p className="display-2 fw-bold mb-0">{stats.workshops}</p>
            <p className="small text-nowrap">Upcoming Workshops</p>
          </div>
          <div
            className="col shadow-sm rounded-4 p-2"
            style={{ backgroundColor: "#CADABF", width: "fit-content" }}
          >
            <p className="display-2 fw-bold mb-0">{stats.projects}</p>
            <p className="small text-nowrap">Project Submissions</p>
          </div>
        </div>
        <CreateEvent />
      </div>
      <div className="col-12 col-lg-6 mt-3 mt-md-0">
        <CreateBlog />
      </div>
    </div>
  );
}

export default HomePage;
