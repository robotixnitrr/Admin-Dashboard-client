import {motion} from 'motion/react';
function Navbar() {
  return (
    <motion.nav
      animate={{
        y:[-100,0],
        transition:{duration:0.3}
      }}
      className="navbar navbar-expand-lg shadow-sm p-3 bg-dark"
      data-bs-theme="dark"
    >
      <div className="container-fluid">
        <a href="" className="navbar-brand fw-bold fs-4">
          Robotix Club NITRR
        </a>
      </div>
    </motion.nav>
  );
}

export default Navbar;
