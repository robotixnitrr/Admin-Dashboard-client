import {motion} from 'motion/react';
function Navbar() {
  return (
    <motion.nav
      animate={{
        y: [-100, 0],
        transition: { duration: 0.3 },
      }}
      className="navbar navbar-expand-lg shadow-sm p-3 bg-dark"
      data-bs-theme="dark"
    >
      <div className="container-fluid">
        <a href="" className="navbar-brand fw-bold fs-4">
          Robotix Club NITRR
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="true"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>
    </motion.nav>
  );
}

export default Navbar;
