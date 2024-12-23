import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import "./App.css";
import { endpoints } from "./endPoints";
import { useEffect } from "react";
import { toast } from "react-toastify";
import AuthPage from "./pages/auth/AuthPage";
import type { RootState } from "./redux/store";
import { useSelector } from "react-redux";
import Navbar from "./components/Navbar";
import Loader from "./components/Loader";
import Dashboard from "./pages/dashboard/Dashboard";

function App() {
  const loading = useSelector((state: RootState) => state.loaderState.loading);
  return (
    <Router>
      {loading && <Loader />}
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to={endpoints.dashboard} />} />
        <Route path={endpoints.login} element={<AuthPage />} />
        <Route
          path={endpoints.dashboardAll}
          element={<ProtectedRoutes component={<Dashboard />} />}
        />
      </Routes>
    </Router>
  );
}

function ProtectedRoutes({ component }: { component: JSX.Element }) {
  const navigate = useNavigate();
  const location = useLocation();
  const user = sessionStorage.getItem("user"); // will edit later using redux
  useEffect(() => {
    if (user === null) {
      toast.error("You need to be logged in to access this page");
      navigate(endpoints.login, {
        state: {
          from: location.pathname,
        },
      });
    }
  }, []);

  return <>{component}</>;
}

export default App;
