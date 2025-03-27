import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchStats } from "../../../redux/statsSlice";
import { AppDispatch } from "../../../redux/store";

function HomePage() {
  const dispatch = useDispatch<AppDispatch>();
  const stats = useSelector((state: any) => state.stats);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await dispatch(fetchStats() as any);
      } catch (error) {
        console.error("Failed to fetch stats:", error);
      }
    };

    fetchData();
  }, [dispatch]);

  return (
    <div className="row">
      <div className="col-12 col-lg-6">
        <div className="row rounded-4 px-3 gap-3">
          <div
            className="col shadow-sm rounded-4 p-2"
            style={{ backgroundColor: "#F2D2BD" }}
          >
            <p className="display-2 fw-bold mb-0">{stats?.users || 0}</p>
            <p className="small text-nowrap">
              Total <span className="d-xl-inline-block d-none">Active</span>{" "}
              Users
            </p>
          </div>
          <div
            className="col shadow-sm rounded-4 p-2"
            style={{ backgroundColor: "#FAF7F0" }}
          >
            <p className="display-2 fw-bold mb-0">{stats?.events || 0}</p>
            <p className="small text-nowrap">Upcoming Events</p>
          </div>
          <div
            className="col shadow-sm rounded-4 p-2"
            style={{ backgroundColor: "#D8D2C2" }}
          >
            <p className="display-2 fw-bold mb-0">{stats?.blogs || 0}</p>
            <p className="small text-nowrap">Total Blog Posts</p>
          </div>
          <div
            className="col shadow-sm rounded-4 p-2"
            style={{ backgroundColor: "#F8EDED", width: "fit-content" }}
          >
            <p className="display-2 fw-bold mb-0">{stats?.workshops || 0}</p>
            <p className="small text-nowrap">Upcoming Workshops</p>
          </div>
          <div
            className="col shadow-sm rounded-4 p-2"
            style={{ backgroundColor: "#CADABF", width: "fit-content" }}
          >
            <p className="display-2 fw-bold mb-0">{stats?.projects || 0}</p>
            <p className="small text-nowrap">Project Submissions</p>
          </div>
        </div>
      </div>
      {/* <div className="col-12 col-lg-6 mt-3 mt-md-0">
        <CreateBlog />
      </div> */}
    </div>
  );
}

export default HomePage;
