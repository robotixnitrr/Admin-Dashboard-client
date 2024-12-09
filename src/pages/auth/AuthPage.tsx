import { motion } from "motion/react";
import Login from "../../assets/login.svg?react";
import { useNavigate } from "react-router-dom";
import { endpoints } from "../../endPoints";
import { useDispatch } from "react-redux";
import { setLoading } from "../../redux/loader/loaderSlice";
function AuthPage() {
  const dispatch = useDispatch();

  const navigate = useNavigate();
  function login(){
    dispatch(setLoading(true));
    console.log('login')
    setTimeout(function(){
      console.log("login")
      dispatch(setLoading(false));
      sessionStorage.setItem('user',"true");
      navigate(endpoints.dashboard)
    },2000);
  }
  return (
    <>
      <div className="container mt-5 pt-5">
        <div className="row">
          <div className="col-lg-5 col-md-9 mx-auto">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.3 }}
              className="card mx-auto rounded-4 shadow border-0"
            >
              <div className="card-body">
                <p className="fs-2 fw-bold text-center mb-0">ADMIN LOGIN</p>
                <p className="small text-secondary text-center">
                  Sign in to get access to the admin dashboard in a few simple
                  steps.
                </p>
                <hr />
                <div className="mb-4">
                  <label htmlFor="" className="text-secondary">
                    Username/Email
                  </label>
                  <input
                    type="email"
                    className="form-control form-control-lg fs-6 py-3"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="" className="text-secondary">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control form-control-lg fs-6 py-3"
                  />
                </div>
                <div className="mb-4">
                  <button onClick={() => login()} className="btn btn-dark rounded-3 btn-lg fw-semibold fs-4 float-end w-sm-100 py-2">
                    LOGIN <Login style={{ width: 30, height: 30 }} />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      {/* <Loader/> */}
    </>
  );
}

export default AuthPage;
